import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import {
  AppPaginatedResponse,
  AppResponse,
  PostResponse,
} from 'src/entities/response.entity';
import { Country } from './entities/country.entity';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  async create(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<AppResponse<PostResponse>> {
    try {
      const response = await this.countriesService.create(createCountryDto);
      return {
        data: response,
        statusCode: 201,
      };
    } catch (e) {
      return {
        statusCode: 500,
        error: {
          message: `${e.message ?? e}`,
        },
      };
    }
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20,
  ): Promise<AppPaginatedResponse<Country>> {
    try {
      const response = await this.countriesService.findAll(page, limit);
      return {
        data: response.data,
        page: response.page,
        pages: response.pages,
        previous: response.previous,
        next: response.next,
        statusCode: 200,
      };
    } catch (e) {
      return {
        statusCode: 500,
        error: {
          message: `${e.message ?? e}`,
        },
        page: page,
        pages: 0,
        data: [],
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AppResponse<Country>> {
    try {
      const response = await this.countriesService.findOne(id);
      return {
        data: response,
        statusCode: 200,
      };
    } catch (e) {
      return {
        statusCode: 500,
        error: {
          message: `${e.message ?? e}`,
        },
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<AppResponse<Country>> {
    try {
      const response = await this.countriesService.update(id, updateCountryDto);
      return {
        data: response,
        statusCode: 201,
      };
    } catch (e) {
      return {
        statusCode: 500,
        error: {
          message: `${e.message ?? e}`,
        },
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<AppResponse<PostResponse>> {
    try {
      const response = await this.countriesService.remove(id);
      return {
        data: response,
        statusCode: 204,
      };
    } catch (e) {
      return {
        statusCode: 500,
        error: {
          message: `${e.message ?? e}`,
        },
      };
    }
  }
}
