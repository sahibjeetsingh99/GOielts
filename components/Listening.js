import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Listening = ({ route }) => {
  const { courseName } = route.params;

  // Sample data for sections with completion values
  const sections = [
    { name: 'Section 1', completed: 0.6 },
    { name: 'Section 2', completed: 0.2 },
    { name: 'Section 3', completed: 0.9 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="headphones" size={30} color="white" style={styles.icon} />
        <Text style={styles.headerTitle}>Listening</Text>
      </View>

      {sections.map((section, index) => (
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9768D9',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
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
});

export default Listening;
