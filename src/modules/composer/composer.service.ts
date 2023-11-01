import { Injectable } from '@nestjs/common';
import { CreateComposerDto } from './dto/create-composer.dto';
import { UpdateComposerDto } from './dto/update-composer.dto';

@Injectable()
export class ComposerService {
  create(createComposerDto: CreateComposerDto) {
    return 'This action adds a new composer';
  }

  findAll() {
    return `This action returns all composer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} composer`;
  }

  update(id: number, updateComposerDto: UpdateComposerDto) {
    return `This action updates a #${id} composer`;
  }

  remove(id: number) {
    return `This action removes a #${id} composer`;
  }
}
