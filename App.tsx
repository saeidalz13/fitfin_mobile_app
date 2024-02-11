import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from 'react';
import ButtonSubmit from "./src/components/ButtonFitFin"
import SubmitButtonStyle from "./src/styles/Buttons/Submit"
// Options to import:
// Platform
// StatusBar (StatusBar.currentHeight)
// console.log(Dimensions.get())

export default function App() {
  console.log("App started...");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <ButtonSubmit styles={SubmitButtonStyle} onPress={() => console.log("Submitted")} title="Submit"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    alignItems: "center",
    justifyContent: "center",
  },
});
