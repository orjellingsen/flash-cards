import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { Container } from 'native-base'
import reducers from './reducers'
import { gray, white, primaryColor } from './utils/colors'
import { setLocalNotification } from './utils/helpers'
import IndividualDeck from './views/IndividualDeck'
import DeckList from './views/DeckList'
import NewDeck from './views/NewDeck'
import NewCard from './views/NewCard'
import Quiz from './views/Quiz'

const FlashCardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

FlashCardsStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
}

/* eslint-disable react/display-name, react/prop-types */
const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'All Decks',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={`ios-albums${focused ? '' : '-outline'}`} size={30} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={`ios-add-circle${focused ? '' : '-outline'}`}
            size={30}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor,
      inactiveTintColor: gray,
    },
  }
)
/* eslint-enable react/display-name, react/prop-types */

const defaultStackOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: primaryColor,
  },
}

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: defaultStackOptions,
  },
  NewQuestion: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
      ...defaultStackOptions,
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      ...defaultStackOptions,
    },
  },
})

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <FlashCardsStatusBar backgroundColor={primaryColor} barStyle="light-content" />
          <Stack />
        </Container>
      </Provider>
    )
  }
}
