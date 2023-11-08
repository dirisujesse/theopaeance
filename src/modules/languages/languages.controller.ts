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
  DefaultValuePipe,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import {
  AppPaginatedResponse,
  AppResponse,
  PostResponse,
} from 'src/entities/response.entity';
import { Language } from './entities/language.entity';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

@Controller('languages')
@ApiTags('Languages')
export class LanguagesController {
  constructor(
    private readonly languagesService: LanguagesService,
    @Inject('CONTROLLER_METHOD_WRAPPER')
    private readonly methodWrapper,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: "Language created and added", schema: {
    allOf: [
      {
        $ref: getSchemaPath(AppResponse)
      },
      {
        properties: {
          results: {
            type: 'object',
            default: getSchemaPath(PostResponse),
          }
        }
      }
    ]
  } })
  async create(
    @Body() createLanguageDto: CreateLanguageDto,
  ): Promise<AppResponse<PostResponse>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.create(createLanguageDto);
      return {
        data: response,
      };
    });
  }

  @Get()
  // @ApiOkResponse({ type: AppPaginatedResponse<Language> })
  async findAll(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(20)) limit: number,
  ): Promise<AppPaginatedResponse<Language>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.findAll(page, limit);
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
  // @ApiOkResponse({ type: AppPaginatedResponse<Language> })
  async search(
    @Query('q') q: string,
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(20)) limit: number,
  ): Promise<AppPaginatedResponse<Language>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.search(q, page, limit);
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
  // @ApiOkResponse({ type: AppResponse<Language> })
  async findOne(@Param('id') id: string): Promise<AppResponse<Language>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.findOne(id);
      return {
        data: response,
      };
    });
  }

  
  @Patch(':id')
  // @ApiOkResponse({ type: AppResponse<Language> })
  async update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ): Promise<AppResponse<Language>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.update(
        id,
        updateLanguageDto,
      );
      return {
        data: response,
      };
    });
  }

  @Delete(':id')
  // @ApiOkResponse({ type: AppResponse<PostResponse> })
  async remove(@Param('id') id: string): Promise<AppResponse<PostResponse>> {
    return this.methodWrapper(async () => {
      const response = await this.languagesService.remove(id);
      return {
        data: response,
      };
    });
  }
}
