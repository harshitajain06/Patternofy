import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EquationPage() {
  const route = useRoute();
  const navigation = useNavigation();
  const { formula } = route.params;
  const [inputs, setInputs] = useState({});
  const variables = formula.match(/[a-z]/g) || [];

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculateResult = () => {
    try {
      const result = eval(formula.replace(/[a-z]/g, (match) => inputs[match] || 0));
      alert(`Result: ${result}`);
    } catch (error) {
      alert('Error calculating result.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equation: {formula}</Text>
      {variables.map((variable, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter value for {variable}:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(value) => handleChange(variable, value)}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={calculateResult}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#114111', // Green title for consistency with the theme
    marginTop: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#114111', // Green button to match the theme
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3, // Adds shadow to button for iOS/Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
