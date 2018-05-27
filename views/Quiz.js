import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
/*
* Quiz View
  * displays a card question
  * an option to view the answer (flips the card)
  * a "Correct" button
  * an "Incorrect" button
  * the number of cards left in the quiz
  * Displays the percentage correct once the quiz is complete
*/

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz
