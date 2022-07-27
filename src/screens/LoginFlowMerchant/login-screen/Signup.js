import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';


const Signup = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState("")



    const windowWidth = Dimensions.get('window').width;

    const resendOtp = () => {
        console.log('btn pressed ')
    }

    const onSignUp = () => {
        console.log('btn pressed ')
    }
    return (
        <View style={styles.root}>
            <Header text={"Sign Up"} type='PRIMARY' />
            <View style={{ paddingVertical: 10 }} />
            <View style={{ justifyContent: 'space-around', flex: 1 }}>
                <View>
                    <View style={styles.mainCont}>
                        <CustomInput placeholder={"Enter  Name*"} value={name} onChangeText={(text) => setName(text)} />
                        <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setNumber(text)} />
                        <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} />
                    </View>


                    <View style={{ paddingHorizontal: 25, flexDirection: 'row' }}>


                        <Pressable onPress={() => resendOtp()}>
                            <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5 }]}>Resend OTP,</Text>
                        </Pressable>
                        <Text style={styles.textSize}>If not received</Text>

                    </View>
                    <View style={{ paddingVertical: 20 }} />
                    <View>
                        <CustomBtn text={'Sign-Up'} onPress={() => onSignUp()} />
                    </View>
                </View>
                <View>
                    <View style={styles.imgView}>
                        <Image source={require('../../../assets/images/tinie-LOGO.png')} style={styles.imgCont} resizeMode="contain" />
                    </View>
                    <View style={{ paddingVertical: 20 }} />

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff ",
        // justifyContent: 'space-between'
    },
    mainCont: {
        padding: 15
    },
    textSize: {
        fontSize: 12
    },
    imgView: {
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#470000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    imgCont: {
        width: "33%",
        height: 55,
    },


})

export default Signup
