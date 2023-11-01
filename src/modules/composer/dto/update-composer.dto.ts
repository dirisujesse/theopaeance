import { PartialType } from '@nestjs/mapped-types';
import { CreateComposerDto } from './create-composer.dto';

export class UpdateComposerDto extends PartialType(CreateComposerDto) {}
