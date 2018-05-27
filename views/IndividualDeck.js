import React, { Component } from 'react'
import { styles } from './styles'
import { Content, Card } from 'native-base'
import { getDeck } from '../utils/api'
import CardButton from '../components/CardButton'
import DeckDetails from '../components/DeckDetails'
import { connect } from 'react-redux'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return { title }
  }

  state = {
    deck: null,
  }

  navigate = path => {
    const { navigation } = this.props
    navigation.navigate(path, {
      title: navigation.state.params.title,
    })
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    getDeck(title).then(deck => {
      this.setState(() => ({ deck }))
    })
  }

  render() {
    const { navigation, deck } = this.props
    return (
      <Content style={styles.content}>
        <Card>
          <DeckDetails deck={deck} />
          <CardButton
            disabled={deck.questions.length === 0}
            info
            actionValue="Quiz"
            action={this.navigate}
          >
            Start Quiz
          </CardButton>
          <CardButton
            icon="add-circle"
            light
            actionValue="NewQuestion"
            action={this.navigate}
          >
            Add Card
          </CardButton>
        </Card>
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

export default connect(mapStateToProps)(IndividualDeck)
