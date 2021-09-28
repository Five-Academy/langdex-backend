import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LanguageDocument = Language & Document;

@Schema()
export class Language {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    image_url: string;

    @Prop()
    language_usage: string;

    @Prop()
    is_object_oriented: boolean;

    @Prop()
    is_functional: boolean;

    @Prop()
    is_procedural: boolean

    versionKey: false
}

export const LanguageSchema = SchemaFactory.createForClass(Language);