import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/header'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import CustomInput from '../../../components/CustomInput/CustomInput'
import { ScrollView } from 'react-native-gesture-handler'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import ImagePicker from 'react-native-image-crop-picker';


const MerchantRegistration = () => {

    const [ownName, setOwnName] = useState("")
    // const [ownNumber, setOwnNumber] = useState("")
    // const [ownEmail, setOwnEmail] = useState("")
    // const [ownNumOtp, setOwnNumOtp] = useState("")
    const [ownID, setOwnID] = useState("")
    const [isValid, setIsValid] = useState(false)
    // const [isValidOwnEmail, setIsValidOwnEmail] = useState(false)
    // const [isValidOwnNum, setIsValidOwnNum] = useState(false)
    // const [isValidOwnOtp, setIsValidOwnOtp] = useState(false)  
    const [isValidOwnIDProof, setIsValidOwnIDProof] = useState(false)
    const [isValidManag, setIsValidManag] = useState(false)
    const [isValidManagEmail, setIsValidManagEmail] = useState(false)
    const [isValidManagNum, setIsValidManagNum] = useState(false)
    const [isValidManagOtp, setIsValidManagOtp] = useState(false)  
    const [isValidManagIDProof, setIsValidManagIDProof] = useState(false)

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
        }
        else {
            setOwnName(text),
            setIsValid(false)
        }
    }
//     const ownEmailChange = (text) => {
//         if (text.length != 0) {
//             setOwnEmail(text),
//             setIsValidOwnEmail(true)
//         }
//         else {
//             setOwnEmail(text),
//             setIsValidOwnEmail(false)
//         }
//     }
//     const ownNumChange = (text) => {
//         if (text.length != 0) {
//             setOwnNumber(text),
//             setIsValidOwnNum(true)
//         }
//         else {
//             setOwnNumber(text),
//             setIsValidOwnNum(false)
//         }
//     }
//     const ownOTPChange = (text) => {
//         if (text.length != 0) {
//             setOwnNumOtp(text),
//             setIsValidOwnOtp(true)
//         }
//         else {
//             setOwnNumOtp(text),
//             setIsValidOwnOtp(false)
//     }
// }
    const ownIDChange = (text) => {
        if (text.length != 0) {
            setOwnID(text),
            setIsValidOwnIDProof(true)
        }
        else {
            setOwnID(text),
            setIsValidOwnIDProof(false)
        }
    }

    const managTextChange = (text) => {
        if (text.length != 0) {
            setManagName(text),
            setIsValidManag(true)
        }
        else {
            setManagName(text),
            setIsValidManag(false)
        }
    }
    const managEmailChange = (text) => {
        if (text.length != 0) {
            setManagEmail(text),
            setIsValidManagEmail(true)
        }
        else {
            setManagEmail(text),
            setIsValidManagEmail(false)
        }
    }
    const managNumChange = (text) => {
        if (text.length != 0) {
            setManagNumber(text),
            setIsValidManagNum(true)
        }
        else {
            setManagNumber(text),
            setIsValidManagNum(false)
        }
    }
    const managOTPChange = (text) => {
        if (text.length != 0) {
            setManagNumOtp(text),
            setIsValidManagOtp(true)
        }
        else {
            setManagNumOtp(text),
            setIsValidManagOtp(false)
    }
}
    const managIDChange = (text) => {
        if (text.length != 0) {
            setManagID(text),
            setIsValidManagIDProof(true)
        }
        else {
            setManagID(text),
            setIsValidManagIDProof(false)
        }
    }

    const uploadBtn = () => {
        console.log("hell")

            // ImagePicker.openPicker({
            //   width: 300,
            //   height: 400,
            //   compressImageMaxWidth:300,
            //   compressImageMaxHeight:400,
            //   cropping: true,
            //   includeBase64:true
            // }).then(imagedata => {
            // //   setShowoption(false)
            // //   setImage(imagedata.path)
            // //   setImagee({imagedata})
            // }).catch((e)=>{
            //   console.log(e);
            // })
    }


    return (
        <View>
            <Header  name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} />
            <View style={styles.root}>

                <View style={styles.topNav}>
                    <View style={{ width: "33%", alignItems:'flex-end', paddingRight:5 }}><CustomActiveLine text={'Basic'} /></View>
                    <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} type={'SECONDARY'} /></View>
                    <View style={{ width: "33%" }}><CustomActiveLine text={'Address'} type={'SECONDARY'} /></View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
                    <View style={{ paddingVertical: 35 }}>
                        <CustomHeaderText text={"Basic Information"} />
                    </View>

                    <View>
                        <CustomHeaderText text={"Outlet Owner Details"} type={"SECONDARY"} />
                        <View style={{ paddingVertical: 10 }}/>
                        <View>
                            {isValid ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Name</Text>
                                </View>
                                :
                                null

                            }
                            <View>
                                <CustomInput placeholder={"Enter  Name*"} value={ownName} onChangeText={(text) => ownTextChange(text)} />
                            </View>
                            {/* <View>
                            {isValidOwnEmail ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Email ID</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter Email ID*'} value={ownEmail} onChangeText={(text) => ownEmailChange(text)} />
                            </View>
                            <View>
                            {isValidOwnNum ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Mobile Number</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Mobile Number*'} value={ownNumber} onChangeText={(text) => ownNumChange(text)} keyboardType={'numeric'} />
                            </View>
                            <View>
                            {isValidOwnOtp ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>OTP</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={ownNumOtp} onChangeText={(text) => ownOTPChange(text)} keyboardType={'numeric'} />
                            </View> */}
                            <View>
                            {isValidOwnIDProof ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>ID Proof</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Upload Proof of Identification*'} value={ownID} onChangeText={(text) => ownIDChange(text)} />
                            </View>
                        </View>
                        <View style={{ paddingVertical: 5 }} />
                        <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadBtn()}>
                            <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 60 }}>
                        <CustomHeaderText text={"Outlet Manager Details"} type={"SECONDARY"} />
                        <View style={{ paddingVertical: 10 }}></View>
            
                            <View>
                            {isValidManag ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Name</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={"Enter  Name*"} value={managName} onChangeText={(text) => managTextChange(text)} />
                            </View>
                            <View>
                            {isValidManagEmail ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Email ID</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter Email ID*'} value={managEmail} onChangeText={(text) => managEmailChange(text)} />
                            </View>
                            <View>
                            {isValidManagNum ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Mobile Number</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Mobile Number*'} value={managNumber} onChangeText={(text) => managNumChange(text)} keyboardType={'numeric'} />
                            </View>
                            <View>
                            {isValidManagOtp ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>OTP</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={managNumOtp} onChangeText={(text) => managOTPChange(text)}  keyboardType={'numeric'}/>
                            </View>
                            <View>
                            {isValidManagIDProof ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>ID Proof</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Upload Proof of Identification*'} value={managID} onChangeText={(text) => managIDChange(text)} />
                        </View>
                        

                        <View style={{ paddingVertical: 5 }} />
                        <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadBtn()}>
                                <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5 }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View>
                    </View>
                    <View style={{paddingBottom:200}}>
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
        paddingBottom: 10,
        justifyContent: 'center'
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

})