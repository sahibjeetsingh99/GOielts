import React from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';

const SpeakingData = ({ route }) => {
  const { speakingContent } = route.params;

  const formattedspeakingContent = speakingContent
  .replace(/\\n/g, '\n')
  .replace(/<br \/>/g, '\n\n');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speaking</Text>

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.sectionContent}>{formattedspeakingContent}</Text>
        </ScrollView>
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
      flexGrow: 1,
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
  });


export default SpeakingData;