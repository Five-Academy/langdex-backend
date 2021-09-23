import { Controller, Get, Param } from '@nestjs/common';
import { LanguageDto } from './dto/languageDto';
import { LanguageReducedDto } from './dto/languageReducedDto';
import { LangdexService } from './langdex.service';

@Controller("language")
export class LangdexController {
  constructor(private readonly langdexService: LangdexService) {}

  @Get()
  getFrontpage():LanguageReducedDto  {
    return this.langdexService.getAllLanguagesReduced();
  }

  @Get(":id")
  getLanguageById(@Param("id") id: string): LanguageDto {
    return this.langdexService.getLanguageById(id);
  }
}
