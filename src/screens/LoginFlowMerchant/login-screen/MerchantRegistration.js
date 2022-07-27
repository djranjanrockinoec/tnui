import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/header'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import CustomInput from '../../../components/CustomInput/CustomInput'
import { ScrollView } from 'react-native-gesture-handler'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'


const MerchantRegistration = () => {

    const [ownName, setOwnName] = useState("")
    const [ownNumber, setOwnNumber] = useState("")
    const [ownEmail, setOwnEmail] = useState("")
    const [ownNumOtp, setOwnNumOtp] = useState("")
    const [ownID, setOwnID] = useState("")
    const [checkChangeText, setCheckChangeText] = useState({
        CheckOwnName: false,
        CheckOwnNumber: false,
        CheckOwnEmail: false,
        CheckOwnNumOtp: false,
        CheckOwnID: false,

    })
    const [isValid, setIsValid] = useState(false)
    // const change = { checkChangeText CheckOwnName }

    const [managName, setManagName] = useState("")
    const [managNumber, setManagNumber] = useState("")
    const [managEmail, setManagEmail] = useState("")
    const [managNumOtp, setManagNumOtp] = useState("")
    const [managID, setManagID] = useState("")

    console.log(isValid)
    const ownTextChange = (text) => {
        if (text.length != 0) {
            setOwnName(text),
                setIsValid(true)
            // setCheckChangeText({
            //     ...checkChangeText,
            //     CheckOwnName: true
            // }),
            console.log(isValid)
            console.log(ownName)

        }
        else {
            setOwnName(text),
                // setCheckChangeText({
                //     ...checkChangeText,
                //     CheckOwnName: false
                // })
                setIsValid(false)
        }
    }

    const uploadBtn = () => {
        console.log('Btn pressed')
    }


    return (
        <View>
            <Header text={'Register Your Business Details'} nameIcon={'alert'} type={'SECONDARY'} />
            <View style={styles.root}>

                <View style={styles.topNav}>
                    <View style={{ width: "33%" }}><CustomActiveLine text={'Basic'} /></View>
                    <View style={{ width: "33%" }}>
                        <CustomActiveLine text={'Business'} type={'SECONDARY'} /></View>
                    <CustomActiveLine text={'Address'} type={'SECONDARY'} />
                </View>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ paddingVertical: 20 }}>
                        <CustomHeaderText text={"Basic Information"} />
                    </View>

                    <View>
                        <CustomHeaderText text={"Outlet Owner Details"} type={"SECONDARY"} />
                        <View>
                            {isValid ?
                                <View style={{ alignItems: 'flex-start', marginVertical: 1, marginBottom: -20, backgroundColor: '#000', paddingHorizontal: 10, position: 'absolute' }}>
                                    <Text style={{ padding: 10, backgroundColor: '#000', marginLeft: 14 }}>Name</Text>
                                </View>
                                :
                                null

                            }<View style={styles.inputCont}>
                                <CustomInput placeholder={"Enter  Name*"} value={ownName} onChangeText={(text) => ownTextChange(text)}
                                    text={'Name'}
                                    change={isValid}

                                />
                            </View>
                            <CustomInput placeholder={'Enter Email ID*'} value={ownEmail} onChangeText={(text) => setOwnEmail(text)} />
                            <CustomInput placeholder={'Mobile Number*'} value={ownNumber} onChangeText={(text) => setOwnNumber(text)} />
                            <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={ownNumOtp} onChangeText={(text) => setOwnNumOtp(text)} />
                            <CustomInput placeholder={'Upload Proof of Identification*'} value={ownID} onChangeText={(text) => setOwnID(text)} />
                        </View>
                        <View style={{ paddingVertical: 5 }} />
                        <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadBtn()}>
                                <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 40 }}>
                        <CustomHeaderText text={"Outlet Manager Details"} type={"SECONDARY"} />
                        <View>
                            <CustomInput placeholder={"Enter  Name*"} value={managName} onChangeText={(text) => setManagName(text)} />
                            <CustomInput placeholder={'Enter Email ID*'} value={managEmail} onChangeText={(text) => setManagEmail(text)} />
                            <CustomInput placeholder={'Mobile Number*'} value={managNumber} onChangeText={(text) => setManagNumber(text)} />
                            <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={managNumOtp} onChangeText={(text) => setManagNumOtp(text)} />
                            <CustomInput placeholder={'Upload Proof of Identification*'} value={managID} onChangeText={(text) => setManagID(text)} />
                        </View>
                        <View style={{ paddingVertical: 5 }} />
                        <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadBtn()}>
                                <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5 }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View>
                    </View>
                    <View>
                        <CustomBtn text={'Next'} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default MerchantRegistration

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: "#fff"
    },
    topNav: {
        flexDirection: "row",
        paddingBottom: 10
        // justifyContent: 'space-around'
    },
    fileBtnCont: {
        alignItems: 'flex-start'
    },
    fileBtn: {
        backgroundColor: '#5A849B',
        paddingVertical: 4,
        color: "#fff",
        fontSize: 12,
        paddingHorizontal: 20,
        borderRadius: 25
    },
    inputCont: {
        borderWidth: 1,
        borderColor: '#A3A1A1',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    }
})