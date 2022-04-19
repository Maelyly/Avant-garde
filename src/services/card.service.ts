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
  public findAllByName = (userId: number, name: string) => {
    return this.cardRepository.findAllByName(userId, name);
  };
  public findAllByStatus = (userId: number, status: string) => {
    return this.cardRepository.findAllByStatus(userId, status);
  };
  public findAllById = (userId: number, id: number) => {
    return this.cardRepository.findAllById(userId, id);
  };
  // public find = (data: any) => {
  //   return this.cardRepository.find(data);
  // };
}
