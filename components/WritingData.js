import React from 'react';
import { View, Text, StyleSheet , ImageBackground } from 'react-native';

const WritingData = ({ route }) => {
  const { taskContent, imageFileName } = route.params;
  const getImageSource = () => {
    switch (imageFileName) {
      case 'Task1-1.png':
        return require('../assets/Task1-1.png');
      case 'Task1-2.png':
        return require('../assets/Task1-2.png');
      case 'Task1-3.png':
        return require('../assets/Task1-3.png');
      default:
        return null;
    }
  };
  const formattedtaskContent = taskContent
  .replace(/\\n/g, '\n')
  .replace(/<br \/>/g, '\n\n');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing</Text>

      <View style={styles.contentContainer}>
      <Text style={styles.sectionContent}>{formattedtaskContent}</Text>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground source={getImageSource()} style={styles.image} />
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
        height: 200,
        width: '100%',
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
  });


export default WritingData;