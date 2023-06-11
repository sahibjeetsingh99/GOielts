import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CoursesPage from './CoursesPage';

/*const HomePage = ({ navigation }) => {
  const navigateToCourses = () => {
    navigation.navigate(CoursesPage);
  };*/

  function HomePage ({ navigation }){

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to IELTS Learning Platform</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}
      >
        <Text style={styles.buttonText}>Explore Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
