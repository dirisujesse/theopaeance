import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Inject,
  DefaultValuePipe,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import {
  AppPaginatedResponse,
  AppResponse,
  PostResponse,
} from 'src/components/schemas/response.schema';
import { Country } from './entities/country.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('countries')
@ApiTags("Countries")
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
    @Inject('CONTROLLER_METHOD_WRAPPER')
    private readonly methodWrapper,
  ) {}

  @Post()
  async create(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<AppResponse<PostResponse>> {
    return await this.methodWrapper(async () => {
      const response = await this.countriesService.create(createCountryDto);
      return {
        data: response,
      };
    });
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(20)) limit: number,
  ): Promise<AppPaginatedResponse<Country>> {
    return await this.methodWrapper(async () => {
      const response = await this.countriesService.findAll(page, limit);
      return {
        data: response.data,
        pages: response.pages,
        previous: response.previous,
        page: response.page,
        next: response.next,
        count: response.count,
      };
    });
  }

  @Get('search')
  async search(
    @Query('q') q: string,
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(20)) limit: number,
  ): Promise<AppPaginatedResponse<Country>> {
    return this.methodWrapper(async () => {
      const response = await this.countriesService.search(q, page, limit);
      return {
        data: response.data,
        pages: response.pages,
        previous: response.previous,
        page: response.page,
        next: response.next,
        count: response.count,
      };
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AppResponse<Country>> {
    return await this.methodWrapper(async () => {
      const response = await this.countriesService.findOne(id);
      return {
        data: response,
      };
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<AppResponse<Country>> {
    return await this.methodWrapper(async () => {
      const response = await this.countriesService.update(id, updateCountryDto);
      return {
        data: response,
      };
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<AppResponse<PostResponse>> {
    return await this.methodWrapper(async () => {
      const response = await this.countriesService.remove(id);
      return {
        data: response,
      };
    });
  }
}
