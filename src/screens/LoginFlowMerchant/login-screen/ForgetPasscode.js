import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ForgetPasscode = () => {

    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [emailOtp, setEmailOtp] = useState("")

    const forgetCode = () => {
        console.log('btn is pressed')
    }

  return (
    <View style={{flex:1}}>
      <Header text={'Forget password'}/>
      <View style={styles.root}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainCont}>
                        <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setNumber(text)} />
                        <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} />
                    </View>
                    <View style={{ paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Pressable onPress={() => resendMobileOtp()}>
                        <Text style={[styles.textSize, styles.otpBtnStyle]}>Resend OTP,</Text>
                        </Pressable>
                        <Text style={styles.textSize}>If not received</Text>

                    </View>
                    
                    <View style={{paddingVertical:15}}/>
                    <View style={{ flex: 1}}>
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
                                    <Text style={[styles.textSize, styles.otpBtnStyle]}>Resend OTP,</Text>
                                </Pressable>
                                <Text style={styles.textSize}>If not received</Text>
                            </View>
                        </View>
                     

                    </View>
                    <View style={styles.btmBtn}>
                        <CustomBtn text={'Continue'} onPress={() => forgetCode()} />
                    </View>
                
                    </ScrollView>
            </View>
    </View>
  )
}

export default ForgetPasscode

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: "#fff",
        flexGrow: 1,
        justifyContent:'center'
    },
    otpBtnStyle:{
        textDecorationLine: 'underline',
        paddingHorizontal: 5
    },
    textSize:{
    fontSize: 12,
    color:'#000'
    },
    btmBtn:{
        paddingVertical:60
    }

})