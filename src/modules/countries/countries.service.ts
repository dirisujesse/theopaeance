import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './entities/country.entity';
import { Model } from 'mongoose';
import { PageData, PostResponse } from 'src/entities/response.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<PostResponse> {
    try {
      const doc = await this.countryModel.create({ ...createCountryDto });
      await doc.save();
      return { message: 'Country has been added' };
    } catch (e) {
      throw e;
    }
  }

  async findAll(
    page: number = 1,
    limit: number = 20,
  ): Promise<PageData<Country>> {
    try {
      const skip = limit * (page - 1);
      const [countryCount, countries] = await Promise.all([
        await this.countryModel.countDocuments().exec(),
        await this.countryModel.find().limit(limit).skip(skip).sort({name: -1}).exec(),
      ]);

      const prev = page <= 1 ? null : page - 1;
      const pages = Math.ceil(countryCount / limit);
      const next = page >= pages ? null : page + 1;

      return {
        data: countries,
        page: page,
        pages: pages,
        previous: prev,
        next: next,
      };
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: String): Promise<Country> {
    try {
      return await this.countryModel.findById(id);
    } catch (e) {
      throw e;
    }
  }

  async update(
    id: string,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    try {
      return await this.countryModel.findByIdAndUpdate(id, {
        ...updateCountryDto,
      });
    } catch (e) {
      throw e;
    }
  }

  async remove(id: string): Promise<PostResponse> {
    try {
      await this.countryModel.findByIdAndRemove(id);
      return { message: `Country $id has been deleted` };
    } catch (e) {
      throw e;
    }
  }
}
