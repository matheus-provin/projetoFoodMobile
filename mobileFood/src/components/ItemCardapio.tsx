import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

type FoodItemProps = {
  title: string;
  photo: string;
  tag: string;
  description: string;
  price: string;
  onPress: () => void;
};

const FoodItem: React.FC<FoodItemProps> = ({
  photo,
  description,
  price,
  onPress,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 25,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "light",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "blue",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FoodItem;
