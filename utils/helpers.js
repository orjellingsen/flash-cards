export function cardText(amount) {
  return `card${amount !== 1 ? 's' : ''}`
}

export function calcPercent(part, total) {
  return Math.round(part / total * 100)
}
