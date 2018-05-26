/*
We'll use AsyncStorage to store our decks and flashcards. Redux is optional for this project.
Using AsyncStorage you'll manage an object whose shape is similar to this:
*/
const deckStructure = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
}
/*
Notice each deck creates a new key on the object. Each deck has a title and a questions key.
title is the title for the specific deck and questions is an array of questions and answers for that deck.
*/
