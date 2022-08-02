import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header'
import CustomActiveLine from '../../components/CustomActiveLine/CustomActiveLine'
import { ScrollView } from 'react-native-gesture-handler'
import CustomHeaderText from '../../components/CustomHeaderText/CustomHeaderText'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomBtn from '../../components/CustomBtn/CustomBtn'

const BusinessInfo = ({navigation}) => {

  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [year, setYear] = useState("")
  const [pan, setPan] = useState("")
  const [gstin, setGstin] = useState("")
  const [cert, setCert] = useState("")
  const [license, setLicense] = useState("")
  const [mcc, setMcc] = useState("")


  const [isValidName, setIsValidName] = useState(false)
  const [isValidType, setIsValidType] = useState(false)
  const [isValidYear, setIsValidYear] = useState(false)
  const [isValidPan, setIsValidPan] = useState(false)
  const [isValidGSTIN, setIsValidGSTIN] = useState(false)
  const [isValidCert, setIsValidCert] = useState(false)
  const [isValidLicense, setIsValidLicense] = useState(false)
  const [isValidMCC, setIsValidMCC] = useState(false)

  const nameChange = (text) => {
    if (text.length != 0) {
      setName(text),
        setIsValidName(true)
    }
    else {
      setName(text),
      setIsValidName(false)
    }
  }
  const typeChange = (text) => {
    if (text.length != 0) {
      setType(text),
        setIsValidType(true)
    }
    else {
      setType(text),
      setIsValidType(false)
    }
  }
  const yearChange = (text) => {
    if (text.length != 0) {
      setYear(text),
        setIsValidYear(true)
    }
    else {
      setYear(text),
      setIsValidYear(false)
    }
  }
  const panChange = (text) => {
    if (text.length != 0) {
      setPan(text),
        setIsValidPan(true)
    }
    else {
      setPan(text),
        setIsValidPan(false)
    }
  }
  const gstinChange = (text) => {
    if (text.length != 0) {
      setGstin(text),
        setIsValidGSTIN(true)
    }
    else {
      setGstin(text),
        setIsValidGSTIN(false)
    }
  }
  const certChange = (text) => {
    if (text.length != 0) {
      setCert(text),
        setIsValidCert(true)
    }
    else {
      setCert(text),
        setIsValidCert(false)
    }
  }
  const licenseChange = (text) => {
    if (text.length != 0) {
      setLicense(text),
        setIsValidLicense(true)
    }
    else {
      setLicense(text),
      setIsValidLicense(false)
    }
  }
  const mccChange = (text) => {
    if (text.length != 0) {
      setMcc(text),
        setIsValidMCC(true)
    }
    else {
      setMcc(text),
        setIsValidMCC(false)
    }
  }

  return (
    <View>
      <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} />
      <View style={styles.root}>

        <View style={styles.topNav}>
          <View style={{ width: "36%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
          <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} /></View>
          <View style={{ width: "33%" }}><CustomActiveLine text={'Address'} type={'SECONDARY'} /></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
          <View style={{ paddingVertical: 35 }}>
            <CustomHeaderText text={"Business Information"} />
          </View>
          <View>
            <View>
              {isValidName ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Name of Your Business</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Name of Your Business*'} value={name} onChangeText={(text) => nameChange(text)} />
            </View>
            <View>
              {isValidType ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Type of Business</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Choose the Type of Business*'} value={type} onChangeText={(text) => typeChange(text)} />
            </View>
            <View>
              {isValidYear ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 ,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Year of Establishment</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Year of Establishment (DD/MM/YYYY)*'} value={year} onChangeText={(text) => yearChange(text)} />
            </View>
            <View>
              {isValidGSTIN ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business GSTIN</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Business GSTIN*'} value={gstin} onChangeText={(text) => gstinChange(text)} />
            </View>
            <View>
              {isValidPan ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 ,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business PAN</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Business PAN*'} value={pan} onChangeText={(text) => panChange(text)} />
            </View>
            <View>
              {isValidLicense ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Business License*'} value={license} onChangeText={(text) => licenseChange(text)} />
            </View>
            <View>
              {isValidCert ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1,top:4 }}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'Incorporation Certificate*'} value={cert} onChangeText={(text) => certChange(text)} />
            </View>
            <View>
              {isValidMCC ?
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 ,top:4}}>
                  <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                </View>
                :
                null

              }
              <CustomInput placeholder={'MCC of Business*'} value={mcc} onChangeText={(text) => mccChange(text)} />
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-around", paddingVertical:75}}>
              <View style={{flex:1}}>
              <CustomBtn text={'Back'} type={'SECONDARY'}  onPress={() =>navigation.goBack()}/>
              </View>
              <View style={{flex:1}}>
              <CustomBtn text={'Next'} type={'PRIMARY'} onPress={() =>navigation.goBack()}/>
              </View>


            </View>
          </View>
        </ScrollView>

      </View>
    </View>
  )
}

export default BusinessInfo

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
  btnCont:{
    flexDirection:'row', 
    justifyContent:"space-around", 
    paddingVertical:75
  }
})