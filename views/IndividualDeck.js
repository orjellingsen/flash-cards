import React, { Component } from 'react'
import { Content, Card } from 'native-base'
import CardButton from '../components/CardButton'
import DeckDetails from '../components/DeckDetails'
import { connect } from 'react-redux'
import { redirect } from '../utils/helpers'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.title }
  }

  navigate = path => {
    const { navigation } = this.props
    const { title } = navigation.state.params
    redirect(navigation)({ title, path })
  }

  render() {
    const { navigation, deck } = this.props
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
              Start Quiz
            </CardButton>
            <CardButton icon="add-circle" light actionValue="NewQuestion" action={this.navigate}>
              Add Card
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
