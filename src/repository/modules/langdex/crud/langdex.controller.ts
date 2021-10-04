import { BadRequestException, Body, Controller, Get, HttpStatus, Param, Post, UseFilters } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language-dto';
import { DetailedLanguageDto } from './dto/detailed-language-dto';
import { FrontpageLanguageDto } from './dto/frontpage-language.dto';
import {HttpExceptionFilter} from './http-exception.filter';
import { LangdexService } from './langdex.service';

@Controller("language")
export class LangdexController {
  constructor(private readonly langdexService: LangdexService) {}

  @Get()
  async getFrontpage():Promise<FrontpageLanguageDto[]>  {
    return this.langdexService.findFrontpage();
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createLanguageDto: CreateLanguageDto): Promise<DetailedLanguageDto> {
    try {
      
       return this.langdexService.createLanguage(createLanguageDto);
    } catch (err) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Unable to register'
      });
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<DetailedLanguageDto> {
    return this.langdexService.getLanguageById(id);
  }
}
