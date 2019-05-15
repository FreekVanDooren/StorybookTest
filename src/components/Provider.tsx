import React, {ComponentType} from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Provider as ReduxProvider} from "react-redux";
import {createStore, Store} from "redux";
import reducers from "../reducers";

const store: Store = createStore(reducers);

type ReactElement = ComponentType | JSX.Element;

interface Components {
    children: (ReactElement) | (ReactElement)[]
}

const Provider: ({children}: Components) => JSX.Element = ({children}: Components) => {
    return (
        <ReduxProvider store={store}>
            <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
        </ReduxProvider>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: "center"
    }
});

export default Provider;
