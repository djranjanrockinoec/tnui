import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputBox = ({ keyboardType, placeholderText }) => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={placeholderText}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderColor: 'white',
        paddingHorizontal: 50,
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default InputBox;