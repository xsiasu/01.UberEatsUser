import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = ({ restaurant }) => {
  return (
    <View>
      <Text>대표이미지</Text>
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(1)}
        </Text>
        <Text>
          {restaurant.mindeliveryTime}min~{restaurant.maxdeliveryTime}min
        </Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
  },
});
