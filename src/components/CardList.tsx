import React, {Component} from "react";
import {View} from "react-native";

import {connect} from "react-redux";
import {favoritedCard} from "../actions";
import Card from "./Card";
import {Card as CardData, CardAction} from "../actions/types";
import {AppState} from "../reducers";

interface ICardList {
    cards: CardData[],
    favoritedCard: (id: number) => CardAction
}

class CardList extends Component<ICardList> {
    render() {
        return <View style={styles.container}>{this.renderCards()}</View>;
    }

    renderCards = () => {
        return this.props.cards.map(item => {
            return (
                <Card
                    key={item.id}
                    image={item.image}
                    text={item.label}
                    is_favorite={item.is_favorite}
                    action={this.props.favoritedCard.bind(this, item.id)}
                />
            );
        });
    };
}

const styles = {
    container: {
        flex: 1
    }
};


const mapStateToProps = ({cards}: AppState) => {
    return cards;
};

export default connect(
    mapStateToProps,
    {
        favoritedCard
    }
)(CardList);
