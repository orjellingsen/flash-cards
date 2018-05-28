import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Content, Card, Body, Button, Text, CardItem, Left, Right } from 'native-base'
import { calcPercent } from '../utils/helpers'
import { styles } from './styles'
import CardButton from '../components/CardButton'
import QuizContent from '../components/QuizContent'
import QuizHeader from '../components/QuizHeader'

const initialState = {
  showAnswer: false,
  showScore: false,
  cardNumber: 0,
  card: null,
  correct: 0,
  incorrect: 0,
}
class Quiz extends Component {
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
    } else {
      this.toggleCard()
      this.setState(() => ({
        cardNumber: nextCardNumber,
        card: deck.questions[nextCardNumber],
      }))
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
    this.setState(() => ({
      ...initialState,
      card: this.props.deck.questions[0],
    }))
  }

  redirect = title => {
    const { navigation } = this.props
    navigation.navigate('IndividualDeck', {
      title,
    })
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
                <CardButton
                  success
                  icon="checkmark"
                  actionValue={true}
                  action={this.registerAnswer}
                >
                  Correct
                </CardButton>
                <CardButton danger icon="close" actionValue={false} action={this.registerAnswer}>
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
              </Body>
            </CardItem>
            <CardButton light icon="refresh" action={this.reset}>
              Try again
            </CardButton>
            <CardButton light icon="arrow-back" action={this.redirect} actionValue={deck.title}>
              Back to deck
            </CardButton>
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
