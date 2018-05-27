import React, { Component, Fragment } from 'react'
import { styles } from './styles'
import { connect } from 'react-redux'
import {
  Content,
  Card,
  Body,
  Button,
  Text,
  CardItem,
  Left,
  Right,
} from 'native-base'
import CardButton from '../components/CardButton'
import QuizContent from '../components/QuizContent'
import QuizHeader from '../components/QuizHeader'
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
  state = {
    showAnswer: false,
    answers: {},
    question: 1,
  }

  toggleCard = () => {
    this.setState(() => ({ showAnswer: !this.state.showAnswer }))
  }

  render() {
    const { showAnswer, question } = this.state
    const { deck } = this.props
    const card = deck.questions[0]
    const questionTotal = deck.questions.length
    return (
      <Content style={styles.content}>
        {card && (
          <Card style={{ padding: 20 }}>
            {showAnswer ? (
              <Fragment>
                <QuizHeader question={question} questionTotal={questionTotal}>
                  Answer
                </QuizHeader>
                <QuizContent>{card.answer}</QuizContent>
                <CardButton light icon="help-circle" action={this.toggleCard}>
                  Show Question
                </CardButton>
                <CardButton
                  success
                  icon="checkmark-circle"
                  action={this.registerAnswer(true)}
                >
                  Correct
                </CardButton>
                <CardButton
                  danger
                  icon="close-circle"
                  action={this.registerAnswer(false)}
                >
                  Incorrect
                </CardButton>
              </Fragment>
            ) : (
              <Fragment>
                <QuizHeader question={question} questionTotal={questionTotal}>
                  Question
                </QuizHeader>
                <QuizContent>{card.question}</QuizContent>
                <CardButton
                  light
                  icon="information-circle"
                  action={this.toggleCard}
                >
                  Show Answer
                </CardButton>
              </Fragment>
            )}
          </Card>
        )}
      </Content>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params
  return {
    deck: decks[title],
  }
}

export default connect(mapStateToProps)(Quiz)
