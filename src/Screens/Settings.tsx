import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../Components/HomeComponent/HeaderComponent'
import { AuthContext } from '../Context/AuthContext';

export default function Settings() {
  const { logout } = useContext(AuthContext);




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title={"Settings"} />
        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>Sign off</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  )
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
