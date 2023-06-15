import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import firebase from './firebase';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import StartPage from './components/StartPage';
import SignupPage from './components/SignupPage';

/*// Write data to the database
firebase.database().ref('users/1').set({
  name: 'John Doe',
  age: 25,
});

// Read data from the database
firebase
  .database()
  .ref('users/1')
  .once('value')
  .then((snapshot) => {
    const user = snapshot.val();
    console.log(user);
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
  });*/


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ title: 'GOIELTS Learning App' }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ title: 'Signup Page' }}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesPage}
          options={{ title: 'CoursesPage' }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailsPage}
          options={({ route }) => ({ title: route.params.courseName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
