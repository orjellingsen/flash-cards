import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

export function cardText(amount) {
  return `card${amount !== 1 ? 's' : ''}`
}

export function calcPercent(part, total) {
  const percent = part / total
  return Math.round(percent * 100)
}

export function redirect(navigation) {
  return ({ path, title }) => {
    navigation.navigate(path, { title })
  }
}

// Quotes found in this article https://www.daniel-wong.com/2015/10/05/study-motivation-quotes/
const quotes = [
  'There is no substitute for hard work.',
  'Push yourself, because no one else is going to do it for you.',
  'Some people dream of accomplishing great things. Others stay awake and make it happen.',
  'Push yourself, because no one else is going to do it for you.',
  'There are no shortcuts to any place worth going',
  'If people only knew how hard I’ve worked to gain my mastery, it wouldn’t seem so wonderful at all.',
  'You don’t always get what you wish for; you get what you work for.',
]

export function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}

// The following function was obtained from the Udacity project UdaciFitness
export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )
}

// The following function was obtained from the Udacity project UdaciFitness
export function createNotification() {
  return {
    title: 'Take a quiz!',
    body: 'Dont forget to complete a quiz today',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  }
}

// The following function was obtained from the Udacity project UdaciFitness
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            })
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
