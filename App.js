import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import CoursesPage from "./components/CoursesPage";
import CourseDetailsPage from "./components/CourseDetailsPage";
import { StyleSheet } from "react-native";
import StartPage from "./components/StartPage";
import SignupPage from "./components/SignupPage";
import TutorLogin from "./components/TutorLogin";
import TutorHome from "./components/TutorHome";
import TutorSpeaking from "./components/TutorSpeaking";
import NativeSpeaker from "./components/NativeSpeaker";
import LeaderboardPage from './components/LeaderBoard';
import Reading from './components/Reading';
import Listening from './components/Listening';
import Writing from './components/Writing';
import SectionContentScreen from './components/SectionContentScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ title: "GOIELTS Learning App" }}
        />
        <Stack.Screen
          style={styles.Heading}
          name="Home"
          component={HomePage}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ title: "Signup Page" }}
        />
        <Stack.Screen
          name="Tutor"
          component={TutorLogin}
          options={{ title: "GOIELTS Learning App" }}
        />
        <Stack.Screen
          name="TutorHome"
          component={TutorHome}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="LeaderBoard"
          component={LeaderboardPage}
          options={{ title: 'LeaderBoard' }}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesPage}
          options={{ title: "CoursesPage" }}
        />
        <Stack.Screen
          name="CourseDetailsPage"
          component={CourseDetailsPage}
          options={({ route }) => ({ title: route.params.courseName })}
        />

        <Stack.Screen
          name="Reading"
          component={Reading}
          options={({ route }) => ({ title: route.params.courseName })}
        />

        <Stack.Screen
          name="Listening"
          component={Listening}
          options={({ route }) => ({ title: route.params.courseName })}
        />

        <Stack.Screen
          name="Writing"
          component={Writing}
          options={({ route }) => ({ title: route.params.courseName })}
        />

        <Stack.Screen
          name="SectionContentScreen"
          component={SectionContentScreen}
          //options={{ title: 'Section Content' }}        />
          options={({ route }) => ({ title: 'Reading Passage' })} />
        <Stack.Screen
          name="NativeSpeaker"
          component={NativeSpeaker}
          options={{ title: "Native Speaker Section" }}
        />
              <Stack.Screen
          name="TutorSpeaking"
          component={TutorSpeaking}
          options={{ title: "Speaking Session" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Heading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
export default App;

