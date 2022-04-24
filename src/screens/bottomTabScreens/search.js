import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
        },
    }
);

export default Search;