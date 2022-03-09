import { PrismaClient } from "@prisma/client"
import { IUser } from "../@types/user"

const prisma = new PrismaClient()

export class UserRepository {
  public createUser = (newUser: IUser) => {
    return prisma.user.create({
      data: newUser,
    })
  }
}
