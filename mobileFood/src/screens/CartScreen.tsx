import React from 'react';
import { View, Text, Button } from 'react-native';

type CartScreenProps = {
  navigation: any; // You can define a proper type for navigation
};
    
const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Carrinho Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CartScreen;
