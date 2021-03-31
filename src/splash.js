import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//To Navigate the Dashboard 

const Splash = ({
    navigation,
}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 2000);
    }, [])
    return (
        <View style={styles.home}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image source={require('../src/image/iotics.png')} resizeMode="contain" style={{ width: 150, borderRadius: 50 }} />
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", backgroundColor: "#383538"
    }
})

export default Splash