import { compareSync, hashSync } from 'bcrypt';
import { ILogin, IUser } from '../@types/user';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  private userRepository = new UserRepository();

  public createUser = async (user: IUser) => {
    const existentUser = await this.userRepository.findByEmail(user.email);

    if (existentUser) {
      return {
        error: 'email already taken'
      };
    }
    return this.userRepository.createUser(user);
  };

  public authenticate = async (login: ILogin) => {
    const user = await this.userRepository.findByEmail(login.email);
    if (!user) return null;

    const hashPassword = hashSync(login.password, 10);

    const isAuthenticated = compareSync(hashPassword, user?.password);

    return isAuthenticated ? user : null;
  };
}