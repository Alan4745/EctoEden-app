import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Asegúrate de importar LinearGradient desde el paquete correcto

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Notification = ({ imageSource, title, message, time }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#7A0000', '#2E0000']}
                style={styles.gradient}
            >
                <View style={styles.imageContainer}>
                    <Image source={imageSource} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight * 0.12,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '60%',
        height: '60%',
    },
    textContainer: {
        width: '70%',
        height: '100%',
        paddingHorizontal: 5,
    },
    title: {
        color: '#F9D48B',
    },
    message: {
        color: '#fff',
    },
    timeContainer: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        transform: [{ rotate: '-90deg' }],
        color: '#F9D48B78',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Notification;
