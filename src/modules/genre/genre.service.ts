import { Inject, Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from './entities/genre.entity';
import { Model } from 'mongoose';
import { PostResponse } from 'src/entities/response.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private readonly genreModel: Model<Genre>,
    @Inject('ID_METHOD_WRAPPER')
    private readonly idRequest,
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<PostResponse> {
    const doc = await this.genreModel.create(createGenreDto);
    await doc.save();
    return { message: 'Genre has been added' };
  }

  async findAll(q?: string): Promise<Genre[]> {
    if (q) {
      return this.genreModel
        .find({ name: { $regex: `[${q}]`, $options: 'i' } })
        .exec();
    }
    return this.genreModel.find().exec();
  }

  async findOne(id: string): Promise<Genre> {
    return this.idRequest(async () => this.genreModel.findById(id), id);
  }

  update(id: string, updateGenreDto: UpdateGenreDto) {
    return this.idRequest(async () => {
      return await this.genreModel.findByIdAndUpdate(id, updateGenreDto, {
        new: true,
      });
    }, id);
  }

  remove(id: string) {
    return this.idRequest(async () => {
      await this.genreModel.findByIdAndRemove(id);
      return { message: `Country $id has been deleted` };
    }, id);
  }
}
