import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { PassengerProvider } from "../providers/passenger.provider";
import { TripProvider } from "../providers/trip.provider";

@Controller('trips')
export class TripController {
  constructor(
    private readonly rootProvider: TripProvider,
    private readonly pasProvider: PassengerProvider
  ) {}

  @Get()
  getAll() {
    const result = new Promise((resolve, reject) => {
      this.rootProvider.getAll().then(trips => {
        const res = trips.map(trip => {
          return this.pasProvider.getAll({ where: {tripId: trip.id} }).then(passengers => {
            return {
              ...trip,
              passengers: passengers?.map(passenger => passenger?.user)
            }
          })
        });
        Promise.all(res).then(trips => resolve(trips))
      });
    });
    return result;
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    const result = new Promise((resolve, reject) => {
      this.rootProvider.getById(id).then(trip => {
        this.pasProvider.getAll({ where: {tripId: id} }).then(passengers => {
          resolve({
            ...trip,
            passengers: passengers.map(passenger => passenger?.user)
          });
        })
      })
    });
    return result;
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