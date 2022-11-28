export interface Recipe {
    id?: number,
    name: string,
    description: string,
    instructions: string,
    ingredients: Array<Ingredient>
    feature_image: string,
    video?: string
}

export interface Ingredient {
    name: string,
    order?: number,
    quantity?: string
}