import { IUser } from './user';

export interface ICard {
  name: string;
  day: Date;
  tag: string;
  resume: string;
  user: IUser;
  status: string;
}
