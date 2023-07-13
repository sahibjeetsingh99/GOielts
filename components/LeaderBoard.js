import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const leaderboardData = [
  { id: 1, username: ' Sahib', score: 9 + ' Bands' },
  { id: 2, username: ' Aryan', score: 9 + ' Bands' },
  { id: 3, username: ' Suril', score: 8.5 + ' Bands' },
  { id: 4, username: ' JayKumar', score: 8 + ' Bands' },
  { id: 5, username: ' Jaspreet', score: 8 + ' Bands' },
  { id: 6, username: ' Mark', score: 7.5 + ' Bands' },
  { id: 7, username: ' Emma', score: 7.5 + ' Bands' },
  { id: 8, username: ' Oliver', score: 6.5 + ' Bands' },
  { id: 9, username: ' Sophia', score: 6.5 + ' Bands' },
  { id: 10, username: ' Liam', score: 6 + ' Bands' },
  // Add more leaderboard data as needed
];

const LeaderboardPage = () => {
  const renderLeaderboardItem = ({ item, index }) => (
    <View style={styles.leaderboardItem}>
      {index === 0 || 1 ? (
        <FontAwesome name="user" size={16} color="#FFD700" style={styles.icon} />
      ) : (
        <Text style={styles.rank}>{index + 1}</Text>
      )}
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );
      

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GoIELTS Leaderboard</Text>
      <FlatList
      
        data={leaderboardData}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
    color: '#1D1D1D',
    padding: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#9768D9',
    borderRadius: 8,
    elevation: 2,
  },
  rank: {
    width: 32,
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1D1D1D',
  },
  username: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    color: '#1D1D1D',
  },
  score: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1D1D1D',
  },
  list: {
    width: '100%',
  },
  icon: {
    color: 'black'
  }
});

export default LeaderboardPage;
