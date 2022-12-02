import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import DishListItem from "../../components/DishListItem/";
import Header from "./Header";
import { useRoute, useNavigation } from "@react-navigation/native";

function RestaurantDetailsPage() {
  const route = useRoute();
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const id = route.params?.id;

  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Restaurant, id).then(setRestaurant);

    // DataStore.query(Dish, (dish) => dish.restaurantID.id("eq", dish.id)).then(
    //   setDishes
    // );
    DataStore.query(Dish, (c) => c.restaurantID.eq(id)).then(setDishes);
  }, [id]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <View style={styles.container}>
      <Text>매뉴리스트</Text>

      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
}

export default RestaurantDetailsPage;
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
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
});
