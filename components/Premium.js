import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Profile from '../components/Profile';
import CardWithSlider from '../components/CardWithSlider'

const windowWidth = Dimensions.get('window').width;
const itemHeight = 250; // Adjust the value as per your requirement

const CardSlider = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCardPress = index => {
    setSelectedCardIndex(index);
  };

  const carouselData = [
    {id: 1, duration: 'Longlife', price: '$6.99', title: 'Best Choice'},
    {id: 2, duration: 'Monthly', price: '$4.49', title: 'Efficiency test'},
    {id: 3, duration: 'Weekly', price: '$1.99', title: 'Efficiency test'},
    {id: 4, duration: 'Yearly', price: '$8.49', title: 'Conquer IELTS'},
  ];

  const renderCard = ({item, index}) => {
    const isSelected = index === selectedCardIndex;

    return (
      <View
        style={[styles.card, isSelected && styles.selectedCard]}
        // onPress={() => handleCardPress(index)}
      >
        <View style={{marginLeft: 16}}>
          <Text style={{color: '#ACACAC', marginTop: 10}}>{item.duration}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 12,
              fontSize: 18,
              color: '#000',
            }}>
            {item.price}
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontSize: 16,
              fontStyle: 'italic',
              color: '#000',
            }}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleCardPress(index)}
          style={[styles.select, isSelected && styles.selectedButton]}>
          <Text style={{fontSize: 15, color: 'white'}}>Select</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={{backgroundColor: '#F2F1F6'}}>
      <Profile />
      <View style={styles.container}>
        <Carousel
          data={carouselData}
          renderItem={renderCard}
          sliderWidth={windowWidth}
          itemWidth={windowWidth - 60} // Adjust the value as per your requirement
          inactiveSlideOpacity={0.7}
          inactiveSlideScale={0.9}
          loop={true}
          loopClonesPerSide={carouselData.length}
          contentContainerCustomStyle={styles.sliderContentContainer}
          slideStyle={[styles.slide, {height: itemHeight}]}
        />

        <Text
          style={{
            color: '#695E80',
            alignSelf: 'center',
            fontSize: 16,
          }}>
          Restore Purchases
        </Text>

        <TouchableOpacity style={styles.subscribe}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
            Subscribe Now
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text>Terms of use</Text>
          <Text>Privacy Policy</Text>
        </View>

        <View style={styles.details}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Text style={styles.basic}>Basic</Text>
            <Text style={styles.basic}>Premium</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={styles.questions}>
              Constantly updated new exam question
            </Text>
            <Image
              style={{marginLeft: 22, resizeMode: 'contain'}}
              source={require('../assets/correct.jpeg')}
            />
            <Image
              style={{marginLeft: 38, resizeMode: 'contain'}}
              source={require('../assets/correct.jpeg')}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={styles.questions}>Unlock to get over 30 tests</Text>
            <Image
              style={{marginLeft: 22, resizeMode: 'contain'}}
              source={require('../assets/cross.jpeg')}
            />
            <Image
              style={{marginLeft: 38, resizeMode: 'contain'}}
              source={require('../assets/correct.jpeg')}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 17}}>
            <Text style={styles.questions}>Remove all ads</Text>
            <Image
              style={{marginLeft: 22, resizeMode: 'contain'}}
              source={require('../assets/cross.jpeg')}
            />
            <Image
              style={{marginLeft: 38, resizeMode: 'contain'}}
              source={require('../assets/correct.jpeg')}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 17}}>
            <Text style={styles.questions}>Prcatice much more skills</Text>
            <Image
              style={{marginLeft: 22, resizeMode: 'contain'}}
              source={require('../assets/cross.jpeg')}
            />
            <Image
              style={{marginLeft: 38, resizeMode: 'contain'}}
              source={require('../assets/correct.jpeg')}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 17}}>
            <Text style={styles.questions}>Numbers of practice tests</Text>
            <Text style={{marginLeft: 35, fontSize: 15, color: '#000'}}>2</Text>
            <Text style={{marginLeft: 53, fontSize: 15, color: '#000'}}>
              30
            </Text>
          </View>
        </View>

        <Text style={styles.review}>Review App</Text>
      </View>
      <View style={{paddingBottom: 90}}>
        <CardWithSlider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContentContainer: {
    paddingHorizontal: 30,
  },
  subscribe: {
    marginHorizontal: 32,
    paddingVertical: 17,
    marginTop: 16,
    backgroundColor: '#807AFE',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 160,
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginBottom: 75,
  },
  selectedCard: {
    backgroundColor: '#918DFC',
  },
  selectedButton: {
    backgroundColor: '#ACACAC',
  },
  select: {
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 20,
    backgroundColor: '#7F7AFB',
    position: 'absolute',
    bottom: -15,
    zIndex: 1,
    alignSelf: 'center',
  },

  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '90%',
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    // backgroundColor: 'red',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginTop: 10,
    alignSelf: 'center',
  },
  basic: {
    fontWeight: '500',
    color: '#000',
    marginRight: 15,
    fontSize: 16,
  },
  questions: {
    color: '#000',
    marginLeft: 10,
    width: '55%',
    fontStyle: 'italic',
    fontSize: 16,
  },
  review: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    color: '#000',
    fontWeight: '500',
  },
});

export default CardSlider;
