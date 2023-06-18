import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CoursesPage = ({ navigation }) => {
  const navigateToCourseDetails = (courseName) => {
    navigation.navigate('CourseDetailsPage', { courseName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IELTS Preparation</Text>
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => navigateToCourseDetails('IELTS Reading')}
      >
        <Text style={styles.buttonText}>IELTS Reading</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => navigateToCourseDetails('IELTS Listening')}
      >
        <Text style={styles.buttonText}>IELTS Listening</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => navigateToCourseDetails('IELTS Writing')}
      >
        <Text style={styles.buttonText}>IELTS Writing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => navigateToCourseDetails('IELTS Speaking')}
      >
        <Text style={styles.buttonText}>IELTS Speaking</Text>
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
  courseButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CoursesPage;
