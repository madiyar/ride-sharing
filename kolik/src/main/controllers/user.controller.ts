import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { UserProvider } from "../providers/user.provider";

@Controller('users')
export class UserController {
  constructor(
    private readonly rootProvider: UserProvider,
  ) {}

  @Get()
  getAll() {
    return this.rootProvider.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.rootProvider.getById(id);
  }

  @Post('auth')
  userAuth(@Body() data) {
    return this.rootProvider.getOne({where: {phone: data.phone, password: data.password}});
  }

  @Post()
  create(@Body() data) {
    return this.rootProvider.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.rootProvider.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rootProvider.delete(id);
  }
}