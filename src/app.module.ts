import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './modules/comment/comment.module';
import { UserModule } from './modules/user/user.module';
import { SongModule } from './modules/song/song.module';
import { ComposerModule } from './modules/composer/composer.module';
import { CountriesModule } from './modules/countries/countries.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { GenreModule } from './modules/genre/genre.module';

import 'dotenv/config';

const env = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${env.MONGO_USER_NAME}:${env.MONGO_PASSWORD}@theopaeanceserverless.sauq3qs.mongodb.net/`,
      {
        retryWrites: true,
        dbName: 'AppDb',
        writeConcern: {
          w: 'majority',
        },
      },
    ),
    CommentModule,
    UserModule,
    SongModule,
    ComposerModule,
    CountriesModule,
    LanguagesModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
