import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../Components/HomeComponent/HeaderComponent';

export default function Reports() {
  const [reportTitles, setReportTitles] = useState([
    { title: "Sales Report", pdfLink: "https://example.com/sales_report.pdf" },
    { title: "Financial Statement", pdfLink: "https://example.com/financial_statement.pdf" },
    { title: "Marketing Analysis", pdfLink: "https://example.com/marketing_analysis.pdf" },
    // Agrega más objetos con títulos y enlaces a PDF según sea necesario
  ]);

  const navigation = useNavigation();

  const handleReportPress = (report) => {
    navigation.navigate('PdfComponent', { reportData: report }); // Pasa el objeto completo del informe como parámetro
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title={"Reports"} />

        {reportTitles.map((report, index) => (
          <TouchableOpacity key={index} onPress={() => handleReportPress(report)}>
            <View style={styles.titlesContainer}>
              <Text style={styles.title}>{report.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  },
  titlesContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.08,
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
    borderColor: "#F9D48B",
    borderWidth: 2,
    borderRadius: 25,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
