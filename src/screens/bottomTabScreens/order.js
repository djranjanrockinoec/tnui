import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Orders = () => {
    return (
        <View style={styles.container}>
            <Text>Order Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
        },
    }
);

export default Orders;