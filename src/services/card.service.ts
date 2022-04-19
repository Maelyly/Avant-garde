import { CardRepository } from '../repositories/card.repository';

export class CardService {
  private cardRepository = new CardRepository();

  public createCard = (card: any) => {
    return this.cardRepository.createCard(card);
  };
  public findAllByUser = (userId: number) => {
    return this.cardRepository.findAllByUser(userId);
  };
  public findAllByDay = (userId: number, day: string) => {
    return this.cardRepository.findAllByDay(userId, new Date(day));
  };
  public findAllByTag = (userId: number, tag: string) => {
    return this.cardRepository.findAllByTag(userId, tag);
  };
  public findAllByStatus = (userId: number, status: string) => {
    return this.cardRepository.findAllByStatus(userId, status);
  };
  public findAll = (id: number) => {
    return this.cardRepository.findAllByUser(id);
  };
}
