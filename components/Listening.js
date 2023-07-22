
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity,Image  } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import ListeningData from './ListeningData';
import { FontAwesome } from '@expo/vector-icons';


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
  firebase.app();
}

  const Listening = ({ route }) => {
    const { courseName } = route.params;
    const navigation = useNavigation();

    const navigateToListeningData = (firestoreField, audioFile) => {
  navigation.navigate('ListeningData', { listeningContent: firestoreField, audioFile });
};

    const PracticeTest1 = [
        { name: 'Listening', firestoreField: 'T1' ,audioFile: require('../assets/Recording1.mp3')  },
      ];
      const PracticeTest2 = [
        { name: 'Listening', firestoreField: 'T2' ,audioFile: require('../assets/Recording2.mp3')  },
       
      ];
  
      const PracticeTest3 = [
        { name: 'Listening', firestoreField: 'T3' ,audioFile: require('../assets/Recording3.mp3')  },
       
      ];

  const [selectedListening, setSelectedListening] = useState(null);
  const [listeningContent, setListeningContent] = useState(null);

  const handleSectionPress = async (firestoreField, audioFile) => {
    try {
      const docRef = firebase.firestore().collection('Listening').doc('ldoc');
      const docSnapshot = await docRef.get();
  
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        const listeningContent = data[firestoreField];
        navigateToListeningData(listeningContent, audioFile);
      } else {
        console.log('Listening document does not exist.');
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
        onPress={() => handleSectionPress(section.firestoreField, section.audioFile)}

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
        onPress={() => handleSectionPress(section.firestoreField, section.audioFile)}
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
        onPress={() => handleSectionPress(section.firestoreField, section.audioFile)}
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



  export default Listening;


