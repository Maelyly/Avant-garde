import { PrismaClient, User } from '.prisma/client';

const prisma = new PrismaClient();

export class CardRepository {
  public createCard = (newCard: any) => {
    return prisma.card.create({
      data: newCard,
    });
  };
  // public find = async (data: any) => {
  //   const { name, day, tag, resume, userId, status } = data;
  //   const card = await prisma.card.findMany({
  //     where: {
  //       name: name != '' ? name : null,
  //       day: day != '' ? day : null,
  //       tag: tag != '' ? tag : null,
  //       resume: resume != '' ? resume : null,
  //       userId: userId != '' ? userId : null,
  //       status: status != '' ? status : null,
  //     },
  //   });
  //   return card;
  // };
  public findAllByName = async (userId: number, name: string) => {
    const card = await prisma.card.findFirst({
      where: {
        userId,
        name,
      },
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true,
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
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true,
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
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true,
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
        tag: true,
      },
    });
    return card;
  };

  public findAllById = async (userId: number, id: number) => {
    const card = await prisma.card.findMany({
      where: { id, userId },
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true,
      },
    });
    return card;
  };

  public findAllByStatus = async (userId: number, status: string) => {
    const card = await prisma.card.findMany({
      where: {
        userId,
        status,
      },
      select: {
        day: true,
        name: true,
        resume: true,
        status: true,
        tag: true,
      },
    });
    return card;
  };
}
