import * as React from "react";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getMapPreview } from "./../../util/location";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  Image,
} from "react-native";

export default function App() {
  const [locationPicked, setLocationPicked] = React.useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  async function VerifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const PermissionResponse = await requestPermission();
      return PermissionResponse;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insuficient Permissions", "You need to grant permission");
      return false;
    }
  }
  async function getLocationHandler() {
    const hasPermission = await VerifyPermissions();

    const location = await getCurrentPositionAsync();
    setLocationPicked({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    console.log(location.coords.latitude);
  }
  return (
    <View style={styles.container}>
      {!locationPicked ? (
        <Button
          color="#04786D"
          onPress={getLocationHandler}
          title="Take current location"
        />
      ) : (
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: getMapPreview(locationPicked?.lat, locationPicked?.lng),
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,

    backgroundColor: "#131415",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
