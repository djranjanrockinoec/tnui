import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';
import TinieButton from "../../components/button";

const WelcomeScreen = props => {

    const { navigation, route } = props;
    const [number, setNumber] = useState(false);

    const onEnterPress = () => {
        setNumber(true);
        // Alert.alert('Wrong OTP entered !!');
    }

    const onRegisterPress = () => {
        navigation.navigate('DetailsScreen');
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
                    placeholderText='Enter Your Phone Number'
                />
                {number &&
                    <>
                        <InputBox
                            keyboardType='numeric'
                            placeholderText='enter OTP'
                        />
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 12 }}>
                            <Text style={{ fontSize: 10 }}>cancel</Text>
                            <Text style={{ fontSize: 10 }}>didn't receive? Resend OTP</Text>
                        </View>
                    </>

                }
                <View style={{
                    alignSelf: number ? 'flex-end' : 'center',
                    marginVertical: 25,
                }}>
                    {number ?
                        <TinieButton
                            title={"Register"}
                            style={{ backgroundColor: '#1B92AD', width: 150, height: 50, marginRight: 10, }}
                            onButtonPress={onRegisterPress}
                            textStyle={{ color: '#ffffff' }}
                        /> :
                        <TinieButton
                            title={"Enter"}
                            style={{ backgroundColor: '#1B92AD', width: 150, height: 50 }}
                            onButtonPress={onEnterPress}
                            textStyle={{ color: '#ffffff' }}
                        />}
                </View>

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

export default WelcomeScreen;