import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Language } from './entities/language.entity';
import { Model } from 'mongoose';
import { PageData, PostResponse } from 'src/entities/response.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language.name) private readonly languageModel: Model<Language>,
    @Inject('PAGINATED_METHOD_WRAPPER')
    private readonly paginatedRequest,
    @Inject('ID_METHOD_WRAPPER')
    private readonly idRequest,
  ) {}

  async create(createLanguageDto: CreateLanguageDto) {
    const doc = await this.languageModel.create(createLanguageDto);
    await doc.save();
    return { message: 'Language has been added' };
  }

  async findAll(page: number, limit: number): Promise<PageData<Language>> {
    return await this.paginatedRequest(
      async () => {
        const skip = limit * (page - 1);
        const [languageCount, langauages] = await Promise.all([
          await this.languageModel.countDocuments().exec(),
          await this.languageModel
            .find()
            .limit(limit)
            .skip(skip)
            .sort({ name: 1 })
            .exec(),
        ]);
        return {
          count: languageCount,
          items: langauages,
        };
      },
      page,
      limit,
    );
  }

  async search(
    q: string,
    page: number,
    limit: number,
  ): Promise<PageData<Language>> {
    if (!q) {
      throw new BadRequestException('Query value not provided');
    }
    return await this.paginatedRequest(
      async () => {
        const skip = limit * (page - 1);
        const filter = { $regex: q, $options: 'i' };
        const [languageCount, langauages] = await Promise.all([
          await this.languageModel.count({
            $or: [{ name: filter }, { code: filter }],
          }),
          await this.languageModel
            .find({ $or: [{ name: filter }, { code: filter }] })
            .limit(limit)
            .skip(skip)
            .sort({ name: 1 })
            .exec(),
        ]);
        return {
          count: languageCount,
          items: langauages,
        };
      },
      page,
      limit,
    );
  }

  async findOne(id: string): Promise<Language> {
    return this.idRequest(async () => {
      return await this.languageModel.findById(id);
    }, id);
  }

  async update(
    id: string,
    updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.idRequest(async () => {
      return await this.languageModel.findByIdAndUpdate(id, updateLanguageDto, {
        new: true,
      });
    }, id);
  }

  async remove(id: string): Promise<PostResponse> {
    return this.idRequest(async () => {
      await this.languageModel.findByIdAndRemove(id);
      return { message: `Country $id has been deleted` };
    }, id);
  }
}
