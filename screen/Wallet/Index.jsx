//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import TopWalletBar from "./TopWalletBar";
import WalletButton from "./WalletButton";
import WalletList from "./WalletList";
// create a component
const frequent = [
  { title: "Apple Pay", pic: "applepay.png", id: "1" },
  { title: "Cash", pic: "money.png", id: "2" },
  { title: "Add payment method", pic: "add.png", id: "3" },
];
const payment = [
  { title: "Personal", pic: "avatar.png", id: "4" },
  { title: "Mom", pic: "another_avatar.png", id: "5" },
  {
    title: "Enable Business Features",
    subtitle: "Special offers for businesses",
    pic: "case.png",
    id: "6",
  },
];
const Wallet = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <TopWalletBar />
        <WalletButton />
        <WalletList data={frequent} title={"Frequent Rider Profiles"} />
        <WalletList data={payment} title={"Payment Methods"} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073633",
    gap: 10,
    marginLeft: 10,
  },
});

//make this component available to the app
export default Wallet;
