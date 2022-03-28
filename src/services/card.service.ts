import { ICard } from '../@types/card';
import { CardRepository } from '../repositories/card.repository';

export class CardService {
  private cardRepository = new CardRepository();

  public createCard = (card: ICard) => {
    return this.cardRepository.createCard(card);
  };
}
