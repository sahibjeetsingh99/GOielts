import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TutorHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Help our Students with the best!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Choose your section</Text>
        <TouchableOpacity
          style={styles.courseButton1}
          onPress={() => navigation.navigate('LeaderBoard')}
        >
          <Icon name="book" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Check Student Insights</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.courseButton2}
          onPress={() => navigation.navigate('TutorSpeaking')}
        >
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Start Speaking Session</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.courseButton2}
          onPress={() => navigation.navigate('TutorRemarks')}
        >
          <Icon name="pencil" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Remarks</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('TutorHome')}>
          <Icon name="home" size={20} color="#fff" style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
          <Icon name="gear" size={20} color="#fff" style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  contentContainer: {
    backgroundColor: 'lightgrey',
    padding: 30,
    margin: 0,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  courseButton1: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  courseButton2: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9768D9',
    height: 70,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
  footerButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  footerIcon:{
    marginRight: 10,
    fontSize: 25,
    textAlign: 'center',
    padding: 5
  },
});

export default TutorHome;
