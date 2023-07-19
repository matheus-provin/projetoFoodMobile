import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type FoodMenuModalProps = {
  visible: boolean;
  onClose: () => void;
  item: string;
  properties: string[];
};

const FoodMenuModal: React.FC<FoodMenuModalProps> = ({
  visible,
  onClose,
  item,
  properties,
}) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  const handlePropertyToggle = (property: string) => {
    if (selectedProperties.includes(property)) {
      setSelectedProperties(selectedProperties.filter((prop) => prop !== property));
    } else {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{item}</Text>
          {properties.map((property, index) => (
            <TouchableOpacity
              key={index}
              style={styles.propertyContainer}
              onPress={() => handlePropertyToggle(property)}
            >
              <Feather
                name={selectedProperties.includes(property) ? "check-square" : "square"}
                size={24}
                color="black"
                style={styles.checkboxIcon}
              />
              <Text style={styles.propertyText}>{property}</Text>
            </TouchableOpacity>
          ))}
          <Button title="Close Modal" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    height: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  propertyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxIcon: {
    marginRight: 10,
  },
  propertyText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default FoodMenuModal;
