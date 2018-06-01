import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Content, Form, Item, Input, Label, H2 } from 'native-base'
import { saveDeckTitle } from '../utils/api'
import { redirect } from '../utils/helpers'
import SubmitButton from '../components/SubmitButton'
import { addDeck } from '../actions'

const initialState = {
  title: '',
}

class NewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  state = initialState

  onSubmit = () => {
    const { dispatch, navigation } = this.props
    const { title } = this.state
    saveDeckTitle(title)
      .then(deck => dispatch(addDeck(deck)))
      .then(() => redirect(navigation)({ title, path: 'IndividualDeck' }))
    this.resetForm()
  }

  onChange = (key, value) => {
    this.setState(() => ({ [key]: value }))
  }

  resetForm = () => {
    this.setState(() => initialState)
  }

  render() {
    const { title } = this.state
    return (
      <Content padder>
        <H2>Create a new deck:</H2>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input value={title} onChangeText={value => this.onChange('title', value)} />
          </Item>
          <SubmitButton info icon="add-circle" action={this.onSubmit}>
            Create Deck
          </SubmitButton>
        </Form>
      </Content>
    )
  }
}

export default connect()(NewDeck)
