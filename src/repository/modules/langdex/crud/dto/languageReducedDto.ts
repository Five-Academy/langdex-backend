
export class LanguageReducedDto {
    constructor(id: number, name: string, image_url: string) {
        this.id = id;
        this.name = name;
        this.image_url = image_url
    }

    id: number;
    name: string;
    image_url: string;
}