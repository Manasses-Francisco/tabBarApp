import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import { Routes } from './src/routes';
import {styles} from "./styles";



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Routes/>
    </SafeAreaView>
  );
}

