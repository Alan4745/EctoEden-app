import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CheckboxComponente = ({ label, isChecked, onStateChange }) => {
    const windowWidth = Dimensions.get('window').width;

    const handleStateChange = (newValue) => {
        if (onStateChange) {
            onStateChange(newValue);
        }
    };

    return (
        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
            <Checkbox
                style={{
                    margin: 8,
                    width: windowWidth * 0.08,
                    height: windowWidth * 0.08
                }}
                value={isChecked}
                onValueChange={handleStateChange}
                color={isChecked ? '#9D8658' : undefined}
            />
            <Text style={[styles.label, isChecked && styles.completedLabel]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        color: '#fff',
        fontSize: 20,
    },
    completedLabel: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
});

export default CheckboxComponente;
