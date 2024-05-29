import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import * as Permissions from 'expo-permissions';
import axios from 'axios'; 

const ProductEntry = () => {
  const [name, setName] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [price, setPrice] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  const addProduct = () => {
    // const url = "https://http.cat/200";
    const url = `https://www.cs.drexel.edu/~wk77/php_site/addProduct.php?name=${name}&cat_id=${categoryID}&price=${price}`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        if (data === "1") {
          setResponseStatus("Product added successfully.");
          Alert.alert("Success", "Product added successfully.");
        } else {
          setResponseStatus("Failed to add product.");
          Alert.alert("Error", "Failed to add product.");
        }
      })
      .catch(error => {
        setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
        console.log(error);
        // Alert.alert("Error", "Error: " + error.message);
      });
  };

  // Another implementation using Axios
  const addProduct_Axios = () => {
    // const url = "https://http.cat/200";
    // const url = "http://api.open-notify.org/iss-now.json"; 
    const url = `https://www.cs.drexel.edu/~wk77/php_site/addProduct.php?name=${name}&cat_id=${categoryID}&price=${price}`; 
    // const url = "https://www.cs.drexel.edu/~wk77/php_site/getAllProducts.php"; 
    axios.get(url)
      .then(response => {
        const data = response.data;
        if (data === "1") {
          setResponseStatus("Product added successfully.");
          Alert.alert("Success", "Product added successfully.");
        } else {
          setResponseStatus("Failed to add product.");
          Alert.alert("Error", "Failed to add product.");
        }
      })
      .catch(error => {
        const errorMessage = "Error: " + error.message;
        const errorDetails = JSON.stringify(error);
        setResponseStatus(errorMessage + ", MORE: " + errorDetails);
        console.log(errorMessage);
        console.log(errorDetails);
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Category ID:</Text>
      <Picker
        selectedValue={categoryID}
        style={styles.input}
        onValueChange={(itemValue) => setCategoryID(itemValue)}
      >
        <Picker.Item label="Select a category" value="" />
        <Picker.Item label="Category 1" value="1" />
        <Picker.Item label="Category 2" value="2" />
        {/* Add more categories as needed */}
      </Picker>
      
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />
      
      <Button
        title="Add Product"
        onPress={addProduct}
      />
      
      {responseStatus ? <Text style={styles.responseStatus}>{responseStatus}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  responseStatus: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default ProductEntry;
