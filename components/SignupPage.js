import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
//import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { set, ref } from 'firebase/database';
import { auth, database } from '../firebase';

const SignupPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [reason, setReason] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Select a reason" },
    { key: "2", value: "For higher studies" },
    { key: "3", value: "Job opportunities" },
    { key: "4", value: "Immigration and visa" },
    { key: "5", value: "Validating English language proficiency" },
    { key: "6", value: 'Personal growth"' },
  ];

  const handleSignup = () => {
    const emailRegex = /\S+@\S+\.\S+/; // Regex pattern to validate email format
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          })
            .then(() => {
              set(ref(database, `users/${user.uid}`), {
                firstName,
                lastName,
                email,
              });

              navigation.navigate("Home");
              alert("Signup successful!");
            })
            .catch((error) => {
              console.log("Error updating user details:", error);
              alert("User already exists or unknown error. Please try again.");
            });
        })
        .catch((error) => {
          console.log("Signup error:", error);
          alert("Error occurred during signup. Please try again.");
        });
    } else {
      alert("Invalid email or password. Please enter valid credentials.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.heading}>Sign Up and Start Your Journey Now!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
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
            style={styles.eye}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Why are you preparing for IELTS test?</Text>
      <View
        style={styles.pickerIOS}
        //selectedValue={reason}
        //onValueChange={(itemValue) => setReason(itemValue)}
      >
        <SelectList data={data} setSelected={setSelected} />
        {/* <Picker.Item label="Select a reason" value="" />
        <Picker.Item label="For higher studies" value="higherStudies" />
        <Picker.Item label="Job opportunities " value="jobs" />
        <Picker.Item label="Immigration and visa" value="Immigration" />
        <Picker.Item label="Validating English language proficiency." value="english" />
        <Picker.Item label="Personal growth" value="growth" /> */}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    height: 850,
  },
  container1: {
    width: "100%",
    height: 100,
    backgroundColor: "#9768D9",
    marginBottom: "5%",
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
    marginBottom: 30,
    paddingLeft: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  passwordContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    width: "87%",
    marginLeft: "13%",
    marginBottom: "4%",
    marginTop: "-5%",
  },
  passwordInput: {
    width: "86%",
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
  eye: {
    paddingLeft: 5,
  },
  label: {
    alignSelf: "center",
    marginBottom: 5,
    color: "#9768D9",
    fontSize: 16,
  },
  pickerIOS: {
    width: "90%",
    height: 40,
    borderWidth: 0,
    borderColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
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
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
  },
});

export default SignupPage;
