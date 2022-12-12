export interface Recipe {
    id?: number,
    name: string,
    description: string,
    instructions: Array<Instruction>,
    ingredients: Array<Ingredient>,
    feature_image: string,
    video?: string
}

export interface Ingredient {
    id?: number,
    name: string,
    recipe_id: number,
    order?: number,
    quantity?: string

}

export interface Instruction {
    id?: number,
    recipe_id: number,
    instruction: string,
    order?: number,
}