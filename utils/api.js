import { AsyncStorage } from 'react-native'
const DECK_KEY = 'FlashCards:decks3'

export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY).then(data => JSON.parse(data))
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY)
    .then(data => JSON.parse(data))
    .then(data => data[id])
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_KEY)
    .then(data => JSON.parse(data))
    .then(data =>
      AsyncStorage.mergeItem(
        DECK_KEY,
        JSON.stringify({
          ...data,
          [title]: {
            ...data[title],
            questions: data[title].questions.concat(card),
          },
        })
      )
    )
    .then(_ => card)
}

export function saveDeckTitle(title) {
  const deck = {
    title,
    questions: [],
  }
  return AsyncStorage.mergeItem(
    DECK_KEY,
    JSON.stringify({
      [title]: deck,
    })
  ).then(_ => ({ [title]: deck }))
}
