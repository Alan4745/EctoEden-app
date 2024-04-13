import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import { useRoute } from '@react-navigation/native';

export default function PdfComponent() {

    const route = useRoute(); // Obtiene los parámetros de la ruta

    const { reportData } = route.params; // Obtiene los datos del informe

    console.log(reportData)

    const source = {
        uri: "https://pdfobject.com/pdf/sample.pdf",
        cache: true,
    };


    return (
        <SafeAreaView style={styles.container}>

            <Pdf
                trustAllCerts={false}
                source={source}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`)
                }}
            />


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272727",
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});