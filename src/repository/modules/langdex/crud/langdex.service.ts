import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { InjectMapper } from 'nestjsx-automapper';
import { CreateLanguageDto } from './dto/create-language-dto';
import { LanguageDto } from './dto/language-dto';
import { Language, LanguageDocument } from './schemas/language.schema';
import { AutoMapper } from '@nartc/automapper';


@Injectable()
export class LangdexService {
  constructor(
    @InjectModel(Language.name) private readonly languageModel: Model<LanguageDocument>,
    @InjectMapper() private readonly mapper: AutoMapper
  ) {}

  async findFrontpage(): Promise<LanguageDto[]> {
    return this.languageModel.find().exec();
  }

  async getLanguageById(id: string): Promise<LanguageDto> {
    return this.languageModel.findById(id).exec();
  }

  async createLanguage(createLanguageDto: CreateLanguageDto): Promise<LanguageDto> {
    const createdLanguage = new this.languageModel(createLanguageDto);
    return createdLanguage.save();
  }
}
