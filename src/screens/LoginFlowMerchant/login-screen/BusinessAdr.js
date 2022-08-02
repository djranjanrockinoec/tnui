import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import { ScrollView } from 'react-native-gesture-handler'

const BusinessAdr = () => {

    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const [isValidAddress, setIsValidAddress] = useState(false)
    const [isValidPincode, setIsValidPincode] = useState(false)
    const [isValidCity, setIsValidCity] = useState(false)
    const [isValidState, setIsValidState] = useState(false)

    const addressChange = (text) => {
        if (text.length != 0) {
          setAddress(text),
            setIsValidAddress(true)
        }
        else {
            setAddress(text),
            setIsValidAddress(false)
        }
      }
      const pincodeChange = (text) => {
        if (text.length != 0) {
          setPincode(text),
            setIsValidPincode(true)
        }
        else {
            setPincode(text),
            setIsValidPincode(false)
        }
      }
      const cityChange = (text) => {
        if (text.length != 0) {
          setCity(text),
            setIsValidCity(true)
        }
        else {
            setCity(text),
            setIsValidCity(false)
        }
      }
      const stateChange = (text) => {
        if (text.length != 0) {
          setState(text),
            setIsValidState(true)
        }
        else {
            setState(text),
            setIsValidState(false)
        }
      }
  return (
    <View>
      <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} />
      <View style={styles.root}>
        <View style={styles.topNav}>
          <View style={{ width: "36%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
          <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} /></View>
          <View style={{ width: "39%" }}><CustomActiveLine text={'Address'}  /></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
          <View style={{ paddingVertical: 35 }}>
            <CustomHeaderText text={"Business Information"} />
          </View>
          <View>
            <View>
              {isValidAddress ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Address</Text>
                </View>
                :
                null
              }
              <CustomInput placeholder={'Address (House Number, Street, Area)*'} value={address} onChangeText={(text) => addressChange(text)} />
            </View>
            <View>
              {isValidPincode ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Pincode</Text>
                </View>
                :
                null
              }
              <CustomInput placeholder={'Pincode*'} value={pincode} onChangeText={(text) => pincodeChange(text)} />
            </View>
            <View>
              {isValidCity ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 ,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>City</Text>
                </View>
                :
                null
              }
              <CustomInput placeholder={'City*'} value={city} onChangeText={(text) => cityChange(text)} />
            </View>
            <View>
              {isValidState?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>State</Text>
                </View>
                :
                null
              }
              <CustomInput placeholder={'State*'} value={state} onChangeText={(text) => stateChange(text)} />
            </View>
            </View>
            <View>
                <Text style={{color:'#000'}}>Pin your Location</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-around", paddingVertical:75}}>
              <View style={{flex:1}}>
              <CustomBtn text={'Back'} type={'SECONDARY'}  onPress={() =>navigation.goBack()}/>
              </View>
              <View style={{flex:1}}>
              <CustomBtn text={'Proceed'} type={'PRIMARY'} onPress={() =>navigation.goBack()}/>
              </View>
            </View>
            </ScrollView>
           
    </View>
    </View>
  )
}

export default BusinessAdr

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: "#fff",
        paddingBottom:250
      },
      topNav: {
        flexDirection: "row",
        paddingBottom: 10,
        justifyContent: 'center',
      },
})