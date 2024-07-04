import {StyleSheet,StatusBar, Platform} from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#040316',
      paddingTop:Platform.OS=='android'?StatusBarHeight:25
    }
  })