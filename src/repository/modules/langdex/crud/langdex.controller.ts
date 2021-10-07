import { BadRequestException, Body, Controller, Get, HttpStatus, Param, Post, UseFilters } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language-dto';
import {HttpExceptionFilter} from './http-exception.filter';
import { LanguageDto } from './dto/language-dto';
import { LangdexService } from './langdex.service';

@Controller("language")
export class LangdexController {
  constructor(private readonly langdexService: LangdexService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async getFrontpage():Promise<LanguageDto[]>  {
    try {
      return this.langdexService.findFrontpage();
    } catch (err) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Unable to get front page language'
      });
    }

  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createLanguageDto: CreateLanguageDto): Promise<LanguageDto> {
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
  async findById(@Param("id") id: string): Promise<LanguageDto> {
    return this.langdexService.getLanguageById(id);
  }
}
