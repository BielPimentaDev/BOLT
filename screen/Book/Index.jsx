//import liraries
import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";

import BottomSlide from "./BottomSlide";

// create a component
const Book = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ zIndex: 40 }}>
        <Button title="proxima" onPress={() => navigation.navigate("Wallet")} />
      </View>
      <TopBar />
      <View style={styles.textBox}>
        <Text style={styles.title}>Where would you like to go out?</Text>
        <Text style={styles.subtitle}>Book an EV ride or rent one</Text>
      </View>

      <Image
        style={styles.carImage}
        source={require("../../assets/images/CAR.png")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: 50,
        }}
      >
        <View style={styles.ball}></View>
        <View style={styles.ball}></View>
        <View style={styles.activeBall}></View>
        <View style={styles.ball}></View>
        <View style={styles.ball}></View>
      </View>
      <BottomSlide />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#073633",
  },
  textBox: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  title: {
    color: "#DCDCDC",
    fontFamily: "montBoldItalic",
    fontSize: 28,
  },
  subtitle: {
    fontFamily: "montLight",
    color: "#DCDCDC",
    fontSize: 15,

    marginTop: 10,
  },
  carImage: {
    width: 450,
    height: 200,
    marginHorizontal: "auto",
  },
  ball: {
    width: 8,
    height: 8,
    backgroundColor: "#415B5E",

    borderRadius: 50,
  },
  activeBall: {
    width: 12,
    height: 12,
    backgroundColor: "#E3E4E4",

    borderRadius: 50,
  },
});

//make this component available to the app
export default Book;
