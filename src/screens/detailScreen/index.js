import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';

const DetailsScreen = props => {

    const { navigation, route } = props;
    const [number, setNumber] = useState(false);

    const onDonePress = () => {
        navigation.navigate('Dashboard');
    }

    const onLaterPress = () => {
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
                    inputTitle='Name'
                    keyboardType='numeric'
                    placeholderText='What do we call you ?'
                />
                <View style={{
                    alignSelf: 'flex-end',
                    backgroundColor: '#1B92AD',
                    borderRadius: 10,
                    width: 150,
                    marginRight: 10,
                    marginVertical: 25,
                }}>
                    <Button
                        title="Done"
                        color="white"
                        onPress={onDonePress}
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
                    onPress={onLaterPress}
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