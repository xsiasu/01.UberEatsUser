import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
