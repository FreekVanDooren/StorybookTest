import React from "react";
import {CardAction, CardState, FAVORITED_CARD} from "../actions/types";
import {Reducer} from "redux";

const INITIAL_STATE: CardState = {
    cards: [
        {
            id: 1,
            label: "Charizard",
            image: require("../images/charizard.jpg"),
            is_favorite: false
        },
        {
            id: 2,
            label: "Empoleon",
            image: require("../images/empoleon.jpg"),
            is_favorite: true
        },
        {
            id: 3,
            label: "Entei",
            image: require("../images/entei.jpg"),
            is_favorite: false
        },
        {
            id: 4,
            label: "Groudon",
            image: require("../images/groudon.jpg"),
            is_favorite: false
        },
        {
            id: 5,
            label: "Lugia",
            image: require("../images/lugia.jpg"),
            is_favorite: true
        },
        {
            id: 6,
            label: "Salamence",
            image: require("../images/salamence.jpg"),
            is_favorite: false
        },
        {
            id: 7,
            label: "Torterra",
            image: require("../images/torterra.jpg"),
            is_favorite: true
        }
    ]
};

const reducer: Reducer<CardState, CardAction> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVORITED_CARD:
            const cards = state.cards.map(item => {
                return item.id == action.payload
                    ? {...item, is_favorite: !item.is_favorite}
                    : item;
            });

            return {...state, cards};

        default:
            return state;
    }
};

export default reducer;
