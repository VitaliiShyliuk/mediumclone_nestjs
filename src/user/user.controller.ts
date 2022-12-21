import { CreateUserDto } from '@app/user/dto/create-user.dto';
import { UserService } from '@app/user/user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  public async createUser(@Body('user') createUserDto: CreateUserDto) {
    const { email, username, bio, image } = await this.userService.createUser(
      createUserDto,
    );
    return {
      user: {
        email,
        username,
        bio,
        image,
      },
    };
  }
}
