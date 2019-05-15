import {CardAction, FAVORITED_CARD} from "./types";

export const favoritedCard: (id: number) => CardAction = (id: number) => {
    return {
        type: FAVORITED_CARD,
        payload: id
    };
};
