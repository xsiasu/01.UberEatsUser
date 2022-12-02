import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrdersListItem = ({ order }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Order", { id: order.id });
  };

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Text>Order list item</Text>
      <Image style={styles.image} source={{ uri: order.Restaurant.image }} />

      <View>
        <Text>{order.Restaurant.name}</Text>
        <Text>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
});

export default OrdersListItem;
