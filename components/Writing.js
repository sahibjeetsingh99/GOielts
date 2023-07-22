

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity,Image  } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import WritingData from './WritingData';
import { FontAwesome } from '@expo/vector-icons'; // Import the FontAwesome component


// Initialize Firebase
const firebaseConfig = {


  apiKey: "AIzaSyBr7vzz3cOG_nERnr_MWP-fACtx3EjpMbA",
  authDomain: "goielts-de65a.firebaseapp.com",
  databaseURL: "https://goielts-de65a-default-rtdb.firebaseio.com",
  projectId: "goielts-de65a",
  storageBucket: "goielts-de65a.appspot.com",
  messagingSenderId: "569148549935",
  appId: "1:569148549935:web:ceb3c9b4eb4421d2ec0fda",
  measurementId: "G-NB9Z4VNGCF"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use existing app
}

  const Writing = ({ route }) => {
    const { courseName } = route.params;
    const navigation = useNavigation();



    const navigateToWritingData = (taskContent, imageFileName) => {
      navigation.navigate('WritingData', { taskContent, imageFileName });
    };
  
    const PracticeTest1 = [
        { name: 'Task 1', firestoreField: 'Task1', imageFileName: 'Task1-1.png'  },
        { name: 'Task 2', firestoreField: 'Task2', imageFileName: ''  },
      ];
    
      const PracticeTest2 = [
        { name: 'Task 1', firestoreField: 'Task3' , imageFileName: 'Task1-2.png' },
        { name: 'Task 2', firestoreField: 'Task4',imageFileName: '' },
      ];
  
    
      const PracticeTest3 = [
        { name: 'Task 1', firestoreField: 'Task5' ,imageFileName: 'Task1-3.png'},
        { name: 'Task 2', firestoreField: 'Task6' ,imageFileName: ''},
      ];

  const [selectedTask, setSelectedTask] = useState(null);
  const [taskContent, setTaskContent] = useState(null);
  

  const handleSectionPress = async (firestoreField, imageFileName) => {
    try {
      const docRef = firebase.firestore().collection('Writing').doc('wdoc');
      const docSnapshot = await docRef.get();

      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        const taskContent = data[firestoreField];
        navigateToWritingData(taskContent, imageFileName);
      } else {
        console.log('Writing document does not exist.');
      }
    } catch (error) {
      console.log('Error fetching section content:', error);
    }
  };




return (
  <View style={styles.container}>
    <View style={styles.header}></View>
    <View style={styles.practiceTestContainer}>

    <Text style={styles.practiceTestTitle}>Practice Test 1</Text>
    {PracticeTest1.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField, section.imageFileName)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
    ))}</View>

<View style={styles.practiceTestContainer}>

    <Text style={styles.practiceTestTitle}>Practice Test 2</Text>
    {PracticeTest2.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField, section.imageFileName)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
    ))}</View>

<View style={styles.practiceTestContainer}>

    <Text style={styles.practiceTestTitle}>Practice Test 3</Text>
    {PracticeTest3.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField, section.imageFileName)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
    ))}</View>

    
 {/* Additional locked practice test */}
 <TouchableOpacity style={styles.sectionContainer} disabled>
          <Text style={styles.sectionName}> Practice Test 4</Text>
          <FontAwesome name="lock" size={20} color="red" />
        </TouchableOpacity>

 {/* Additional locked practice test */}
 <TouchableOpacity style={styles.sectionContainer} disabled>
          <Text style={styles.sectionName}> Practice Test 5</Text>
          <FontAwesome name="lock" size={20} color="red" />
        </TouchableOpacity>

  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
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
    backgroundColor :'#9768D9',
  },
  sectionName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    marginRight: 8,
  },
  practiceTestContainer: {
    width:'40%',
    marginBottom: 16,
    borderWidth: 1,
    backgroundColor: '#9768D9',
    borderRadius: 10,
    padding: 16,
  },
  practiceTestTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#9768D9',
    marginBottom: 8,
    textAlign:'center',
  },
});



  export default Writing;


