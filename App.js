import React, { Fragment } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { Container } from 'native-base'
import reducers from './reducers'
import { gray, white, primaryColor } from './utils/colors'
import DeckList from './views/DeckList'
import IndividualDeck from './views/IndividualDeck'
import NewDeck from './views/NewDeck'
import NewCard from './views/NewCard'
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
      activeTintColor: primaryColor,
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
        backgroundColor: primaryColor,
      },
    },
  },
  NewQuestion: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primaryColor,
      },
    },
  },
})

export default () => (
  <Provider store={createStore(reducers)}>
    <Container>
      <FlashCardsStatusBar
        backgroundColor={primaryColor}
        barStyle="light-content"
      />
      <Stack />
    </Container>
  </Provider>
)
