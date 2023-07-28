import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import ScrollableTextBox from "../components/Categorias";
import FoodItem from "../components/ItemCardapio";
import FoodMenuModal from "../components/ItemModal";
import { foodItems } from "../components/FoodItems";

type HomeScreenProps = {
  navigation: any; // You can define a proper type for navigation
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTag, setSelectedTag] = useState("Todos");

  const handleItemPress = (item: string, tag: string) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleTextClick = (item: string) => {
    console.log(`Clicked: ${item}`);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const categorias = [
    "Todos",
    "Bebidas",
    "Lanches",
    "Doces",
    "Salgados",
    "Outros",
  ];

  

  const filteredFoodItems =
    selectedTag === "Todos"
      ? foodItems
      : foodItems.filter((item) => item.tag === selectedTag);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.carouselContainer}>
            <Text>Carrossel</Text>
          </View>
          <View style={styles.pedidoContainer}>
            <Text>Pedido Atual</Text>
          </View>

          <View style={styles.greenBox} />
          <Text style={styles.title}>Cardápio Digital</Text>
          <ScrollableTextBox
            categorias={categorias}
            onTextClick={handleTagClick}
          />
          <View>
            {filteredFoodItems.map((item, index) => (
              <FoodItem
                key={index}
                tag={item.tag}
                title={item.title}
                photo={item.photo}
                description={item.description}
                price={item.price}
                onPress={() => handleItemPress(item.title, item.tag)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <FoodMenuModal
        visible={modalVisible}
        onClose={handleModalClose}
        item={selectedItem}
        properties={["Tomato", "Lettuce"]}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  carouselContainer: {
    height: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  pedidoContainer: {
    height: 75,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  greenBox: {
    width: "100%",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    height: 200,
    padding: 20,
  },
  slideText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    display: "flex",
    textAlign: "center",
  },
});

export default HomeScreen;
