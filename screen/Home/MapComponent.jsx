//import liraries
import React, { Component } from "react";
import Maps from "./Maps";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

// create a component
const MapComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("ok")}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#047B78", "#117158"]}
          style={styles.mapTitleBox}
        >
          <AntDesign name="infocirlce" size={18} color="#DCDCDC" />
          <Text style={styles.text}>Explore places near you</Text>
        </LinearGradient>
      </Pressable>
      <Maps />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#2c3e50",
  },
  mapTitleBox: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    width: "100%",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 50,
    zIndex: 30,
  },
  text: {
    fontFamily: "montBold",
    fontSize: 15,
    color: "#DCDCDC",
    marginLeft: 15,
  },
});

//make this component available to the app
export default MapComponent;
