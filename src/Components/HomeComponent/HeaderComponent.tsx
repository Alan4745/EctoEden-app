import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function HeaderComponent({ title }) {
    return (
        <>
            <View
                style={{ width: '100%', height: windowHeight * 0.12, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
            >
                <View style={{ transform: [{ rotate: '45deg' }], backgroundColor: '#2E0000', width: windowHeight * 0.2, height: windowHeight * 0.10, position: 'absolute', borderRadius: 41, left: -6, top: -30, borderBottomWidth: 10, borderBottomColor: '#F9D48B', borderLeftWidth: 6, zIndex: 1 }} />
                <View style={{ transform: [{ rotate: '45deg' }], width: windowHeight * 0.15, height: windowHeight * 0.2, backgroundColor: '#2E0000', position: 'absolute', left: 46, bottom: 40, borderRadius: 10, zIndex: 2, }}></View>
                <View style={{ transform: [{ rotate: '-45deg' }], backgroundColor: '#2E0000', width: windowHeight * 0.2, height: windowHeight * 0.10, position: 'absolute', borderRadius: 41, right: -6, top: -30, borderBottomWidth: 10, borderBottomColor: '#F9D48B', borderRightWidth: 6, zIndex: 1 }} />
                <View style={{ transform: [{ rotate: '-45deg' }], width: windowHeight * 0.15, height: windowHeight * 0.2, backgroundColor: '#2E0000', position: 'absolute', right: 46, bottom: 38, borderRadius: 10, zIndex: 2, }}></View>

                <View style={{ width: windowHeight * 0.30, height: windowHeight * 0.20, backgroundColor: '#2E0000', position: 'absolute', bottom: 0, borderRadius: 22, borderBottomWidth: 10, borderBottomColor: '#F9D48B', borderLeftColor: "#F9D48B", borderRightColor: '#F9D48B', borderWidth: 6, zIndex: 1, }}></View>
                <Text style={{ position: 'absolute', color: '#fff', zIndex: 3, fontSize: 26 }}>{title}</Text>
            </View>
        </>
    )
}