import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const leaderboardData = [
  { id: 1, username: ' Sahib', score: '9 Bands' },
  { id: 2, username: ' Aryan', score: '9 Bands' },
  { id: 3, username: ' Suril', score: '8.5 Bands' },
  { id: 4, username: ' JayKumar', score: '8 Bands' },
  { id: 5, username: ' Jaspreet', score: '8 Bands' },
  { id: 6, username: ' Mark', score: '7.5 Bands' },
  { id: 7, username: ' Emma', score: '7.5 Bands' },
  { id: 8, username: ' Oliver', score: '6.5 Bands' },
  { id: 9, username: ' Sophia', score: '6.5 Bands' },
  { id: 10, username: ' Liam', score: '6 Bands' },
  // Add more leaderboard data as needed
];
const LeaderboardPage = () => {
  const renderLeaderboardItem = ({ item }) => (
    <View style={styles.leaderboardItem}>
      {item.rank === 1 ? (
        <View style={[styles.iconContainer, styles.no1IconContainer]}>
          <FontAwesome name="star" size={24} color="#FFD700" style={styles.starIcon} />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={16} color="#FFD700" style={styles.icon} />
        </View>
      )}
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GoIELTS Leaderboard</Text>
      </View>
      <FlatList
        data={leaderboardData.map((item, index) => ({ ...item, rank: index + 1 }))}
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
    backgroundColor: '#F2F2F2',
    padding: 16,
  },
  header: {
    backgroundColor: '#9768D9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
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
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  no1IconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starIcon: {
    position: 'absolute',
    top: 2,
    right: 24,
  },

  icon: {
    color: '#FFD700',
  },
});

export default LeaderboardPage;