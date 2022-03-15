import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { IUser } from '../@types/user';

const prisma = new PrismaClient();

export class UserRepository {
  public createUser = (newUser: IUser) => {

    newUser.password = hashSync(newUser.password, 10);

    return prisma.user.create({
      data: newUser,
    });
  };
}
