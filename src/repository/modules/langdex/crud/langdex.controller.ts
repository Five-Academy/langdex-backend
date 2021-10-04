import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language-dto';
import { LanguageDto } from './dto/language-dto';
import { LangdexService } from './langdex.service';

@Controller("language")
export class LangdexController {
  constructor(private readonly langdexService: LangdexService) {}

  @Get()
  async getFrontpage():Promise<LanguageDto[]>  {
    return this.langdexService.findFrontpage();
  }

  @Post()
  async create(@Body() createLanguageDto: CreateLanguageDto): Promise<LanguageDto> {
    return this.langdexService.createLanguage(createLanguageDto);
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<LanguageDto> {
    return this.langdexService.getLanguageById(id);
  }
}
