import { View, Text, Image, StyleSheet } from "react-native";

const OrderDetailsItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <Image style={styles.image} source={{ uri: basketDish.image }} />
      <Text>{basketDish.name}</Text>
      <Text>{basketDish.description}</Text>
      <Text>{basketDish.price}</Text>
    </View>
  );
};

export default OrderDetailsItem;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
});
