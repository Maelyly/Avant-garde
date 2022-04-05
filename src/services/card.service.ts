import { User } from '@prisma/client';
import { ICard } from '../@types/card';
import { IUser } from '../@types/user';
import { CardRepository } from '../repositories/card.repository';

export class CardService {
  private cardRepository = new CardRepository();

  public createCard = (card: ICard) => {
    return this.cardRepository.createCard(card);
  };
  public findAllByUser = (user: User) => {
    return this.cardRepository.findAllByUser(user);
  };
  public findAll = () => {
    return this.cardRepository.findAll();
  };
}
