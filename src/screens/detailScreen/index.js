import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';

const DetailsScreen = props => {

    const { navigation, route } = props;
    const [number, setNumber] = useState(false);

    const onEnterPress = () => {
        setNumber(true);
    }

    const onRegisterPress = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image source={tinieLogo} />
            </View>
            <View style={{ flex: 1, }}>
                <InputBox
                    keyboardType='numeric'
                    placeholderText='What do we call you ?'
                />
                <View style={{
                    backgroundColor: '#1B92AD',
                    borderRadius: 10,
                    width: 150,
                    marginLeft: 165,
                    marginVertical: 25,
                }}>
                    <Button
                        title="Done"
                        color="white"
                        onPress={onRegisterPress}
                    />
                </View>
            </View>
            <View style={{
                backgroundColor: '#34EBEB',
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1,
                width: 150,
                marginLeft: 150,
                marginBottom: 25,
            }}>
                <Button
                    title="Later"
                    color="black"
                    onPress={onRegisterPress}
                />
            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34EBEB',
    }
})

export default DetailsScreen;