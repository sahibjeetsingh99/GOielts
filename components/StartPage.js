import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
//import start from '../assets/start.png'
import { Ionicons } from "@expo/vector-icons";
// import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
//import google_logo  from '../assets/google_logo.png';

const StartPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // useEffect(() => {
  //   // Initialize Google Sign-In
  //   GoogleSignin.configure({
  //     webClientId: '157569705591-0qcn5ealk7jc1dvkaoo493ds6aedgra0.apps.googleusercontent.com',
  //   });
  // }, []);

  //login code
  const handleLogin = () => {
    const emailRegex = /\S+@\S+\.\S+/; // Regex pattern to validate email format
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log("Login error:", error);
          alert("Invalid email or password. Please enter valid credentials.");
        });
    } else {
      alert("Invalid email or password. Please enter valid credentials.");
    }
  };

  const handleSignup = () => {
    // Navigate to SignupPage
    navigation.navigate("Signup");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.heading}>Welcome Back We Missed You!</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image
        source={start} 
        style={styles.image}
      />  */}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="#777"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>or</Text>
        <View style={styles.line} />
      </View>
  
      <View style={styles.container2}>
        <Text style={styles.text1}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignup} style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tutor")}
          style={styles.linkButton}
        >
          <Text style={styles.linkButtonText}>Click here to Login as Tutor!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    width: "100%",
    height: 100,
    backgroundColor: "#9768D9",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    alignSelf: "center",
  },
  heading: {
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "left",
    fontSize: 30,
    fontWeight: 500,
    color: "white",
  },
  input: {
    width: "75%",
    borderRadius: 100,
    height: 40,
    borderWidth: 1,
    alignSelf: "center",
    color: "grey",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginBottom: 10,
    marginTop: "30%",
    paddingLeft: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "13%",
    marginBottom: "4%",
    marginTop: "5%",
  },
  passwordInput: {
    width: "85%",
    borderRadius: 100,
    height: 40,
    borderWidth: 1,
    alignSelf: "center",
    color: "grey",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  eyeIconContainer: {
    paddingHorizontal: 10,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "50%",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  text: {
    marginHorizontal: 10,
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#DB4437",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "60%",
    alignSelf: "center",
  },
  button: {
    marginBottom: 10,
    backgroundColor: "#9768D9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "30%",
    alignSelf: "center",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  linkButton: {
    padding: 5,
  },
  text1: {
    color: "#9768D9",
    fontSize: 16,
  },
  linkButtonText: {
    color: "#9768D9",
    fontWeight: 500,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
  },
  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    resizeMode: "contain", // Choose the appropriate resizeMode option
  },
  // googleSignInButton: {
  //   width: 192,
  //   height: 48,
  //   marginTop: 10,
  // }
});

export default StartPage;
