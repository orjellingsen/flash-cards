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
      <Content style={styles.content}>
        <Button
          style={styles.button}
          block
          light
          onPress={() =>
            navigation.navigate('NewQuestion', {
              title: navigation.state.params.deck,
            })
          }
        >
          <Text>Add Question</Text>
        </Button>
        <Button
          style={styles.button}
          block
          light
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text>Start Quiz</Text>
        </Button>
      </Content>
    )
  }
}

export default IndividualDeck
