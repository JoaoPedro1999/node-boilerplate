import Users from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllProviders from '../dtos/IFindAllProviders';

export default interface IUsersRepository {
  findAllProvider(data: IFindAllProviders): Promise<Users[]>;
  findById(id: string): Promise<Users | undefined>;
  findByEmail(email: string): Promise<Users | undefined>;
  create(data: ICreateUserDTO): Promise<Users>;
  save(user: Users): Promise<Users>;
}
