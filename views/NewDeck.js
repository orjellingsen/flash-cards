import React, { Component } from 'react'
import { Content, Text, Form, Item, Input, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { saveDeckTitle } from '../utils/api'
import { styles } from './styles'
import SubmitButton from '../components/SubmitButton'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends Component {
  state = {
    title: '',
  }

  onSubmit = () => {
    const { title } = this.state
    saveDeckTitle(title).then(deck => this.props.dispatch(addDeck(deck)))
    this.toHome()
  }

  onChange = title => {
    this.setState(() => ({ title }))
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: 'NewDeck',
      })
    )
  }

  render() {
    const { title } = this.state
    return (
      <Content style={styles.content}>
        <Text style={styles.header}>Create a new deck:</Text>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input value={title} onChangeText={title => this.onChange(title)} />
          </Item>
          <SubmitButton info icon="add-circle" action={this.onSubmit}>
            Create
          </SubmitButton>
        </Form>
      </Content>
    )
  }
}

export default connect()(NewDeck)
