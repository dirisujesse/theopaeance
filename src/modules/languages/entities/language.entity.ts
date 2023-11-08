import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'Language' })
export class Language {
  @Prop({ unique: true, length: 3, lowercase: true })
  code: string;

  @Prop({ unique: true })
  name: string;
}

export type LanguageDocument = HydratedDocument<Language>;

export const LanguageSchema = SchemaFactory.createForClass(Language);
