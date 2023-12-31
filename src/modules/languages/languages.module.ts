import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Language, LanguageSchema } from './entities/language.entity';
import { ControllerMethodProvider } from 'src/components/factory/controller-method.factory';
import { PaginatedMethodProvider } from 'src/components/factory/paginated-method.factory';
import { IdMethodProvider } from 'src/components/factory/id-method.factory';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Language.name,
        schema: LanguageSchema,
      },
    ]),
  ],
  controllers: [LanguagesController],
  providers: [
    LanguagesService,
    ControllerMethodProvider,
    PaginatedMethodProvider,
    IdMethodProvider,
  ],
})
export class LanguagesModule {}
