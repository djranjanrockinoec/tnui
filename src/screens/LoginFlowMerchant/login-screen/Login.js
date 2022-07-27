import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';


const Login = () => {

  const [email, setEmail] = useState('')
  const [emailOtp, setEmailOtp] = useState('')
  const [numberOtp, setNumberOtp] = useState('')


  const [check, setCheck] = useState(false)

  const windowWidth = Dimensions.get('window').width;

  const onLogin = () => {
    console.log('btn pressed ')
  }

  const forgetPass = () => {
    console.log('btn pressed ')
  }

  return (
    <View style={styles.root}>
      <Header text={"Login"} type='PRIMARY' />
      <View style={{ paddingVertical: 10 }} />
      <View style={{ justifyContent: 'space-around', flex: 1 }}>
        <View>
          <View style={styles.mainCont}>
            <CustomInput placeholder={"Enter Email ID*"} value={email} onChangeText={(text) => setEmail(text)} />
            <CustomInput placeholder={"Enter OTP Sent to Your Email*"} value={emailOtp} onChangeText={(text) => setEmailOtp(text)} />
            <CustomInput placeholder={"Enter OTP Sent to Your Registered Mobile Number*"} value={numberOtp} onChangeText={(text) => setNumberOtp(text)} />
          </View>
          <View style={{ paddingVertical: 5 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Pressable onPress={() => setCheck(!check)}>
              {!check ? (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ borderWidth: 1, borderColor: '#a3a1a1', width: 18, height: 18 }}></View>
                  <Text style={styles.textSize}>  Remember me</Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ borderWidth: 1, borderColor: '#a3a1a1', width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}><View style={{ backgroundColor: '#858585', position: 'absolute', width: 14.5, height: 14.5 }}></View></View>
                  <Text style={styles.textSize}>  Remember me</Text>
                </View>

              )}

            </Pressable>
            <View>
              <Pressable onPress={() => forgetPass()}>
                <Text style={styles.textSize}>Forget password ?</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }} />
          <View>
            <CustomBtn text={'Login'} onPress={() => onLogin()} />
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

export default Login
