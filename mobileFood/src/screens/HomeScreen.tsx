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

type HomeScreenProps = {
  navigation: any; // You can define a proper type for navigation
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemPress = (item: string) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleTextClick = (item: string) => {
    console.log(`Clicked: ${item}`);
  };

  const categorias = [
    "Todos",
    "Bebidas",
    "Lanches",
    "Doces",
    "Salgados",
    "Outros",
  ];

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
            onTextClick={handleTextClick}
          />
          <View>
            <FoodItem
              title="Pizza"
              photo="https://blog.ceraflame.com.br/wp-content/uploads/2021/06/Pizza-Napolitana-CERAFLAME-480x270.jpg"
              description="Pizza de queijo, calabresa e tomate"
              price="R$15"
              onPress={() => handleItemPress("Pizza")}
            />
            <FoodItem
              title="Hamburguer"
              photo="https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024"
              description="Hamburguer com cebola"
              price="R$155"
              onPress={() => handleItemPress("Hamburguer")}
            />
            <FoodItem
              title="Sushi"
              photo="https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1.png"
              description="Sushi irado"
              price="R$15"
              onPress={() => handleItemPress("Sushi")}
            />
            <FoodItem
              title="Xis"
              photo="https://www.rbsdirect.com.br/imagesrc/35719497.jpg?w=1024&h=1024&a=c"
              description="Xis tudo de bom"
              price="R$15"
              onPress={() => handleItemPress("Xis")}
            />
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
