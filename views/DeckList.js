import React, { Fragment } from 'react'
import {
  Container,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base'

import { deckStructure } from '../utils/api'

const DeckList = ({ navigation }) => (
  <Container>
    <Content>
      <Text>Deck List</Text>
      {Object.keys(deckStructure).map(key => (
        <Card key={key}>
          <CardItem>
            <Body>
              <Text
                onPress={() =>
                  navigation.navigate('IndividualDeck', { deck: key })
                }
              >
                {key}
              </Text>
            </Body>
          </CardItem>
        </Card>
      ))}
    </Content>
  </Container>
)

export default DeckList
