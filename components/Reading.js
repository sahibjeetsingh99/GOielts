
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FontAwesome } from '@expo/vector-icons'; 
import SectionContentScreen from './SectionContentScreen';

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
        navigateToSectionContent(sectionContent); 
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
<View style={styles.practiceTestContainer}>
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
</View>

<View style={styles.practiceTestContainer}>
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
  </View>
  <View style={styles.practiceTestContainer}>
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

 {/* Additional locked practice test */}
 <TouchableOpacity style={styles.sectionContainer} disabled>
          <Text style={styles.sectionName}> Practice Test 4</Text>
          <FontAwesome name="lock" size={22} color="red" />
        </TouchableOpacity>

<TouchableOpacity style={styles.sectionContainer} disabled>
          <Text style={styles.sectionName}> Practice Test 5</Text>
          <FontAwesome name="lock" size={22} color="red" />
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


  export default Reading;


