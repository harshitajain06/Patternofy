import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, useColorScheme, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PatterNofyScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#111111' : '#114111';
  const textColor = '#ffffff'; // White text for better contrast

  const handleCreatePress = () => {
    // Add your action for the "Create" button here
    navigation.navigate('MainPage');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: textColor }]}>PATTERNOFY</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.stepContainer}>
        <Text style={[styles.subtitle, { color: textColor }]}>OUR MOTTO:</Text>
        <Text style={[styles.motto, { color: textColor }]}>M = pF²</Text>
        <Text style={[styles.subtitle, { color: textColor }]}>Math = Pattern x Fun²</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={[styles.contentText, { color: textColor }]}>
          Welcome to Your Own Pattern Studio
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={[styles.contentText, { color: textColor }]}>
          Create your own mathematical visual patterns and explore the beauty of math!
        </Text>
      </View>
      <TouchableOpacity style={styles.createButton} onPress={handleCreatePress}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginTop: 50,
  },
  imageContainer: {
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 8, // Android shadow
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 16,
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 6,
  },
  motto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
    textDecorationLine: 'underline',
  },
  contentText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 8,
    lineHeight: 24,
  },
  createButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});
