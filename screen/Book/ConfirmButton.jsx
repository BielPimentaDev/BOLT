//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
// create a component
const ConfirmButton = () => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#03C80B", "#00FFFB", "#00FFFB"]}
      end={{ x: 0.5, y: 1 }}
      style={styles.button}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#085A5B", "#01FBAC"]}
        end={{ x: 0.5, y: 0.2 }}
        style={styles.button}
      >
        <View style={styles.slide}>
          <AntDesign name="right" size={24} color="#00DD66" />
        </View>
      </LinearGradient>
      <Text style={styles.text}>Slide to confirm your ride</Text>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "90%",

    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  slider: {},
  button: {
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "end",
    flexDirection: "row",
    gap: 20,
  },
  text: {
    fontFamily: "montExtraBold",
    fontSize: 14,
    color: "#007965",
  },
  slide: {
    height: "100%",
    borderRadius: 15,
    zIndex: 2,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default ConfirmButton;
