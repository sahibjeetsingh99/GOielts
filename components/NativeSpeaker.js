import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NativeSpeaker = ({ navigation }) => {
  const [activeSpeakers, setActiveSpeakers] = useState([]);

  const startSession = (speakerNumber) => {
    setActiveSpeakers((prevActiveSpeakers) => [...prevActiveSpeakers, speakerNumber]);
    initiateSessionWithSpeaker(speakerNumber); // Call your own function to initiate the session
    navigation.navigate('Speaking', { speakerNumber }); // Navigate to the SpeakingSession screen
  };

  const endSession = (speakerNumber) => {
    setActiveSpeakers((prevActiveSpeakers) => prevActiveSpeakers.filter((speaker) => speaker !== speakerNumber));
    // Perform any necessary actions to end the session
  };

  const initiateSessionWithSpeaker = (speakerNumber) => {
    // Simulating session initiation with a live speaker
    console.log(`Session started with Native Speaker ${speakerNumber}`);
    setTimeout(() => {
      console.log(`Session ended with Native Speaker ${speakerNumber}`);
      endSession(speakerNumber);
    }, 600000); // Simulating a 10-minute session duration
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
        <Text style={styles.heading}>Native Speaker {speakerNumber}</Text>
        {isActive && <Text style={styles.sessionText}>Session in progress...</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  window: {
    width: '100%',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#9768D9',
    borderRadius: 8,
    elevation: 2,
  },
  activeWindow: {
    backgroundColor: '#9768D9',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sessionText: {
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default NativeSpeaker;
