import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Writing = ({ route }) => {
  const { courseName } = route.params;

  // Sample data for Task 1 sections with completion values
  const task1Sections = [
    { name: 'Section 1', completed: 0.6 },
    { name: 'Section 2', completed: 0.3 },
    { name: 'Section 3', completed: 0.8 },
  ];

  // Sample data for Task 2 sections with completion values
  const task2Sections = [
    { name: 'Section 1', completed: 0.4 },
    { name: 'Section 2', completed: 0.7 },
    { name: 'Section 3', completed: 0.5 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="pencil" size={30} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.title}>Writing</Text>
      </View>

      <Text style={styles.taskTitle}>Task 1</Text>
      {task1Sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionName}>{section.name}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${section.completed * 100}%` }]} />
          </View>
        </View>
      ))}

      <Text style={styles.taskTitle}>Task 2</Text>
      {task2Sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionName}>{section.name}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${section.completed * 100}%` }]} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  icon: {
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9768D9',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionName: {
    flex: 1,
    marginRight: 8,
  },
  progressBar: {
    flex: 2,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#9768D9',
    borderRadius: 5,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default Writing;
