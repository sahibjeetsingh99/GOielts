
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import SectionContentScreen from './SectionContentScreen';
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

/*
apiKey: "AIzaSyA6LaXPq9AjINtew6zpIDjtJWnjAw6o82U",
  authDomain: "goielts-f971d.firebaseapp.com",
  projectId: "goielts-f971d",
  storageBucket: "goielts-f971d.appspot.com",
  messagingSenderId: "157569705591",
  appId: "1:157569705591:web:951fef063b7712c22d4872",
  
  measurementId: "G-JZ7KGLZYDD"

*/
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use existing app
}

  const Reading = ({ route }) => {
    const { courseName } = route.params;
    const navigation = useNavigation();
    const navigateToSectionContent= (sectionContent) => {
      navigation.navigate('SectionContentScreen', { sectionContent });
    };

    
  
    const PracticeTest1 = [
        { name: 'Section 1', firestoreField: 'Section1' },
        { name: 'Section 2', firestoreField: 'Section2' },
        { name: 'Section 3', firestoreField: 'Section3' },
      ];
    
      const PracticeTest2 = [
        { name: 'Section 1', firestoreField: 'Section4' },
        { name: 'Section 2', firestoreField: 'Section5' },
        { name: 'Section 3', firestoreField: 'Section6' },
      ];
  
    const PracticeTest3 = [
        { name: 'Section 1', firestoreField: 'Section7' },
        { name: 'Section 2', firestoreField: 'Section8' },
        { name: 'Section 3', firestoreField: 'Section9' },
      ];

  const [selectedSection, setSelectedSection] = useState(null);
  const [sectionContent, setSectionContent] = useState(null);

  const handleSectionPress = async (firestoreField) => {
    try {
      const docRef = firebase.firestore().collection('ReadingPassage').doc('rdoc');
      const docSnapshot = await docRef.get();
  
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        const sectionContent = data[firestoreField];
        setSectionContent(sectionContent);
        setSelectedSection(firestoreField);
        navigateToSectionContent(sectionContent); // Pass the section content directly
      } else {
        console.log('ReadingPassage document does not exist.');
      }
    } catch (error) {
      console.log('Error fetching section content:', error);
    }
  };


 
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <Text style={styles.practiceTestTitle}>Practice Test 1</Text>
    {PracticeTest1.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
    ))}

<Text style={styles.practiceTestTitle}>Practice Test 2</Text>
    {PracticeTest2.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
    ))}
  
  <Text style={styles.practiceTestTitle}>Practice Test 3</Text>
    {PracticeTest3.map((section) => (
      <TouchableOpacity
        key={section.name}
        style={styles.sectionContainer}
        onPress={() => handleSectionPress(section.firestoreField)}
      >
        <Text style={styles.sectionName}>{section.name}</Text>
      </TouchableOpacity>
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

    practiceTestContainer: {
      marginBottom: 16,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#9768D9',
      borderRadius: 20,
      padding: 16,
    },
    practiceTestTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#9768D9',
      marginBottom: 8,
    },
  });


  export default Reading;


