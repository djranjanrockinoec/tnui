import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';
import { ScrollView } from 'react-native-gesture-handler';


const Signup = ({ navigation }) => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [emailOtp, setEmailOtp] = useState("")



    const windowWidth = Dimensions.get('window').width;

    const resendOtp = () => {
        console.log('btn pressed ')
    }

    const onSignUp = () => {
        console.log('btn pressed ')
    }
    const resendMobileOtp = () => {
        console.log('btn pressed ')
    }
    const resendEmailOtp = () => {
        console.log('btn pressed ')
    }

    return (
        <View style={styles.root}>
            <Header text={"Host your business"} type='PRIMARY' />
            <View style={{ paddingVertical: 10 }} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1 }}>
                    <View style={styles.mainCont}>
                        <CustomInput placeholder={"Enter  Name*"} value={name} onChangeText={(text) => setName(text)} />
                        <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setNumber(text)} />
                        <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} />
                    </View>
                    <View style={{ paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Pressable onPress={() => resendMobileOtp()}>
                            <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5 }]}>Resend OTP,</Text>
                        </Pressable>
                        <Text style={styles.textSize}>If not received</Text>

                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.mainCont}>
                        <CustomInput placeholder={"Enter Email ID*"} value={email} onChangeText={(text) => setEmail(text)} />
                        <CustomInput placeholder={"Enter OTP Sent to Your Email*"} value={emailOtp} onChangeText={(text) => setEmailOtp(text)} />
                    </View>
                    <View style={{ paddingVertical: 5 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Pressable onPress={() => navigation.goBack()}>

                            <Text style={styles.textSize}>CANCEL</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => resendEmailOtp()}>
                                <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5, color: "#000" }]}>Resend OTP,</Text>
                            </Pressable>
                            <Text style={styles.textSize}>If not received</Text>
                        </View>
                    </View>


                </View>
                <View style={{paddingVertical:60}}>
                    <CustomBtn text={'Proceed to Register'} onPress={() => onSignUp()} />
                </View>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff ",

    },
    mainCont: {
        padding: 15
    },
    textSize: {
        fontSize: 12,
        color: '#000'
    },


})

export default Signup
