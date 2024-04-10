import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigation from './src/Navigation/MainNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <MainNavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
