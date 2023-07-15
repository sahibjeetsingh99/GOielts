import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Rating} from 'react-native-ratings';

const CardWithSlider = () => {
  const rating = 5;
  const [selectedCardIndex1, setSelectedCardIndex1] = useState(0);

  const carouselData123 = [
    {
      id: 1,
      title: 'Andrea Barret',
      rating: '',
      quote:
        'Learning pace is different for everyone, this works for me like a charm.',
    },
    {
      id: 2,
      title: 'Brock Lesnar',
      quote:
        'Learning pace is different for everyone, this works for me like a charm.',
    },
    {
      id: 3,
      title: 'John Cena',
      quote:
        'Learning pace is different for everyone, this works for me like a charm.',
    },
    {
      id: 4,
      title: 'The Rock',
      quote:
        'Learning pace is different for everyone, this works for me like a charm.',
    },
    {
      id: 5,
      title: 'Goldberg',
      quote:
        'Learning pace is different for everyone, this works for me like a charm.',
    },
  ];

  const renderCard123 = ({item}) => {
    return (
      <View style={styles.card123}>
        <Text style={styles.name123}>{item.title}</Text>
        <View style={{alignSelf: 'flex-start'}}>
          <Rating
            type="star"
            startingValue={rating}
            imageSize={20}
            readonly
            ratingColor="#FFC107"
            tintColor="#FFFFFF"
            style={{marginTop: 20, marginLeft: 20}}
          />
        </View>
        <Text style={styles.questions123}>{item.quote}</Text>
      </View>
    );
  };

  const windowWidth = Dimensions.get('window').width;
  const itemHeight = 250; // Adjust the value as per your requirement

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselData123}
        renderItem={renderCard123}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 60} // Adjust the value as per your requirement
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.9}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true} // Enable infinite loop
        loopClonesPerSide={carouselData123.length}
        onSnapToItem={index => setSelectedCardIndex1(index)}
        Style={[styles.slide123, {height: itemHeight}]}
      />
      <View style={styles.paginationContainer123}>
        <Pagination
          dotsLength={carouselData123.length}
          activeDotIndex={selectedCardIndex1}
          dotStyle={styles.paginationDot123}
          inactiveDotStyle={styles.paginationInactiveDot123}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContentContainer: {
    paddingHorizontal: 30,
  },
  slide123: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card123: {
    marginTop: 25,
    width: '100%',
    height: '50.5%',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    elevation: 12,
  },

  paginationDot123: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // marginHorizontal: 8,
    backgroundColor: 'black',
  },
  paginationInactiveDot123: {
    backgroundColor: 'lightgray',
  },
  paginationContainer123: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
  name123: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  questions123: {
    marginTop: 20,
    color: '#000',
    marginLeft: 20,
    width: '70%',
    fontStyle: 'italic',
    fontSize: 16,
  },
});

export default CardWithSlider;
