import { View, Text, Dimensions, TextInput, StyleSheet } from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function InputComponent({ ...props }) {
    return (
        <View style={styles.container}>
            <TextInput {...props} style={{ height: '100%', }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.06,
        width: '95%',
        backgroundColor: '#fff',
        justifyContent: "center",
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 5
    }
})