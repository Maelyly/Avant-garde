import { Status, Tag } from '@prisma/client';
import { ICardCreate } from '../@types/card';
import { CardRepository } from '../repositories/card.repository';

export class CardService {
  private cardRepository = new CardRepository();

  public createCard = async (userId: number, card: ICardCreate) => {
    return await this.cardRepository.createCard(userId, card);
  };
  public findAllByUser = async (userId: number) => {
    return await this.cardRepository.findAllByUser(userId);
  };
  public findAllByDay = async (userId: number, day: string) => {
    return await this.cardRepository.findAllByDay(userId, new Date(day));
  };
  public findAllByTag = async (userId: number, tag: string) => {
    return await this.cardRepository.findAllByTag(userId, tag as Tag);
  };
  public findAllByName = async (userId: number, name: string) => {
    return await this.cardRepository.findAllByName(userId, name);
  };
  public findAllByStatus = async (userId: number, status: string) => {
    return await this.cardRepository.findAllByStatus(userId, status as Status);
  };
  public findAllById = async (userId: number, id: number) => {
    return await this.cardRepository.findAllById(userId, id);
  };
  public filter = async (data: any) => {
    return await this.cardRepository.filter(data);
  };
  public updateCard = async (data: any) => {
    return await this.cardRepository.updateCard(data);
  };
  public deleteCard = async (id: number) => {
    return await this.cardRepository.deleteCard(id);
  };
}
