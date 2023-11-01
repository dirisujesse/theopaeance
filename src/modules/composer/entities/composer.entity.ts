import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Song } from 'src/modules/song/entities/song.entity';

@Schema({ collection: 'Composer' })
export class Composer {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: false })
  verified: boolean;

  @Prop({
    unique: true,
    match: /\b[\w\d\W\D]+(?:@(?:[\w\d\W\D]+(?:\.(?:[\w\d\W\D]+))))\b/gi,
    required: true,
  })
  email: string;

  @Prop({
    unique: true,
    match: /^(\+[0-9]{1,4}\s)?[0-9]{5,15}$/gi,
    required: true,
  })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  province: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Song' }], required: false })
  songs: Song[];
}

export type ComposerDocument = HydratedDocument<Composer>;

export const ComposerSchema = SchemaFactory.createForClass(Composer);
