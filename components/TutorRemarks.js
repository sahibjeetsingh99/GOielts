import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

const db = firebase.firestore();

const TutorRemarks = () => {
  const initialStudents = [
    { id: 1, username: 'Sahib', remarks: '' },
    { id: 2, username: 'Aryan', remarks: '' },
    { id: 3, username: 'Suril', remarks: '' },
    { id: 4, username: 'JayKumar', remarks: '' },
    { id: 5, username: 'Jaspreet', remarks: '' },
    { id: 6, username: 'Mark', remarks: '' },
    { id: 7, username: 'Emma', remarks: '' },
    { id: 8, username: 'Oliver', remarks: '' },
    { id: 9, username: 'Sophia', remarks: '' },
    { id: 10, username: 'Liam', remarks: '' },
  ];

  const [students, setStudents] = useState(initialStudents);

  useEffect(() => {
    // Load saved remarks from Firebase Firestore and update the state
    loadSavedRemarks();
  }, []);

  const loadSavedRemarks = async () => {
    try {
      const studentsCollection = await db.collection('students').get();
      const remarksMap = {};
      studentsCollection.forEach((doc) => {
        const { remarks } = doc.data();
        remarksMap[doc.id] = remarks;
      });
      const updatedStudents = students.map((student) => ({
        ...student,
        remarks: remarksMap[student.id] || '',
      }));
      setStudents(updatedStudents);
    } catch (error) {
      console.error('Error loading saved remarks:', error);
    }
  };

  const handleRemarksChange = (text, studentId) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, remarks: text } : student
    );
    setStudents(updatedStudents);
  };

  const handleSaveRemarks = async () => {
    try {
      const batch = db.batch();
      students.forEach((student) => {
        const studentRef = db.collection('students').doc(String(student.id));
        batch.set(studentRef, { remarks: student.remarks }, { merge: true });
      });
      await batch.commit();
      console.log('Remarks Saved:', students);
    } catch (error) {
      console.error('Error saving remarks:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Tutor's Remarks</Text>
      {students.map((student) => (
        <View key={student.id} style={styles.studentContainer}>
          <Text style={styles.studentName}>{student.username}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              multiline
              placeholder={`Add remarks for ${student.username} here...`}
              onChangeText={(text) => handleRemarksChange(text, student.id)}
              value={student.remarks}
              style={styles.textInput}
            />
          </View>
        </View>
      ))}
      <Button title="Save Remarks" onPress={handleSaveRemarks} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 1700,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  studentContainer: {
    marginBottom: 16,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  textInput: {
    padding: 8,
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default TutorRemarks;
