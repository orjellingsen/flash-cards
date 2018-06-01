import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Content, Card, Body, Text, CardItem } from 'native-base'
import {
  calcPercent,
  redirect,
  clearLocalNotifications,
  setLocalNotification,
} from '../utils/helpers'
import CardButton from '../components/CardButton'
import QuizContent from '../components/QuizContent'
import QuizHeader from '../components/QuizHeader'
import Quote from '../components/Quote'

const initialState = {
  showAnswer: false,
  showScore: false,
  cardNumber: 0,
  card: null,
  correct: 0,
}
class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.func.isRequired,
    deck: PropTypes.shape({
      title: PropTypes.string,
      questions: PropTypes.arrayOf({}),
    }).isRequired,
  }

  state = initialState

  static getDerivedStateFromProps({ deck }, { card, cardNumber }) {
    if (card === null) {
      return { card: deck.questions[cardNumber] }
    }
    return null
  }

  toggleCard = () => {
    this.setState(() => ({ showAnswer: !this.state.showAnswer }))
  }

  nextQuestion = () => {
    const { cardNumber } = this.state
    const { deck } = this.props
    const nextCardNumber = cardNumber + 1

    if (nextCardNumber === deck.length) {
      this.setState(() => ({ showScore: true }))
      clearLocalNotifications().then(setLocalNotification)
    } else {
      this.toggleCard()
      this.setState(() => ({
        cardNumber: nextCardNumber,
        card: deck.questions[nextCardNumber],
      }))
    }
  }

  registerAnswer = answer => {
    if (answer === true) {
      this.setState(() => ({ correct: this.state.correct + 1 }))
    }
    this.nextQuestion()
  }

  resetQuiz = () => {
    this.setState(() => ({
      ...initialState,
      card: this.props.deck.questions[0],
    }))
  }

  redirectToDeck = title => {
    redirect(this.props.navigation)({ title, path: 'IndividualDeck' })
  }

  render() {
    const { card, cardNumber, showAnswer, showScore, correct } = this.state
    const { deck } = this.props
    const totalCards = deck.questions.length

    return (
      <Content padder>
        {card && !showScore ? (
          <Card padder>
            {showAnswer ? (
              <Fragment>
                <QuizHeader question={cardNumber} questionTotal={totalCards}>
                  Answer
                </QuizHeader>
                <QuizContent>{card.answer}</QuizContent>
                <CardButton light icon="help-circle" action={this.toggleCard}>
                  Show Question
                </CardButton>
                <CardButton success icon="checkmark" actionValue action={this.registerAnswer}>
                  Correct
                </CardButton>
                <CardButton danger icon="close" action={this.registerAnswer}>
                  Incorrect
                </CardButton>
              </Fragment>
            ) : (
              <Fragment>
                <QuizHeader question={cardNumber} questionTotal={totalCards}>
                  Question
                </QuizHeader>
                <QuizContent>{card.question}</QuizContent>
                <CardButton light icon="information-circle" action={this.toggleCard}>
                  Show Answer
                </CardButton>
              </Fragment>
            )}
          </Card>
        ) : (
          <Card>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text>Score</Text>
                <Text style={{ fontSize: 35 }}>{calcPercent(correct, totalCards)}%</Text>
                <Quote />
              </Body>
            </CardItem>
            <CardButton light icon="refresh" action={this.resetQuiz}>
              Try again
            </CardButton>
            <CardButton
              light
              icon="arrow-back"
              action={this.redirectToDeck}
              actionValue={deck.title}
            >
              Back to deck
            </CardButton>
          </Card>
        )}
      </Content>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.title],
  }
}

export default connect(mapStateToProps)(Quiz)
