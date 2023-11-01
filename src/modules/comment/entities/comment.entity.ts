import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Song } from 'src/modules/song/entities/song.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Schema({ collection: 'Comment' })
export class Comment {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: User;

  @Prop({ required: true })
  text: string;

  @Prop({ type: Types.ObjectId, ref: 'Song', required: true })
  song: Song;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }], required: false })
  replies: Comment[];
}

export type CommentDocument = HydratedDocument<Comment>;

export const CommentSchema = SchemaFactory.createForClass(Comment);
