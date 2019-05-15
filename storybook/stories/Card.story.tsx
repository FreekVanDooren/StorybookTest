import React from "react";
import {View} from "react-native";
import Card from "src/components/Card";

import {storiesOf} from "@storybook/react-native";

storiesOf("Card", module)
    .addDecorator(getStory => (
        <View style={{flex: 1, alignItems: "center"}}>{getStory()}</View>
    ))
    .add("default", () => (
        <Card
            image={require("src/images/charizard.jpg")}
            text={"Charizard"}
            is_favorite={false}
            action={() => {
                console.log("clicked!");
            }}
        />
    ))
    .add("favorited", () => (
        <Card
            image={require("src/images/lugia.jpg")}
            text={"Lugia"}
            is_favorite={true}
            action={() => {
                console.log("clicked!");
            }}
        />
    ));
