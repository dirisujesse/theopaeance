import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { CountriesModule } from './modules/countries/countries.module';
import { GenreModule } from './modules/genre/genre.module';
import { LanguagesModule } from './modules/languages/languages.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setContact(
      'Dirisu Jesse',
      'https://github.com/dirisujesse',
      'dirisujesse@gmail.com',
    )
    .setTitle('Theopaeance API')
    .setDescription('The Theopaeance API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const options: SwaggerDocumentOptions = {
    include: [
      CountriesModule,
      GenreModule,
      LanguagesModule,
    ],
    deepScanRoutes: true,
  }
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
