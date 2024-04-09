import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Response,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Response() response,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const res = this.userService.update(+id, updateUserDto);
      if (res)
        return response
          .status(200)
          .json({ message: 'User updated successfully' });
    } catch (err) {
      return response
        .status(500)
        .json({ error: err.message, message: 'Failed to update user' });
    }
  }

  @Delete(':id')
  remove(@Response() response, @Param('id') id: string) {
    try {
      const res = this.userService.remove(+id);
      if (res)
        return response
          .status(200)
          .json({ message: 'User Deleted successfully' });
    } catch (err) {
      return response
        .status(500)
        .json({ error: err.message, message: 'Failed to delete user' });
    }
  }
}
