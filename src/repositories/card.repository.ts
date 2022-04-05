import { PrismaClient, User } from '.prisma/client';
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
  public findByUser = async (user: User) => {
    const card = await prisma.card.findFirst({
      where: {
        user,
      },
    });
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
