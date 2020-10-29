import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";

import { User } from './entities/User';
import { UserProvider } from "./providers/user.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ])
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