import React, { Fragment } from 'react'
import { StatusBar, View } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { Container } from 'native-base'

import { blue, gray, white, red } from './utils/colors'
import DeckList from './views/DeckList'
import IndividualDeck from './views/IndividualDeck'
import NewDeck from './views/NewDeck'
import NewQuestion from './views/NewQuestion'
import Quiz from './views/Quiz'

const FlashCardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'All Decks',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={`ios-albums${focused ? '' : '-outline'}`}
            size={30}
            color={tintColor}
          />
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
      activeTintColor: red,
      inactiveTintColor: gray,
    },
  }
)

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: red,
      },
    },
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'New Question',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: red,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: red,
      },
    },
  },
})

export default () => (
  <Container>
    <FlashCardsStatusBar backgroundColor={red} barStyle="light-content" />
    <Stack />
  </Container>
)
