import { StyleSheet, Text, View, Pressable, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';


const Login = () => {

  const [number, setnumber] = useState('')
  const [numberOtp, setNumberOtp] = useState('')
  const [showModal, setShowModal] = useState(false);


  const windowWidth = Dimensions.get('window').width;

  const onLogin = () => {
    console.log('btn pressed ')
    setShowModal(!showModal) 
  }

  const forgetPass = () => {
    console.log('btn pressed ')
  }

  return (
    <View style={styles.root}>
      <Header text={"Host your business"} type='PRIMARY' />

      <View style={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ flex: 2, justifyContent: 'center', }}>
          <View style={styles.mainCont}>
            <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setnumber(text)} />
            <CustomInput placeholder={"OTP sent to Phone number"} value={numberOtp} onChangeText={(text) => setNumberOtp(text)} />
          </View>
          <View style={{ paddingVertical: 5 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Pressable onPress={() => navigation.goBack()}>

              <Text style={styles.textSize}>CANCEL</Text>
            </Pressable>
            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={() => resendOtp()}>
                <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5, color: "#000" }]}>Resend OTP,</Text>
              </Pressable>
              <Text style={styles.textSize}>If not received</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }} />
        </View>
        <View style={{ paddingVertical: 40 }}>
          <CustomBtn text={'Login'} onPress={() => onLogin()} />
        </View>
      </View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal}
      >
        <View style={styles.modelCont}>
          <View style={styles.modelView}>
            <Text style={styles.modalText}>ENTER PASSCODE</Text>
            <View style={styles.btmBtn}>
              <View style={{flexGrow:1}}>
            <Pressable onPress={() => setShowModal(!showModal)}><Text style={{color:"#fff"}}>Cancel</Text></Pressable>
            </View>
            <View style={{flexGrow:1}}>
            <Pressable onPress={() => setShowModal(!showModal)} ><Text style={styles.modalBtn}>Enter</Text></Pressable>
            </View>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 12,
    color: "#000"
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
  modelCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    justifyContent: 'space-between',
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#353535',
    borderRadius: 10,
    height: 353,
    width: 255,
    alignItems: 'center',
    // borderColor: '#0F8989',
    // borderWidth: 1
  },
  modalText: {
    fontSize: 16,
    fontWeight: '500',
    color: "#fff"
  },
  modalBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#34EBEB',
    borderRadius: 12,
    width: "50%",
    elevation: 1.5,
    shadowColor: '#470000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    color: '#000',
    fontSize: 16,
    fontWeight: "400"
  },
  btmBtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:"100%",
    paddingHorizontal:20
    // justifyContent:'space-around'

  }


})

export default Login
