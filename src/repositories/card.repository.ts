import { PrismaClient, User } from '.prisma/client';
import { hashSync } from 'bcrypt';
import { ICard } from '../@types/card';

const prisma = new PrismaClient();

export class CardRepository {
  public createCard = (newCard: ICard) => {
    return prisma.card.create({
      data: newCard,
    });
  };

  public findByName = async (name: string) => {
    const card = await prisma.card.findFirst({
      where: {
        name,
      },
    });
    return card;
  };

  public findByTag = async (tag: string) => {
    const card = await prisma.card.findFirst({
      where: {
        tag,
      },
    });
    return card;
  };

  public findByDay = async (day: Date) => {
    const card = await prisma.card.findFirst({
      where: {
        day,
      },
    });
    return card;
  };
  public findAllByUser = async (user: User) => {
    const card = await prisma.card.findMany({
      where: {
        user,
      },
    });
    return card;
  };

  public findAll = async () => {
    const card = await prisma.card.findMany();
    return card;
  };
  //   public findByStatus = async (status: string) => {
  //     const card = await prisma.card.findFirst({
  //       where: {
  //         status,
  //       },
  //     });
  //     return card;
  //   };
}
