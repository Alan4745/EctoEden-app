import React, { createRef, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, Modal, TouchableWithoutFeedback, TouchableOpacity, Button, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../Components/HomeComponent/HeaderComponent';
import grafrica1 from "./../../assets/Images/grafica1.png";
import grafrica2 from "./../../assets/Images/grafica2.png";
import { State } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const data = [
  {
    title: 'Moisture vs Sun vs Yield',
    image: grafrica1,
  },
  {
    title: 'CO2 Content (X) VS Yield (Y)',
    image: grafrica2,
  }
];

const MachineLearning = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);








  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title={"Machine Learning"} />

        {data.map((item, index) => (
          <View key={index}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
              <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>{item.title}</Text>
            </View>

            <TouchableOpacity onPress={() => handleImagePress(item.image)}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 38, overflow: 'hidden', marginBottom: index === data.length - 1 ? 20 : 0, backgroundColor: '#fff' }}>
                  <Image source={item.image} style={{ width: '100%', height: '100%', borderRadius: 30, resizeMode: 'contain' }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType='fade'
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={() => {
            closeModal()
            console.log("cerrando modal")
          }}>
            <View style={styles.modalBackground}>

              <View style={styles.modalContainer}>



                {selectedImage && (
                  <Image source={selectedImage} style={{ width: '100%', maxHeight: windowWidth * 1, height: windowWidth * 1, borderRadius: 10 }} resizeMode="center" />
                )}
                <Button title='Go back' onPress={() => {
                  closeModal()
                }} />
              </View>
            </View>
          </TouchableWithoutFeedback>

        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default MachineLearning;
