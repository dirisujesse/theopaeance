import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Song } from 'src/modules/song/entities/song.entity';

@Schema({ collection: 'User' })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true, required: true })
  userName: string;

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

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }], required: false })
  comments?: Comment[];

  @Prop({ default: false })
  vetter: boolean;

  @Prop({ default: false })
  admin: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Song' }], required: false })
  contributions: Song[];
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
