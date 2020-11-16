import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CityController } from "./controllers/city.controller";
import { PassengerController } from "./controllers/passenger.controller";
import { TripController } from "./controllers/trip.controller";
import { UserController } from "./controllers/user.controller";

import { City } from './entities/City';
import { Passenger } from "./entities/Passenger";
import { Trip } from "./entities/Trip";
import { User } from './entities/User';

import { CityProvider } from "./providers/city.provider";
import { PassengerProvider } from "./providers/passenger.provider";
import { TripProvider } from "./providers/trip.provider";
import { UserProvider } from "./providers/user.provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([ City, User, Trip, Passenger ])
  ],
  exports: [TypeOrmModule],
  controllers: [
    CityController,
    UserController,
    TripController,
    PassengerController
  ],
  providers: [
    CityProvider,
    UserProvider,
    TripProvider,
    PassengerProvider
  ]
})

export class MainModule {}