import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './entities/country.entity';

import { ControllerMethodProvider } from '../../components/factory/controller-method.factory';
import { PaginatedMethodProvider } from 'src/components/factory/paginated-method.factory';
import { IdMethodProvider } from 'src/components/factory/id-method.factory';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
      },
    ]),
  ],
  controllers: [CountriesController],
  providers: [
    CountriesService,
    ControllerMethodProvider,
    PaginatedMethodProvider,
    IdMethodProvider,
  ],
})
export class CountriesModule {}
