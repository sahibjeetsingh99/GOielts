import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import firebase from './firebase';
import HomePage from './components/HomePage';
import Settings from './components/Settings';
import CoursesPage from './components/CoursesPage';
import CourseDetailsPage from './components/CourseDetailsPage';
//import Carousel from 'react-native-snap-carousel';
import { View } from 'react-native';
import PageHeader from './components/HomePageHeader';
//import { ViewPropTypes } from 'react-native';

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
        <Stack.Screen style={styles.Heading}
          name="Home"
          component={HomePage}
          options={{ title: 'GoIELTS' }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesPage}
          options={{ title: 'CoursesPage' }}
        />
        <Stack.Screen
          name="CourseDetailsPage"
          component={CourseDetailsPage}
          options={({ route }) => ({ title: route.params.courseName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = styles.create({
  Heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
export default App;
