import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Maps from "./Maps";
import { HomeList } from "./HomeList";
import MapComponent from "./MapComponent";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  Platform,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [watchId, setWatchId] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ zIndex: 40 }}>
        <Button title="proxima" onPress={() => navigation.navigate("Book")} />
      </View>
      <TopBar />
      <View style={{ gap: 10, marginBottom: 50 }}>
        <Text style={styles.title}>Good Morning, Miko</Text>
        <Text style={styles.subtitle}>Lets head out on this sunny day</Text>
        <Image
          source={require("../../assets/images/wether.png")}
          style={styles.wether}
        />
      </View>

      <HomeList />
      <MapComponent navigation={navigation} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A272B",
  },
  wether: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "70%",
  },
  title: {
    color: "#DCDCDC",
    fontFamily: "montBoldItalic",
    fontSize: 28,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subtitle: {
    fontFamily: "montLight",
    color: "#DCDCDC",
    fontSize: 15,
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default Home;
