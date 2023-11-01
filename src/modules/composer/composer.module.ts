import { Module } from '@nestjs/common';
import { ComposerService } from './composer.service';
import { ComposerController } from './composer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Composer, ComposerSchema } from './entities/composer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Composer.name,
        schema: ComposerSchema,
      },
    ]),
  ],
  controllers: [ComposerController],
  providers: [ComposerService],
})
export class ComposerModule {}
