import { Injectable } from '@nestjs/common';
import { LanguageDto } from './dto/languageDto';
import { LanguageReducedDto } from './dto/languageReducedDto';

@Injectable()
export class LangdexService {
  getAllLanguagesReduced(): LanguageReducedDto {

    const langMock: LanguageReducedDto = {
      id: 1,
      name: 'Java 11',
      image_url: 'www.google.com.br'
    }

    return langMock;
  }

  getLanguageById(id: string): LanguageDto {

    const langMock: LanguageDto = {
      id: Number(id),
      name: 'Java 11',
      image_url: 'www.google.com.br',
      language_usage: 'Fazer Dev Chorar',
      is_object_oriented: true,
      is_functional: true,
      is_procedural: true,
    }

    return langMock;
  }
}
