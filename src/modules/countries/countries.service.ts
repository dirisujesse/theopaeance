import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './entities/country.entity';
import { Model } from 'mongoose';
import { PageData, PostResponse } from 'src/components/schemas/response.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
    @Inject('PAGINATED_METHOD_WRAPPER')
    private readonly paginatedRequest,
    @Inject('ID_METHOD_WRAPPER')
    private readonly idRequest,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<PostResponse> {
    const doc = await this.countryModel.create(createCountryDto);
    await doc.save();
    return { message: 'Country has been added' };
  }

  async findAll(page: number, limit: number): Promise<PageData<Country>> {
    return await this.paginatedRequest(
      async () => {
        const skip = limit * (page - 1);
        const [countryCount, countries] = await Promise.all([
          await this.countryModel.countDocuments().exec(),
          await this.countryModel
            .find()
            .limit(limit)
            .skip(skip)
            .sort({ name: 1 })
            .exec(),
        ]);
        return {
          count: countryCount,
          items: countries,
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
  ): Promise<PageData<Country>> {
    if (!q) {
      throw new BadRequestException('Query value not provided');
    }
    return await this.paginatedRequest(
      async () => {
        const skip = limit * (page - 1);
        const filter = { $regex: q, $options: 'i' };
        const conditions = [
          { name: filter },
          { code: filter },
          { emoji: filter },
          { dial_code: filter },
        ];
        const [countryCount, langauages] = await Promise.all([
          await this.countryModel.count({ $or: conditions }),
          await this.countryModel
            .find({ $or: conditions })
            .limit(limit)
            .skip(skip)
            .sort({ name: 1 })
            .exec(),
        ]);
        return {
          count: countryCount,
          items: langauages,
        };
      },
      page,
      limit,
    );
  }

  async findOne(id: string): Promise<Country> {
    return this.idRequest(async () => {
      return await this.countryModel.findById(id);
    }, id);
  }

  async update(
    id: string,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    return this.idRequest(async () => {
      return await this.countryModel.findByIdAndUpdate(id, updateCountryDto, {
        new: true,
      });
    }, id);
  }

  async remove(id: string): Promise<PostResponse> {
    return this.idRequest(async () => {
      return await this.countryModel.findByIdAndRemove(id);
    }, id);
  }
}
