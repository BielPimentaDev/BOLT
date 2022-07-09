//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import ConfirmButton from "./ConfirmButton";

// create a component
const BottomSlide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSide}>
        <Text style={styles.topTextTitle}>Evron Gen 2</Text>

        <Text style={styles.topTextOffer}>% Green Offers</Text>
      </View>

      <View style={styles.bottomSide}>
        <View style={styles.location}>
          <Image
            style={{
              width: 28,
              height: 130,
              zIndex: 10,
              paddingHorizontal: 10,
            }}
            source={require("../../assets/images/locationIcon.png")}
          />
          <View style={styles.contents}>
            <View>
              <Text style={styles.contentTitle}>Pickup</Text>
              <Text style={styles.contentSubtitle}>Enter Location</Text>
            </View>
            <View style={styles.hr}></View>
            <View>
              <Text style={styles.contentTitle}>Destination</Text>
              <Text style={styles.contentSubtitle}>Enter Location</Text>
            </View>
          </View>
          <View style={styles.close}>
            <MaterialCommunityIcons
              name="close-circle"
              size={24}
              color="#5A5A5A"
            />
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 16, height: 25 }}
            />

            <MaterialCommunityIcons
              name="close-circle"
              size={24}
              color="#5A5A5A"
            />
          </View>
        </View>

        <View>
          <View style={styles.buttons}>
            <IconButton icon="clock" />
            <IconButton icon="money" />
          </View>
          <ConfirmButton />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  topSide: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topTextTitle: {
    paddingTop: 10,
    fontFamily: "montBoldItalic",
    color: "#DCDCDC",
    fontSize: 20,
  },
  topTextOffer: {
    fontFamily: "montSemiBold",
    color: "#DCDCDC",
    backgroundColor: "#307C1C",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  //BUTTONS

  buttons: {
    flexDirection: "row",
    padding: 10,
    gap: 20,
  },

  // BOX CONTAINER
  bottomSide: {
    backgroundColor: "#131313",
    height: "100%",
    borderRadius: 30,
    marginTop: 20,
    padding: 10,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  hr: {
    width: "100%",
    borderBottomColor: "#5A5A5A",
    borderBottomWidth: 1,
  },
  contents: {
    width: "60%",
    gap: 20,
    paddingHorizontal: 10,
  },
  contentTitle: {
    color: "#fff",
    fontFamily: "montBoldItalic",
    fontSize: 22,
  },
  contentSubtitle: {
    color: "#808080",
    fontFamily: "montSemiBold",
    fontSize: 15,
  },
  close: {
    gap: 20,
    alignContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default BottomSlide;
