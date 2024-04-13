import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderComponent from '../Components/HomeComponent/HeaderComponent';
import Checkbox from 'expo-checkbox';

import imagen1 from "./../../assets/Images/imagen1.png"
import ProgressBar from '../Components/HomeComponent/ProgressBar';
import PieChart from 'react-native-pie-chart';
import RingProgressBar from '../Components/HomeComponent/RingProgressBar';
import CheckboxComponente from '../Components/HomeComponent/CheckboxComponente';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Home() {

  const [isChecked, setChecked] = useState(false);

  const [waterChecked, setWaterChecked] = useState(false);
  const [foodChecked, setFoodChecked] = useState(false);

  const [progress, setprogress] = useState(0);


  const [tasks, setTasks] = useState([
    { id: 1, name: 'Water', completed: false },
    { id: 2, name: 'Sunlight check', completed: false },
    { id: 3, name: 'ph check', completed: false },
    { id: 4, name: 'saludar', completed: false },

    // Agrega más tareas según sea necesario
  ]);




  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const calculatedPercentage = (completedTasks / totalTasks) * 100;
    setPercentage(calculatedPercentage);
  }, [tasks]);

  const handleTaskChange = (taskId, newValue) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: newValue } : task
      )
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title={"EctoEden"} />

        <View style={{ marginHorizontal: 20, marginVertical: 20, borderBottomColor: "#F9D48B", borderBottomWidth: 1, width: 'auto' }}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Julio's Swiss 🧀</Text>
        </View>


        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '90%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, overflow: 'hidden' }}>
            <Image source={imagen1} style={{ width: '100%', height: '100%', borderRadius: 30, resizeMode: 'contain' }} />
          </View>
        </View>

        <ProgressBar progress={percentage / 100} />



        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ width: '50%', height: '100%', }}>
            <RingProgressBar
              radius={80}
              strokeWidth={15}
              progress={percentage}
              color="#7A0000"
            />

          </View>
          <View style={{ width: '50%', height: '100%' }}>
            {tasks.map(task => (
              <CheckboxComponente
                key={task.id}
                label={task.name}
                isChecked={task.completed}
                onStateChange={(newValue) => handleTaskChange(task.id, newValue)}
              />
            ))}

          </View>
        </View>




      </ScrollView>
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#272727",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  checkbox: {
    margin: 8,
    width: windowWidth * 0.08,
    height: windowWidth * 0.08
  },
  percentage: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
})
