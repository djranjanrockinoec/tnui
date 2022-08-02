import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'

const SignUpWelcome = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.imgView}>
                <Image source={require('../../assets/images/tinie-LOGO.png')} style={styles.imgCont} resizeMode="contain" />
            </View>
            
            <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{paddingBottom:20, alignItems:'center'}}>
                <Text style={{color:'#000', letterSpacing:0.75}}>WELCOME!</Text>
            </View>
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'Register Business'} />
                </View>
                <View style={{ paddingVertical: 6 }} />
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'LOGIN'} />
                </View>
            </View>
        </View>
    )
}

export default SignUpWelcome

const styles = StyleSheet.create({
    imgView: {
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#470000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingTop:20
    },
    imgCont: {
        width: "50%",
        height: 65,
      },
})