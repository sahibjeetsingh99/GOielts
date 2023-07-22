import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const RadioButton = ({ value, onPress, selected }) => {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity style={styles.radioButton} onPress={handlePress}>
      {selected ? <View style={styles.radioDot} /> : null}
    </TouchableOpacity>
  );
};

const questions = [
  {
    question: 'The greatest outcome of the discovery of the reaction principle was that',
    options: [
      'rockets could be propelled into the air.',
      'space travel became a reality.',
      'a major problem had been solved.',
      'bigger rockets were able to be built.',
    ],
    correctAnswer: 1,
  },
  {
    question: 'According to the text, the greatest progress in rocket technology was made',
    options: [
      'from the tenth to the thirteenth centuries.',
      'from the seventeenth to the nineteenth centuries.',
      'from the early nineteenth to the late nineteenth century.',
      'from the late nineteenth century to the present day.',
    ],
    correctAnswer: 2,
  },
  {
    question: 'The invention of rockets is linked inextricably with the invention of which substance?',
    options: [
      'Saltpetre',
      'Charcoal',
      'Sulphur',
      'Black powder',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Who were the first to use rockets as a weapon of war?',
    options: [
      'Europeans in the eighteenth century',
      'Americans in the mid-nineteenth century',
      'Indians in the late eighteenth century',
      'Chinese in the thirteenth century',
    ],
    correctAnswer: 2,
  },
];

const SampleTest = () => {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedAnswers.forEach((selectedAnswer, index) => {
      if (selectedAnswer === questions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const isAllQuestionsAnswered = selectedAnswers.every((selectedAnswer) => selectedAnswer !== null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option, optionIndex) => (
            <TouchableOpacity
              key={optionIndex}
              style={styles.optionContainer}
              onPress={() => handleAnswer(index, optionIndex)}
            >
              <RadioButton
                value={optionIndex}
                onPress={(value) => handleAnswer(index, value)}
                selected={selectedAnswers[index] === optionIndex}
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {isAllQuestionsAnswered && (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.scoreText}>
        Your IELTS Score: {score} / {questions.length}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    minHeight: 1100,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 8,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#6200ee',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6200ee',
  },
  submitButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default SampleTest;
