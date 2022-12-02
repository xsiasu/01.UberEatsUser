import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DataStore, Auth } from "aws-amplify";
import { useAuthContext } from "../../contexts/AuthContext";
import { User } from "../../models";
const index = () => {
  const { dbUser } = useAuthContext();
  const naviation = useNavigation();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAdress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat || "0");
  const [lng, setLng] = useState(dbUser?.lng || "0");

  const { sub, setDbUser } = useAuthContext();
  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await createUser();
    }
    naviation.goBack();
  };

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = lat;
        updated.lng = lng;
      })
    );
    setDbUser(user);
  };
  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat,
          lng,
          sub,
        })
      );
      setDbUser(user);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAdress}
        placeholder="address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="lat"
        style={styles.input}
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="lng"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Text onPress={() => Auth.signOut()}>Sign out</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default index;
