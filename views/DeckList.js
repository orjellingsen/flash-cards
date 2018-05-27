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
        <Text style={styles.header}>All Decks:</Text>
        {decks ? (
          Object.entries(decks).map(([title, { questions }]) => {
            return (
              <Card key={title}>
                <Deck
                  navigate={this.navigate}
                  path="IndividualDeck"
                  title={title}
                  questions={questions.length}
                />
              </Card>
            )
          })
        ) : (
          <Text>There are no decks to display. Please add a new deck.</Text>
        )}
      </Content>
    )
  }
}

export default DeckList
