import { Status, Tag } from '@prisma/client';

export interface ICard {
  id?: number,
  name: string;
  day: Date;
  tag: string;
  resume: string;
  userId: Number;
  status: string;
}


export interface ICardCreate {
  name: string
  day: string
  tag: Tag
  resume: string
  status: Status
}