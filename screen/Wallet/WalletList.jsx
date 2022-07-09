//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

// create a component

const Items = ({ item }) => {
  return (
    <View style={styles.list}>
      <View style={{ gap: 20, flexDirection: "row" }}>
        {item.pic == "money.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/money.png")}
          />
        )}
        {item.pic == "avatar.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/avatar.png")}
          />
        )}
        {item.pic == "another_avatar.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/another_avatar.png")}
          />
        )}
        {item.pic == "case.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/case.png")}
          />
        )}
        {item.pic == "add.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/add.png")}
          />
        )}
        {item.pic == "applepay.png" && (
          <Image
            style={{ width: 40, height: 28, borderRadius: 3 }}
            source={require("../../assets/images/applepay.png")}
          />
        )}

        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="white" />
    </View>
  );
};

const WalletList = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.length > 0 && (
        <FlatList data={data} renderItem={(item) => Items(item)} />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#052826",
    width: "90%",
    marginBottom: 20,

    borderRadius: 12,
    marginHorizontal: "auto",
    shadowColor: "#19BDB1",
    shadowOffset: { width: 10, height: -50 },
    shadowOpacity: 0.2,
    shadowRadius: 60,
    elevation: 24,
  },
  title: {
    fontFamily: "montBold",
    color: "#DCDCDC",
    fontSize: 18,
    padding: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemTitle: {
    fontFamily: "montBold",
    color: "#EAEAEA",
    fontSize: 15,
  },
  itemSubtitle: {
    fontFamily: "montBold",
    color: "#00FFCF",
    fontSize: 14,
    opacity: 0.6,
  },
});

//make this component available to the app
export default WalletList;
