import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Image, Text, TouchableHighlight, View } from "react-native";

export default function TopWalletBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        height: 60,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <TouchableHighlight>
          <Entypo name="chevron-left" size={32} color="#DCDCDC" />
        </TouchableHighlight>
        <Text
          style={{
            fontFamily: "montBoldItalic",
            fontSize: 22,
            color: "#DCDCDC",
          }}
        >
          Bolt Wallet
        </Text>
      </View>
      <View style={{ width: 20, height: 20, backgroundColor: "gray" }}></View>
    </View>
  );
}
