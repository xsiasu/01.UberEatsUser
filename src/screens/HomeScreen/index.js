import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";
import RestaurantItem from "../../components/RestaurantItem/";
// import Restaurants from "../../../assets/data/restaurants.json";
export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);
  return (
    <View style={styles.container}>
      {/* item */}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
