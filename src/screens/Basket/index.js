import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text>Your Items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText}>주문하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    paddingVertical: 80,
  },
  title: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "red",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Basket;
