import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { AppResponse, PostResponse } from 'src/entities/response.entity';
import { Genre } from './entities/genre.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('genre')
@ApiTags("Genre")
export class GenreController {
  constructor(
    private readonly genreService: GenreService,
    @Inject('CONTROLLER_METHOD_WRAPPER')
    private readonly methodWrapper,
  ) {}

  @Post()
  async create(
    @Body() createGenreDto: CreateGenreDto,
  ): Promise<AppResponse<PostResponse>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.create(createGenreDto);
      return {
        data: response,
      };
    });
  }

  @Get()
  async findAll(): Promise<AppResponse<Genre[]>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.findAll();
      return {
        data: response,
      };
    });
  }

  @Get('search')
  async search(@Query('q') q: string): Promise<AppResponse<PostResponse>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.findAll(q);
      return {
        data: response,
      };
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AppResponse<Genre>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.findOne(id);
      return {
        data: response,
      };
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ): Promise<AppResponse<Genre>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.update(id, updateGenreDto);
      return {
        data: response,
      };
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<AppResponse<PostResponse>> {
    return this.methodWrapper(async () => {
      const response = await this.genreService.remove(id);
      return {
        data: response,
      };
    });
  }
}
