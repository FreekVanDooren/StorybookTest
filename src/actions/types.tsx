export const FAVORITED_CARD = "favorited_card";

export interface Card {
    id: number,
    label: string,
    image: number,
    is_favorite: boolean
}

export interface CardState {
    cards: Card[]
}

export interface CardAction {
    type: typeof FAVORITED_CARD
    payload: number
}
