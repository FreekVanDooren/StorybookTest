import React, {FunctionComponent} from "react";
import {GestureResponderEvent, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton: FunctionComponent<Props> = ({icon, color, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Icon name={icon} size={30} color={color}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        marginTop: 10
    }
});

type Props = {
    icon: string,
    color: string,
    onPress: (e: GestureResponderEvent) => void
};

export default IconButton;
