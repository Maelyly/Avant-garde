export interface ICard {
  id?: number,
  name: string;
  day: Date;
  tag: string;
  resume: string;
  userId: Number;
  status: string;
}


export interface ICardCreationBody {
  name: string;
  day: Date;
  tag: string;
  resume: string;
  status: string;
}