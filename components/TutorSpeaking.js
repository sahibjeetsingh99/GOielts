import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const TutorSpeaking = () => {
  const [activeSpeakers, setActiveSpeakers] = useState([]);

  const startSession = (speakerNumber) => {
    setActiveSpeakers((prevActiveSpeakers) => [
      ...prevActiveSpeakers,
      speakerNumber,
    ]);
    initiateSessionWithSpeaker(speakerNumber); // Call your own function to initiate the session
    redirectToGoogleMeet(speakerNumber); // Redirect to Google Meet session
  };

  const endSession = (speakerNumber) => {
    setActiveSpeakers((prevActiveSpeakers) =>
      prevActiveSpeakers.filter((speaker) => speaker !== speakerNumber)
    );
    // Perform any necessary actions to end the session
  };

  const initiateSessionWithSpeaker = (speakerNumber) => {
    // Simulating session initiation with a live speaker
    console.log(`Session started in the Room ${speakerNumber}`);
    setTimeout(() => {
      console.log(`Session ended in the Room ${speakerNumber}`);
      endSession(speakerNumber);
    }, 600000); // Simulating a 10-minute session duration
  };

  const redirectToGoogleMeet = (speakerNumber) => {
    const googleMeetLinks = {
      1: "https://meet.google.com/dwt-evrp-rwv", // Replace with your actual Google Meet URLs
      2: "https://meet.google.com/efm-aqvp-vzc",
      3: "https://meet.google.com/hwb-hjyc-kxj",
      4: "https://meet.google.com/fer-cpnc-zmy",
      5: "https://meet.google.com/vqz-hznx-kng",
      6: "https://meet.google.com/psi-kdvw-cfa",
    };
    const googleMeetLink = googleMeetLinks[speakerNumber];
    Linking.openURL(googleMeetLink);
  };

  const renderSpeakerWindow = (speakerNumber) => {
    const isActive = activeSpeakers.includes(speakerNumber);
    const isDisabled = isActive;
    return (
      <TouchableOpacity
        style={[styles.window, isActive && styles.activeWindow]}
        onPress={() => {
          if (!isActive) {
            startSession(speakerNumber);
          }
        }}
        activeOpacity={0.7}
        disabled={isDisabled}
      >
        <Text style={styles.heading}>Join Room {speakerNumber}</Text>
        {isActive && (
          <Text style={styles.sessionText}>Session in progress...</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          Welcome to real-time Speaking Session!</Text>
          <Text style={styles.content}>Join to start session with the student!</Text>
      </View>
      {renderSpeakerWindow(1)}
      {renderSpeakerWindow(2)}
      {renderSpeakerWindow(3)}
      {renderSpeakerWindow(4)}
      {renderSpeakerWindow(5)}
      {renderSpeakerWindow(6)}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  window: {
    width: "100%",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#9768D9",
    borderRadius: 8,
    elevation: 2,
  },
  activeWindow: {
    backgroundColor: "#9768D9",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  sessionText: {
    fontStyle: "italic",
    color: "#fff",
  },
});

export default TutorSpeaking;
