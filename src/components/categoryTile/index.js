import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CategoryTile = props => {

    const { heading, source } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => { }} activeOpacity={0.7}>
            <Image
                style={styles.tinyLogo}
                source={source}
            />
            <Text style={{ paddingVertical: 5 }}>{heading}</Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1.25,
        borderColor: '#D8BFD8',
        margin: 5,
    },
    tinyLogo: {
        width: 100,
        height: 105,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default CategoryTile;