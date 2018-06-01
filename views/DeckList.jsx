import React, { Component } from 'react'
import { Text, Content, Card, SwipeRow, Button, Icon, H2 } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getDecks, removeDeck } from '../utils/api'
import { receiveDecks, deleteDeck } from '../actions'
import Deck from '../components/Deck'
import { redirect } from '../utils/helpers'
import { styles } from '../components/styles'

class DeckList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.func.isRequired,
    decks: PropTypes.shape({}).isRequired,
  }

  componentDidMount() {
    getDecks().then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  navigate = (path, title) => {
    redirect(this.props.navigation)({ path, title })
  }

  removeDeck = title => {
    removeDeck(title).then(() => this.props.dispatch(deleteDeck(title)))
  }

  render() {
    const { decks } = this.props
    return (
      <Content padder>
        <H2>All Decks:</H2>
        {decks &&
          Object.entries(decks).map(([title, { questions }]) => (
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
          ))}
        {Object.keys(decks).length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            There are no decks in your collection. Get started by adding a new deck {':)'}
          </Text>
        ) : (
          <Text style={styles.smallText}>Swipe left on a deck to delete it</Text>
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
