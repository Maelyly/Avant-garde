import { Tag } from '../components/enums/Tag';
import { Status } from '../components/enums/Status';

export interface ICard {
  id?: number;
  name: string;
  day: Date;
  tag: Tag;
  resume: string;
  userId: Number;
  status: Status;
}
