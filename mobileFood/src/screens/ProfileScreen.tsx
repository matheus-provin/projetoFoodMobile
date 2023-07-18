import React from 'react';
import { View, Text, Button } from 'react-native';

type ProfileScreenProps = {
  navigation: any; // You can define a proper type for navigation
};
    
const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProfileScreen;
