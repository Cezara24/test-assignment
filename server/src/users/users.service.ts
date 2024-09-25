import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(userData: { name: string; email: string; phone: string }): Promise<User> {
    return this.userModel.create(userData);
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
