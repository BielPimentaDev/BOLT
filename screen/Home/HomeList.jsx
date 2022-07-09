//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// create a component
const Item = ({ title, header }) => (
  <View
    style={{
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      gap: 10,
      borderBottomWidth: 1,
      borderColor: "#313131",
    }}
  >
    <AntDesign name="clockcircle" size={20} color="#7C7C7C" />
    <View style={styles.item}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export const HomeList = () => {
  const DATA = [
    {
      title: "Yoshikami ",
      data: ["1 Chome-41-4 Asakusa, Taito City"],
      key: 1,
    },
    {
      title: "Grill Sakura",
      data: ["1 Chome-41-4 Asakusa, Taito City"],
      key: 2,
    },
    {
      title: "Grill Sakura",
      data: ["1 Chome-41-4 Asakusa, Taito City"],
      key: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.boxListTitle}>
        <Text
          style={{
            color: "white",
            fontFamily: "montBold",
            fontSize: 18,
            padding: 5,
            color: "#06B884",
          }}
        >
          Enter Destination
        </Text>

        <View
          style={{
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderLeftColor: "#868686",
            padding: 5,
            paddingLeft: 15,
          }}
        >
          <AntDesign name="clockcircle" size={16} color="#DCDCDC" />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.data} header={item.title} key={item.key} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "80%",
    marginHorizontal: "auto",
    backgroundColor: "#021C19",
    shadowColor: "#19BDB1",
    shadowOffset: { width: 10, height: -50 },
    shadowOpacity: 0.2,
    shadowRadius: 60,
    elevation: 24,
    maxHeight: 200,
  },
  boxListTitle: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#093936",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  title: {
    paddingVertical: 8,
    color: "#5C5C5C",
    fontFamily: "mont",
    fontSize: 14,
  },
  header: {
    paddingTop: 10,
    color: "#7C7C7C",
    fontFamily: "montBold",
    fontSize: 15,
  },
});

//make this component available to the app
