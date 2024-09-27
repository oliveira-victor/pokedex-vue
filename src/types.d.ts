type PokeType = {
    name: string
}

type Types = {
    type: PokeType
}

type Front = {
    front_default: string
}

type SpritesOther = {
    dream_world: Front
}

type Sprites = {
    other: SpritesOther
}

type DataItem = {
    id: number
    name: string
    order: number
    sprites: Sprites
    types: Types[]
}
