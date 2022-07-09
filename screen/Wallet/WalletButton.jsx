//import liraries
import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

// create a component
const WalletButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        end={{ x: 0.2, y: -0.2 }}
        colors={["#0D7311", "#00FFFB"]}
        style={styles.button}
      >
        <View style={{ gap: 20 }}>
          <Text style={styles.text}>BOLT credits</Text>
          <View style={styles.box}>
            <Text style={styles.buttonText}>+ Redeem Gift Card</Text>
          </View>
        </View>
        <Entypo
          name="chevron-right"
          size={36}
          color="black"
          style={{ alignSelf: "flex-start", marginTop: 10 }}
        />
      </LinearGradient>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    shadowColor: "#19BDB1",
    shadowOffset: { width: 10, height: -50 },
    shadowOpacity: 0.2,
    shadowRadius: 60,
    elevation: 24,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#094340",
    width: 181,
    height: 40,
    borderRadius: 11,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  button: {
    height: 120,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: "montExtraItalic",
    color: "#094340",
    fontSize: 24,
  },
  buttonText: {
    color: "#06B388",
    fontFamily: "mont",
    fontSize: 16,
  },
});

//make this component available to the app
export default WalletButton;
