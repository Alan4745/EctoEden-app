import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonComponent({ title, disabled, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.viewContainer, disabled ? styles.disableView : null]}>
            <View style={styles.gradient}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10,
        width: '95%',

    },
    gradient: {
        width: '100%',

    },
    buttonText: {
        padding: 8,
        fontSize: 18,
        borderRadius: 8,
        color: '#fff',
        backgroundColor: '#790101',
        borderWidth: 1,
        borderColor: '#ECC984',
        margin: 2,
        fontWeight: '600',
        textAlign: 'center',
    },
    disableView: {
        opacity: 0.5,
    },
});