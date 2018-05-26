import React, { Component, Fragment } from 'react'
import {
  Container,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base'

import { deckStructure, getDecks } from '../utils/api'
import { styles } from './styles'

class DeckList extends Component {
  state = {
    decks: {},
  }
  componentDidMount() {
    getDecks()
      .then(JSON.parse)
      .then(decks => {
        this.setState(() => ({ decks }))
      })
  }
  render() {
    const { navigation } = this.props
    const { decks } = this.state
    return (
      <Content style={styles.content}>
        <Text>Deck List</Text>
        {Object.keys(decks).map(key => (
          <Card key={key}>
            <CardItem
              button={true}
              onPress={() =>
                navigation.navigate('IndividualDeck', { deck: key })
              }
            >
              <Body>
                <Text style={{ alignSelf: 'center' }}>{key}</Text>
              </Body>
            </CardItem>
          </Card>
        ))}
      </Content>
    )
  }
}

export default DeckList
