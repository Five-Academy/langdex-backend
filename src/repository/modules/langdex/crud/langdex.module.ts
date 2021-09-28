import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { LangdexController } from "./langdex.controller";
import { LangdexService } from "./langdex.service";
import { Language, LanguageSchema } from "./schemas/language.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Language.name, schema: LanguageSchema}])],
    controllers: [LangdexController],
    providers: [LangdexService]
})

export class LangdexModule {}