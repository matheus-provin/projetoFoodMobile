import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ScrollableTextBoxProps = {
  categorias: string[];
  onTextClick: (item: string) => void;
};

const ScrollableTextBox: React.FC<ScrollableTextBoxProps> = ({ categorias, onTextClick }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {categorias.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.textContainer}
            onPress={() => onTextClick(item)}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    alignItems: 'flex-start',
  },
  textContainer: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default ScrollableTextBox;
