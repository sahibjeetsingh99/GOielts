// AboutGoIELTS.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Go-IELTS</Text>
      <Text style={styles.description}>
        Go-IELTS is your all-in-one IELTS learning app that helps you take practice tests
        online, check your results, and improve your English skills.
      </Text>
      <Text style={styles.subTitle}>Key Features:</Text>
      <Text style={styles.feature}>
        • Practice Test: Take IELTS practice tests with real questions to prepare for the exam.
      </Text>
      <Text style={styles.feature}>
        • Result Checking: Get instant feedback on your test performance and track your progress.
      </Text>
      <Text style={styles.feature}>
        • Leaderboard: Compare your scores with other peers and see where you stand.
      </Text>
      <Text style={styles.feature}>
        • Speaking Test: Connect with native speakers for real-time speaking practice.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default About;
