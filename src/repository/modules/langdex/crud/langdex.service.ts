import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { InjectMapper } from 'nestjsx-automapper';
import { CreateLanguageDto } from './dto/create-language-dto';
import { DetailedLanguageDto } from './dto/detailed-language-dto';
import { FrontpageLanguageDto } from './dto/frontpage-language.dto';
import { Language, LanguageDocument, LanguageSchema } from './schemas/language.schema';
import { AutoMapper } from '@nartc/automapper';


@Injectable()
export class LangdexService {
  constructor(
    @InjectModel(Language.name) private readonly languageModel: Model<LanguageDocument>,
    @InjectMapper() private readonly mapper: AutoMapper
  ) {}

  async findFrontpage(): Promise<FrontpageLanguageDto[]> {
    // Não parece muito elegante. Queria poder fazer isso pelo meu DTO. Tem como?
    return await this.languageModel.find().select('-language_usage -is_object_oriented -is_functional -is_procedural -__v').exec();
  }

  async getLanguageById(id: string): Promise<DetailedLanguageDto> {
    return this.languageModel.findById(id).exec();
  }

  async createLanguage(createLanguageDto: CreateLanguageDto): Promise<DetailedLanguageDto> {
    const createdLanguage = new this.languageModel(createLanguageDto);
    return createdLanguage.save();
  }
}
