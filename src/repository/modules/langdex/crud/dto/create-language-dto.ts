export class CreateLanguageDto {
    readonly name: string;
    readonly image_url: string;
    readonly language_usage: string;
    readonly is_object_oriented: boolean;
    readonly is_functional: boolean;
    readonly is_procedural: boolean
}