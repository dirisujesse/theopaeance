import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Composer } from 'src/modules/composer/entities/composer.entity';
import { Genre } from 'src/modules/genre/entities/genre.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Schema({ collection: 'Song' })
export class Song {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  contributor: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }], required: false })
  comments?: Comment[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Composer' }], required: false })
  composers?: Composer[];

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  lyrics: string;

  @Prop({ required: false })
  tonicSolfa?: string;

  @Prop({ required: true })
  approved: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  approver: User;

  @Prop({ required: true })
  language: string;

  @Prop({ required: false })
  country?: string;

  @Prop({ required: false })
  yearComposed?: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Genre' }], required: false })
  genre: Genre[];

  @Prop({ required: false })
  srtFile?: string;

  @Prop({ required: false })
  audioFile?: string;
}

export type SongDocument = HydratedDocument<Song>;

export const SongSchema = SchemaFactory.createForClass(Song);
