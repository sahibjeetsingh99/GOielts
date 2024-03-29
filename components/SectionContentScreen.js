import React from 'react';
import { View, Text, StyleSheet,ScrollView,   } from 'react-native';

const SectionContentScreen = ({ route }) => {
  const { sectionContent } = route.params;

  const formattedsectionContent = sectionContent
  .replace(/\\n/g, '\n')
  .replace(/<br \/>/g, '\n\n');

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Passage</Text>

      <View style={styles.contentContainer}>
       <ScrollView>
       <Text style={styles.sectionContent} >{formattedsectionContent}</Text>
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
      flex:1,
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
    sectionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      borderWidth: 2,
      whiteSpace: 'pre-line',
 paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    lineHeight: 24,
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


export default SectionContentScreen;