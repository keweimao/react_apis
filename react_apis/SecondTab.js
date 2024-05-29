import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the second tab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondTab;
