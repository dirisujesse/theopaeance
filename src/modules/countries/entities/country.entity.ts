import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'Country' })
export class Country {
  @Prop()
  code: string;

  @Prop()
  emoji: string;
  
  @Prop()
  name: string;

  @Prop()
  dial_code: string;
}

export type CountryDocument = HydratedDocument<Country>;

export const CountrySchema = SchemaFactory.createForClass(Country);
