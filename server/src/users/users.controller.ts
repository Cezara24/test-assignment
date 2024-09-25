import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  async addUser(@Body() userData: { name: string; email: string; phone: string }) {
    const user = await this.usersService.createUser(userData);
    console.log(user);
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-user/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.usersService.getUserById(id);
    return user;
  }
}
