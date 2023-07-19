import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type ButtonWithIconProps = {
  icon: string;
  title: string;
  onPress: () => void;
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.viewContainer}>
        <Feather name={icon} size={24} color="black" style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        {/* <Feather name="chevron-right" size={24} color="black" style={styles.iconRight} /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
  },
  viewContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
  },
  iconRight: {
    
  }
});

export default ButtonWithIcon;
