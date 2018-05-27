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
const initialState = {
  showAnswer: false,
  questionCount: 1,
  correct: 0,
  incorrect: 0,
  showScore: false,
}
class Quiz extends Component {
  state = initialState

  toggleCard = () => {
    this.setState(() => ({ showAnswer: !this.state.showAnswer }))
  }

  nextQuestion = () => {
    if (this.state.questionCount === this.props.deck.length) {
      this.setState(() => ({ showScore: true }))
    } else {
      this.toggleCard()
      this.setState(() => ({ questionCount: this.state.questionCount + 1 }))
    }
  }

  registerAnswer = answer => {
    this.setState(
      () =>
        answer === true
          ? { correct: this.state.correct + 1 }
          : { incorrect: this.state.incorrect + 1 }
    )
    this.nextQuestion()
  }

  reset = () => {
    this.setState(() => initialState)
  }

  toHome = title => {
    const { navigation } = this.props
    navigation.navigate('IndividualDeck', {
      title,
    })
  }

  render() {
    const { showAnswer, questionCount, showScore } = this.state
    const { deck } = this.props
    const card = deck.questions[questionCount - 1]
    const questionTotal = deck.questions.length
    return (
      <Content style={styles.content}>
        {card && !showScore ? (
          <Card style={{ padding: 20 }}>
            {showAnswer ? (
              <Fragment>
                <QuizHeader
                  question={questionCount}
                  questionTotal={questionTotal}
                >
                  Answer
                </QuizHeader>
                <QuizContent>{card.answer}</QuizContent>
                <CardButton light icon="help-circle" action={this.toggleCard}>
                  Show Question
                </CardButton>
                <CardButton
                  success
                  icon="checkmark-circle"
                  actionValue={true}
                  action={this.registerAnswer}
                >
                  Correct {this.state.correct}
                </CardButton>
                <CardButton
                  danger
                  icon="close-circle"
                  actionValue={false}
                  action={this.registerAnswer}
                >
                  Incorrect {this.state.incorrect}
                </CardButton>
              </Fragment>
            ) : (
              <Fragment>
                <QuizHeader
                  question={questionCount}
                  questionTotal={questionTotal}
                >
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
        ) : (
          <Card>
            <CardItem>
              <Body>
                <Text>Score:</Text>
                <Text>Correct: {this.state.correct}</Text>
                <Text>Incorrect: {this.state.incorrect}</Text>
                <CardButton
                  danger
                  icon="information-circle"
                  action={this.reset}
                >
                  Reset Quiz
                </CardButton>
                <CardButton
                  light
                  icon="information-circle"
                  action={this.toHome}
                  actionValue={deck.title}
                >
                  Back to deck
                </CardButton>
              </Body>
            </CardItem>
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
