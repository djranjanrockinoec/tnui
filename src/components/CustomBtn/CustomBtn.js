import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../../screens/bottomTabScreens/home-style'


const CustomBtn = ({ text, onPress }) => {

    const windowWidth = Dimensions.get('window').width;
    return (
        <TouchableOpacity style={styles.btnCont} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnCont: {
        alignItems: 'center',
        height: 60,
        textAlign: 'center'
    },
    btnText: {
        padding: 13,
        textAlign: 'center',
        backgroundColor: '#34EBEB',
        borderRadius: 50,
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

})

export default CustomBtn