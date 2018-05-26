import React, { Component } from 'react'
import { styles } from './styles'
import { Content, Card } from 'native-base'
import { getDeck } from '../utils/api'
import CardButton from '../components/CardButton'
import DeckDetails from '../components/DeckDetails'

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
    const { navigation } = this.props
    const { deck } = this.state
    return (
      <Content style={styles.content}>
        <Card>
          {deck && (
            <DeckDetails title={deck.title} questions={deck.questions.length} />
          )}
          <CardButton path="NewQuestion" navigate={this.navigate}>
            Add Question
          </CardButton>
          <CardButton path={'Quiz'} navigate={this.navigate}>
            Quiz
          </CardButton>
        </Card>
      </Content>
    )
  }
}

export default IndividualDeck
