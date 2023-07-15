import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Reading from './Reading';


  const HomePage = ({ navigation }) => {
    const navigateToCourseDetails = (courseName) => {
      navigation.navigate('CourseDetailsPage', { courseName });
    };
  
    const navigateToReading = (courseName) => {
      navigation.navigate('Reading', { courseName });
    };
  
    const navigateToListening = (courseName) => {
      navigation.navigate('Listening', { courseName });
    };
  
    const navigateToWriting = (courseName) => {
      navigation.navigate('Writing', { courseName });
    };
 /* const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w7LFjyOofep4l821ygej8p55mv2V7ia_pA&usqp=CAU',
  },
  {
    id: 2,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMR28TiQXUO9e-LIO4AwzbcwxNMJUZeSX_w&usqp=CAU',
  },
  {
    id: 3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRib_dIjPE66Zj9SRF2eC6plsnCMATsAOetxw&usqp=CAU',
  },
];*/

/*const renderItem = ({item}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 0,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={{uri: item.url}}  style={{width: 200, height: 100}} />
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
};*/

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Prepare & take tests!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Choose your section</Text>
        <TouchableOpacity
          style={styles.courseButton1}
          onPress={() => navigateToReading('IELTS Reading')}
        >
          <Icon name="book" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Reading</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseButton2}
          onPress={() => navigateToListening('IELTS Listening')}
        >
          <Icon name="headphones" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Listening</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.courseButton3}
          onPress={() => navigateToWriting('IELTS Writing')}
        >
          <Icon name="pencil" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Writing</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.courseButton4}
          onPress={() => navigateToSpeaking('IELTS Speaking')}
        >
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Speaking</Text>
        </TouchableOpacity>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={20} color="#fff" style={styles.footerIcon} />
            <Text style={styles.footerButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}
          onPress={() => navigation.navigate('PremiumPage')}>
          <Icon name="diamond" size={20} color="#fff" style={styles.footerIcon} />
            <Text style={styles.footerButtonText}>Premium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}
          onPress={() => navigation.navigate('Settings')}
          >
          <Icon name="gear" size={20} color="#fff" style={styles.footerIcon} />
            <Text style={styles.footerButtonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}
          onPress={() => navigation.navigate('LeaderBoard')}
          >
          <Icon name="trophy" size={20} color="#fff" style={styles.footerIcon} />
            <Text style={styles.footerButtonText}>LeaderBoard</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginTop: 10,
  },
  headerTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  contentContainer: {
    backgroundColor: 'lightgrey',
    padding: 30,
    margin: 0,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  courseButton1: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60 ,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  courseButton2: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  courseButton3: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  courseButton4: {
    backgroundColor: '#9768D9',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
    fontSize: 30,
    textAlign: 'center',
    padding: 5
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9768D9',
    height: 70,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
  footerButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  footerIcon:{
    marginRight: 10,
    fontSize: 25,
    textAlign: 'center',
    padding: 5
  },
});

export default HomePage;
