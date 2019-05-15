import React from "react";
import {Dimensions, GestureResponderEvent, Image, StyleSheet, Text, View} from "react-native";
import IconButton from "./IconButton";

const {width} = Dimensions.get("window");

interface ICard {
    image: number,
    text: string,
    is_favorite: boolean,
    action: (e: GestureResponderEvent) => void
}

function Card({image, text, is_favorite, action}: ICard) {
    const icon = is_favorite ? "heart" : "heart-o";
    return (
        <View style={styles.container}>
            <View>
                <Image source={image} resizeMode={"contain"} style={styles.image}/>
            </View>
            <Text style={styles.text}>{text}</Text>
            <IconButton icon={icon} color={"#333"} onPress={action}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginTop: 5,
        marginBottom: 5
    },
    image: {
        width: width - 100,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default Card;
