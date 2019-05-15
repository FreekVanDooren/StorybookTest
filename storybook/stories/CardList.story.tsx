import React from "react";
import {storiesOf} from "@storybook/react-native";

import Provider from "src/components/Provider";
import CardList from "src/components/CardList";

storiesOf("CardList", module)
    .addDecorator(getStory => {
        return <Provider>{getStory()}</Provider>;
    })
    .add("with cards", () => {
        return <CardList/>;
    });
