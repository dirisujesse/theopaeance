import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './entities/genre.entity';
import { ControllerMethodProvider } from 'src/factory/controller-method.factory';
import { IdMethodProvider } from 'src/factory/id-method.factory';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Genre.name,
        schema: GenreSchema,
      },
    ]),
  ],
  controllers: [GenreController],
  providers: [GenreService, ControllerMethodProvider, IdMethodProvider],
})
export class GenreModule {}
