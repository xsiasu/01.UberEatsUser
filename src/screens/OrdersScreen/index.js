import { View, Text, StyleSheet, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import OrdersListItem from "../../components/OrdersListItem";

const OrdersScreen = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersListItem order={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
export default OrdersScreen;
