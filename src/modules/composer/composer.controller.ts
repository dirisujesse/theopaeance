import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComposerService } from './composer.service';
import { CreateComposerDto } from './dto/create-composer.dto';
import { UpdateComposerDto } from './dto/update-composer.dto';

@Controller('composer')
export class ComposerController {
  constructor(private readonly composerService: ComposerService) {}

  @Post()
  create(@Body() createComposerDto: CreateComposerDto) {
    return this.composerService.create(createComposerDto);
  }

  @Get()
  findAll() {
    return this.composerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.composerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComposerDto: UpdateComposerDto,
  ) {
    return this.composerService.update(+id, updateComposerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.composerService.remove(+id);
  }
}
