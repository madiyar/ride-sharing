import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";

import { City } from './entities/City';
import { User } from './entities/User';
import { UserProvider } from "./providers/user.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([ City, User ])
  ],
  exports: [TypeOrmModule],
  controllers: [
    UserController,
  ],
  providers: [
    UserProvider,
  ]
})

export class MainModule {}