import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Content, Card, Text } from 'native-base'
import CardButton from '../components/CardButton'
import DeckDetails from '../components/DeckDetails'
import { redirect } from '../utils/helpers'

class IndividualDeck extends Component {
  static propTypes = {
    navigation: PropTypes.func.isRequired,
    deck: PropTypes.shape({}).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.title })

  navigate = path => {
    const { navigation } = this.props
    const { title } = navigation.state.params
    redirect(navigation)({ title, path })
  }

  render() {
    const { deck } = this.props
    const questionsExist = deck.questions.length !== 0
    return (
      <Content padder>
        {deck && (
          <Card>
            <DeckDetails deck={deck} />
            <CardButton
              disabled={!questionsExist}
              info={questionsExist}
              actionValue="Quiz"
              action={this.navigate}
            >
              Start a Quiz
            </CardButton>
            {!questionsExist && (
              <Text style={{ textAlign: 'center' }}>Please add a new card to get started.</Text>
            )}
            <CardButton icon="add-circle" light actionValue="NewQuestion" action={this.navigate}>
              Create New Card
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

export default connect(mapStateToProps)(IndividualDeck)
