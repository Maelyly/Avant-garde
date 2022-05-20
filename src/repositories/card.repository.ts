import { PrismaClient } from '.prisma/client';
import { Status, Tag } from '@prisma/client';
import { ICardCreate } from '../@types/card';

const prisma = new PrismaClient();

export class CardRepository {
  public createCard = async (
    userId: number,
    { day, tag, name, resume, status }: ICardCreate
  ) => {
    return await prisma.card.create({
      data: {
        day,
        tag,
        status,
        name,
        resume,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  };
  public filter = async (filter: any) => {

    if(filter.tag === 'undefined') {
      delete filter.tag;
    }

    const card = await prisma.card.findMany({
      where:
        filter,
    });
    return card;
  };
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
        prioritize: true,
      },
    });
    return card;
  };

  public findAllByTag = async (userId: number, tag: Tag) => {
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
        prioritize: true,
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
        prioritize: true,
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
        prioritize: true,
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
        prioritize: true,
      },
    });
    return card;
  };

  public findAllByStatus = async (userId: number, status: Status) => {
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
        prioritize: true,
      },
    });
    return card;
  };
  public updateCard = async (data: any) => {
    const id = data.id;
    const card = await prisma.card.update({
      where: { id },
      data: data,
    });
    return card;
  };

  public deleteCard = async (id: number) => {
    console.log('delleting id', id);
    await prisma.card.delete({
      where: { id },
    });
  };
}
