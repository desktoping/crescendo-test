import { Direction } from "./direction";
import { Image } from './image';
import { Ingredients } from "./ingredients";

export type Recipe = {
    uuid: string,
    title: string
    description: string
    images: Image,
    servings: number,
    prepTime: number,
    cookTime: number,
    postDate: string,
    editDate: string,
    ingredients: Ingredients[];
    directions: Direction[]
}