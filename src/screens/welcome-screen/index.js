import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';

const WelcomeScreen = props => {

    const { navigation, route } = props;
    const [number, setNumber] = useState(false);

    const onEnterPress = () => {
        setNumber(true);
        Alert.alert('Wrong OTP entered !!');
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
                            placeholderText='Enter OTP'
                        />
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 12 }}>
                            <Text style={{ fontSize: 10 }}>cancel</Text>
                            <Text style={{ fontSize: 10 }}>didn't receive? Resend OTP</Text>
                        </View>
                    </>

                }
                <View style={{
                    backgroundColor: '#1B92AD',
                    borderRadius: 10,
                    width: 150,
                    marginHorizontal: 80,
                    marginVertical: 25,
                }}>
                    {number ?
                        <Button
                            title={"Register"}
                            color="white"
                            onPress={onRegisterPress}
                        /> :
                        <Button
                            title={"Enter"}
                            color="white"
                            onPress={onEnterPress}
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