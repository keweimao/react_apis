import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, Alert } from 'react-native';

const HttpCat = () => {
  const [statusCode, setStatusCode] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');

  const fetchCatImage = () => {
    if (!statusCode) {
      Alert.alert('Error', 'Please enter a status code');
      return;
    }

    const url = `https://http.cat/${statusCode}.jpg`;

    setCatImageUrl(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter HTTP Status Code:</Text>
      <TextInput
        style={styles.input}
        value={statusCode}
        onChangeText={setStatusCode}
        placeholder="e.g., 404"
        keyboardType="numeric"
      />
      <Button title="Get Cat Image" onPress={fetchCatImage} />
      {catImageUrl ? (
        <Image
          source={{ uri: catImageUrl }}
          style={styles.image}
          onError={() => {
            Alert.alert('Error', 'Invalid status code or image not found');
            setCatImageUrl('');
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '80%',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 16,
  },
});

export default HttpCat;
