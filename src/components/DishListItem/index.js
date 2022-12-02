import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Dish", { id: dish.id });
  };
  console.warn(dish.id);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>sdfasdfasdfasdfasdfasdf{dish.id}</Text>
        <Text style={styles.name}>sdfasdfasdfasdfasdfasdf{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image style={styles.image} source={{ uri: dish.image }} />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
export default DishListItem;
