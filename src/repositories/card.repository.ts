import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export class CardRepository {
  public createCard = (newCard: any) => {
    return prisma.card.create({
      data: newCard,
    });
  };

  public findByName = async (userId: number, name: string) => {
    const card = await prisma.card.findFirst({
      where: {
        userId,
        name,
      },
    });
    return card;
  };

  public findAllByTag = async (userId: number, tag: string) => {
    const card = await prisma.card.findMany({
      where: {
        userId,
        tag,
      },
    });
    return card;
  };

  public findAllByDay = async (userId: number, day: Date) => {
    const card = await prisma.card.findMany({
      where: {
        userId,
        day,
      },
    });
    return card;
  };

  public findAllByUser = async (userId: number) => {
    const card = await prisma.card.findMany({
      where: {
        userId,
      },
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true
      }
    });
    return card;
  };

  public findAll = async () => {
    const card = await prisma.card.findMany();
    return card;
  };

  public findAllByStatus = async (userId: number, status: string) => {
    const card = await prisma.card.findMany({
      where: {
        userId,
        status,
      },
    });
    return card;
  };
}
