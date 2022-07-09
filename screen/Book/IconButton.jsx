//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// create a component
const IconButton = ({ icon }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#04A0AA", "#093936"]}
      end={{ x: 0.5, y: 1 }}
      style={styles.button}
    >
      {icon === "clock" && <Feather name="clock" size={24} color="#328788" />}
      {icon === "money" && (
        <MaterialIcons name="attach-money" size={24} color="#328788" />
      )}
      <Text
        style={{
          color: "#328788",
          fontFamily: "montExtraBold",
          fontSize: 25,
        }}
      >
        - -
      </Text>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  button: {
    width: 150,
    height: 44,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});

//make this component available to the app
export default IconButton;
