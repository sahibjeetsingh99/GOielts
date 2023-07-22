

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , TouchableOpacity ,ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const ListeningData = ({ route }) => {
  const { listeningContent, audioFile } = route.params; 

  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const formattedlisteningContent = listeningContent
  .replace(/\\n/g, '\n')
  .replace(/<br \/>/g, '\n\n');
  
  // Function to fetch and play the audio file
  const fetchAndPlayAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFile);
      setAudio(sound);
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error fetching or playing audio:', error);
    }
  };

  // Function to handle play button press
  const handlePlayButtonPress = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      resumeAudio();
    }
  };

  // Function to pause the audio
  const pauseAudio = async () => {
    if (audio) {
      await audio.pauseAsync();
      setIsPlaying(false);
    }
  };

  // Function to resume the audio
  const resumeAudio = async () => {
    if (audio) {
      await audio.playAsync();
      setIsPlaying(true);
    }
  };

  // Function to update playback status
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && status.isPlaying) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  // Fetch and play the audio file when the component mounts
  useEffect(() => {
    fetchAndPlayAudio();

    // Clean up the audio when the component unmounts
    return () => {
      if (audio) {
        audio.unloadAsync();
      }
    };
  }, []);

  // Function to convert milliseconds to display time (00:00 format)
  const formatTime = (millis) => {
    const seconds = Math.floor(millis / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionContent}>{formattedlisteningContent}</Text>
        </View>
        </ScrollView>
        <View style={styles.audioControls}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlayButtonPress}

          >
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.timeText}>
            {formatTime(position)} / {formatTime(duration)}
          </Text>
          <View style={styles.progressBar}>
          <View
            style={{
              flex: position / (duration || 1), 
              backgroundColor: 'gray',
            }}
          />
        </View>
        </View>
      </View>
    
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 16,
    },
    scrollContainer: {
      flexGrow:1,
        padding: 16,
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
    
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    imageContainer: {
      width: '100%',
      height: 510,
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'fit',
      marginBottom: 16,
      
      
    },
    sectionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      borderWidth: 2,
      whiteSpace: 'pre-line',

    },
    sectionName: {
      flex: 1,
      marginRight: 8,
    },
     title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
        },
     contentContainer: {
          flex: 1,
          width: '100%',
        },
     additionalContent: {
          marginTop: 16,
        },

        audioControls: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
        },
        playButton: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9768D9',
          borderRadius: 50,
          width: 60,
          height: 60,
        },
        timeText: {
          marginLeft: 8,
        },
        progressBar: {
          flex: 1,
          flexDirection: 'row',
          height: 4,
          marginLeft: 8,
          backgroundColor: 'lightgray',
        },
  });


export default ListeningData;
