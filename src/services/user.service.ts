import { IUser } from "../@types/user"
import { UserRepository } from "../repositories/user.repository"

export class UserService {
  private userRepository = new UserRepository();

  public createUser = (user: IUser) => {
    return this.userRepository.createUser(user)
  }
}