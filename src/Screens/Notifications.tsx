import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../Components/HomeComponent/HeaderComponent'
import { LinearGradient } from 'expo-linear-gradient'

import image1 from "./../../assets/Images/imagen1.png"
import Notification from '../Components/NotificacionComponent/Notification'
import { AuthContext } from '../Context/AuthContext'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Notifications() {
  const { Identidad } = useContext(AuthContext);

  const [notificacionContet, setnotificacionContet] = useState([]);


  useEffect(() => {
    console.log(Identidad.plant.notifications)
    setnotificacionContet(Identidad.plant.notifications)


  }, []);

  return (
    <LinearGradient      // Background Linear Gradient
      colors={['#7A0000', '#2E0000']}
      style={styles.background}     >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderComponent title={"Notifications"} />
          <View style={{ width: '100%', height: windowHeight * 0.02 }}></View>

          {
            notificacionContet.length != 0 ? (

              <>

                {notificacionContet.map(item => (
                  <Notification
                    imageSource={image1}
                    title={item.notification}
                    message={item.content}
                    time="12:00"
                  />
                ))}


              </>
            ) : (

              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>No se encuentra Notificaciones</Text>
              </View>
            )
          }





          <View style={{ width: '100%', height: windowHeight * 0.02 }}></View>



        </ScrollView>
      </SafeAreaView>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  background: {
    flex: 1
  }
})
