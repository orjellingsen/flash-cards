import React, { Component, Fragment } from 'react'
import { AsyncStorage } from 'react-native'
import { Text, Content, Card, SwipeRow, Button, Icon, H2 } from 'native-base'
import { getDecks, removeDeck } from '../utils/api'
import Deck from '../components/Deck'
import { receiveDecks, deleteDeck } from '../actions'
import { connect } from 'react-redux'

class DeckList extends Component {
  state = {
    decks: null,
  }

  componentDidMount() {
    getDecks().then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  navigate = (path, title) => {
    this.props.navigation.navigate(path, { title })
  }

  removeDeck = title => {
    removeDeck(title).then(_ => this.props.dispatch(deleteDeck(title)))
  }

  render() {
    const { decks } = this.props
    return (
      <Content padder>
        <H2>All Decks:</H2>
        {decks ? (
          Object.entries(decks).map(([title, { questions = [] }]) => {
            return (
              <Card key={title}>
                <SwipeRow
                  rightOpenValue={-75}
                  right={
                    <Button danger onPress={() => this.removeDeck(title)}>
                      <Icon name="trash" />
                    </Button>
                  }
                  body={
                    <Deck
                      navigate={this.navigate}
                      path="IndividualDeck"
                      title={title}
                      questions={questions.length}
                    />
                  }
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

function mapStateToProps(decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckList)
