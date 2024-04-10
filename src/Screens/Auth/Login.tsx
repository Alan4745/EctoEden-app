import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputComponent from '../../Components/CompLogin/InputComponent';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <InputComponent placeholder="Email" />
            </View>

            <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <InputComponent placeholder="Password" secureTextEntry />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#272727",
        justifyContent: 'center',
        alignItems: 'center'
    }
})
