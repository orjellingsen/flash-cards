import React, { Component, Fragment } from 'react'
import { AsyncStorage } from 'react-native'
import { Text, Content, Card } from 'native-base'
import { getDecks } from '../utils/api'
import { styles } from './styles'
import Deck from '../components/Deck'

class DeckList extends Component {
  state = {
    decks: null,
  }

  componentDidMount() {
    getDecks().then(decks => decks && this.setState(() => ({ decks })))
  }

  navigate = (path, title) => {
    this.props.navigation.navigate(path, { title })
  }

  render() {
    const { decks } = this.state
    return (
      <Content style={styles.content}>
        <Text>Deck List</Text>
        {decks ? (
          Object.entries(decks).map(([key, value]) => {
            const questions = value.questions ? value.questions.length : 0
            return (
              <Card key={key}>
                <Deck
                  navigate={this.navigate}
                  path="IndividualDeck"
                  title={key}
                  questions={questions}
                />
              </Card>
            )
          })
        ) : (
          <Text>No decks to display</Text>
        )}
      </Content>
    )
  }
}

export default DeckList
