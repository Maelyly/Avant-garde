import { ICardCreate } from '../@types/card';
import { CardRepository } from '../repositories/card.repository';

export class CardService {
  private cardRepository = new CardRepository();

  public createCard = async (userId: number, card: ICardCreate) => {
    return this.cardRepository.createCard(userId, card);
  };
  public findAllByUser = async (userId: number) => {
    return this.cardRepository.findAllByUser(userId);
  };
  public findAllByDay = async (userId: number, day: string) => {
    return this.cardRepository.findAllByDay(userId, new Date(day));
  };
  public findAllByTag = async (userId: number, tag: string) => {
    return this.cardRepository.findAllByTag(userId, tag);
  };
  public findAllByName = async (userId: number, name: string) => {
    return this.cardRepository.findAllByName(userId, name);
  };
  public findAllByStatus = async (userId: number, status: string) => {
    return this.cardRepository.findAllByStatus(userId, status);
  };
  public findAllById = async (userId: number, id: number) => {
    return this.cardRepository.findAllById(userId, id);
  };
  public filter = async (userId: number, data: any) => {
    return this.cardRepository.filter(userId, data);
  };
}
