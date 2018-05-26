import React, { Component } from 'react'
import { styles } from './styles'
import { Container, Button, Text, Content } from 'native-base'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck,
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <Content>
        <Text>Individual Deck</Text>
        <Button block onPress={() => navigation.navigate('NewQuestion')}>
          <Text>Add Question</Text>
        </Button>
        <Button block onPress={() => navigation.navigate('Quiz')}>
          <Text>Start Quiz</Text>
        </Button>
      </Content>
    )
  }
}

export default IndividualDeck
