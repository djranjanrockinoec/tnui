import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';
import TinieButton from "../../components/button";

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
                    <TinieButton
                        title="Done"
                        textStyle={{ color: '#ffffff' }}
                        style={styles.doneButton}
                        onButtonPress={onDonePress}
                    />
                </View>
            </View>
            <TinieButton
                title="Later"
                textStyle={{ color: '#000000' }}
                style={styles.laterButton}
                onButtonPress={onLaterPress}
            />
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34EBEB',
    },
    laterButton: {
        backgroundColor: '#34EBEB',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.75,
        width: 150,
        height: 50,
        marginLeft: 150,
        marginBottom: 25,
    },
    doneButton: { backgroundColor: '#1B92AD', width: 150, height: 50 }
})

export default DetailsScreen;