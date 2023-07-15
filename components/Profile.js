import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const data = [
  {
    id: 1,
    title: 'Unlock over 30 IELTS tests',
    desc: 'Practice with 3000 useful questions',
    imageUrl: require('../assets/boy.jpeg'),
  },
  {
    id: 2,
    title: 'Unlock over 30 IELTS tests',
    desc: 'Perk up the results day by day, increase points unexpectedly',
    imageUrl: require('../assets/girl.jpeg'),
  },
  {
    id: 2,
    title: 'Increase 30 IELTS points',
    desc: 'Practice with 3000 useful questions',
    imageUrl: require('../assets/boy.jpeg'),
  },
  // Add more items as needed
];

const {width} = Dimensions.get('window');

const CarouselScreen = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({item}) => {
    return (
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image source={item.imageUrl} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDesc}>{item.desc}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        loop={true}
        autoplay={true}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
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
  itemContainer: {
    // backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginHorizontal: 12,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
  },
  itemDesc: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  paginationContainer: {
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // marginHorizontal: 8,
    backgroundColor: 'black',
  },
  paginationInactiveDot: {
    backgroundColor: 'lightgray',
  },
});

export default CarouselScreen;
