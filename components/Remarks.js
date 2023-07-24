import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
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
const StudentRemarks = () => {
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
    // Load student remarks from Firebase Firestore
    loadStudentRemarks();
  }, []);
  const loadStudentRemarks = async () => {
    try {
      const studentsCollection = await db.collection('students').get();
      const updatedStudents = students.map((student) => {
        const doc = studentsCollection.docs.find((doc) => doc.id === String(student.id));
        if (doc) {
          return { ...student, remarks: doc.data().remarks || 'No remarks for now' };
        } else {
          return student;
        }
      });
      setStudents(updatedStudents);
    } catch (error) {
      console.error('Error loading student remarks:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Student Remarks</Text>
      {students.map((student) => (
        <View key={student.id} style={styles.studentContainer}>
          <Text style={styles.studentName}>{student.username}</Text>
          <View style={styles.remarksContainer}>
            <TextInput
              multiline
              editable={false} // Set this to make the TextInput non-editable
              value={student.remarks}
              style={styles.remarksText}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    minHeight: 1900,
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
  remarksContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  remarksText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default StudentRemarks;
