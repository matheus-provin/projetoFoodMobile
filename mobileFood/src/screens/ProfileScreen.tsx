import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonWithIcon from "../components/ButtonWithIcon";

const ProfileScreen: React.FC = () => {
  const handleButtonPress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <ButtonWithIcon icon="user" title="Editar Perfil" onPress={handleButtonPress} />
      <ButtonWithIcon icon="map" title="Endereços" onPress={handleButtonPress} />
      <ButtonWithIcon icon="credit-card" title="Pagamento" onPress={handleButtonPress} />
      <ButtonWithIcon icon="log-out" title="Sair" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default ProfileScreen;
