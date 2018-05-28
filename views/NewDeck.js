import React, { Component } from 'react'
import { Content, Form, Item, Input, Label, H2 } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { saveDeckTitle } from '../utils/api'
import SubmitButton from '../components/SubmitButton'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

const initialState = {
  title: '',
}

class NewDeck extends Component {
  state = initialState

  onSubmit = () => {
    const { title } = this.state
    saveDeckTitle(title)
      .then(deck => this.props.dispatch(addDeck(deck)))
      .then(() => this.redirect(title))
    this.resetForm()
  }

  onChange = title => {
    this.setState(() => ({ title }))
  }

  resetForm = () => {
    this.setState(() => initialState)
  }

  redirect = title => {
    this.props.navigation.navigate('IndividualDeck', {
      title,
    })
  }

  render() {
    const { title } = this.state
    return (
      <Content padder>
        <H2>Create a new deck:</H2>
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
