import { LanguageReducedDto } from "./languageReducedDto";

export class LanguageDto extends LanguageReducedDto {

    constructor(
    id: number,
    name: string, 
    image_url: string, 
    language_usage: string, 
    is_object_oriented: boolean,
    is_functional: boolean,
    is_procedural: boolean) {

        super(id, name, image_url);

        this.language_usage = language_usage;
        this.is_object_oriented = is_object_oriented;
        this.is_functional = is_functional;
        this.is_procedural = is_procedural;
    }

    language_usage: string;
    is_object_oriented: boolean;
    is_functional: boolean;
    is_procedural: boolean

}