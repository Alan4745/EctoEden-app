import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

interface RingProgressBarProps {
    radius: number;
    strokeWidth: number;
    progress: number;
    color: string;
}

const RingProgressBar: React.FC<RingProgressBarProps> = ({
    radius,
    strokeWidth,
    progress,
    color,
}) => {
    const circumference = 2 * Math.PI * radius;
    const progressStrokeDashoffset = circumference - (progress / 100) * circumference;

    // Calculamos el radio para el contorno del anillo de fondo
    const backgroundStrokeWidth = strokeWidth + 4;
    const shadowOffset = 6;


    return (
        <View style={styles.container}>
            <Svg width={radius * 2 + 6} height={radius * 2 + 6}>
                {/* Contorno del anillo de fondo */}
                <Circle
                    stroke="#2E0000"
                    fill="none"
                    strokeWidth={backgroundStrokeWidth}
                    cx={radius + shadowOffset}
                    cy={radius}
                    r={radius - backgroundStrokeWidth / 2} // Ajustamos el radio
                />
                {/* Anillo de fondo */}
                <Circle
                    stroke="#F9D48B"
                    fill="none"
                    strokeWidth={strokeWidth}
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                />
                {/* Anillo de progreso */}
                <Circle
                    stroke={color}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset: progressStrokeDashoffset }}
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                />
                {/* Texto de progreso */}
                <Text
                    x={radius}
                    y={radius + radius / 8}
                    fontSize={radius / 2}
                    fontFamily="Arial"
                    textAnchor="middle"
                    fill="#fff"
                    fontWeight="bold"
                >
                    {`${progress.toFixed(0)}%`}
                </Text>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default RingProgressBar;
