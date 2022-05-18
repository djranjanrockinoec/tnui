import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputBox = ({ keyboardType, placeholderText, inputTitle }) => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View>
            <Text style={{ marginHorizontal: 12, }}>{inputTitle}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={placeholderText}
                keyboardType={keyboardType}
                placeholderTextColor={'#858585'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: 300,
        margin: 12,
        textAlign: 'center',
        color: '#858585',
        borderColor: 'white',
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default InputBox;