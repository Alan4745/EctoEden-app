import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ProgressBar = ({ progress }) => {
    const [percent, setPercent] = useState(0);
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Limitar el progreso a un máximo de 100
        const clampedProgress = Math.min(progress, 1); // Limita el valor máximo a 1
        setPercent(clampedProgress * 100); // Convierte el progreso de fracción a porcentaje

        // Animación para aumentar el ancho de la barra de progreso
        Animated.timing(animatedWidth, {
            toValue: clampedProgress,
            duration: 500, // Duración de la animación en milisegundos
            useNativeDriver: false,
        }).start();
    }, [progress, animatedWidth]);

    return (
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <View style={{ width: '90%' }}>
                <Text style={styles.text}>Optimized: {`${percent.toFixed(0)}%`}</Text>

            </View>
            <View style={styles.container}>
                <View style={styles.progressBarContainer}>
                    <Animated.View style={[styles.progressBar, {
                        width: animatedWidth.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '100%'],
                        })
                    }]} />
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#F9D48B',
        borderRadius: 10
    },
    progressBarContainer: {
        flex: 1,
        height: 30,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#2E0000',
        overflow: 'hidden', // Para recortar la barra de progreso dentro del contenedor
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#790101',

    },
    text: {
        marginLeft: 10,
        fontSize: 30,
        color: 'white',
    },
});

export default ProgressBar;
