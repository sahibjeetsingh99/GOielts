import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailsPage = ({ route }) => {
  const { courseName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseName}</Text>
      {/* Add more course details here */}
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
    marginBottom: 16,
  },
});

export default CourseDetailsPage;
