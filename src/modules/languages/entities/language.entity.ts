import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'Language' })
export class Language {
  @Prop()
  code: string;

  @Prop()
  name: string;
}

export type LanguageDocument = HydratedDocument<Language>;

export const LanguageSchema = SchemaFactory.createForClass(Language);
