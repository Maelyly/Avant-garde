import { Status, Tag } from '@prisma/client';

export interface ICard {
  id?: number;
  name: string;
  day: Date;
  tag: Tag;
  resume: string;
  userId: Number;
  status: Status;
}

export interface ICardCreate {
  name: string;
  day: string;
  tag: Tag;
  resume: string;
  status: Status;
}
