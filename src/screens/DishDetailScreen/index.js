import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";
const DishDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);
  const route = useRoute();
  const id = route.params?.id;

  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  const navigation = useNavigation();
  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  if (!dish) {
    return <ActivityIndicator size="large" color="gray" />;
  }
  const { addDishToBasket } = useBasketContext();
  const onAddToBasket = async (dish, quantity) => {
    await addDishToBasket(dish, quantity);

    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <Text style={styles.text}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>{dish.price}</Text>
      <Image style={styles.image} source={{ uri: dish.image }} />
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={onPlus}
        />
      </View>

      <Pressable style={styles.button} onPress={onAddToBasket}>
        <Text style={{ color: "#fff" }}>
          {quantity}의 상품이 추가되었습니다. (${getTotal()})
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailScreen;
const styles = StyleSheet.create({
  page: {
    // flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
});
