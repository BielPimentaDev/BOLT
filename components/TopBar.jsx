import React from "react";

import { Image, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
export default function Welcome() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: "#345A58",
        height: 60,
      }}
    >
      <TouchableHighlight>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/images/menu.png")}
        />
      </TouchableHighlight>

      <Image
        style={{ width: 120, height: 120 }}
        source={require("../assets/images/bolt.png")}
      />

      <View style={{ width: 20, height: 20, backgroundColor: "gray" }}></View>
    </View>
  );
}
