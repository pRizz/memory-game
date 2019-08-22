import React from 'react'
import CardComponent from '../CardComponent'

function generateCards(values) {
  const cards = []
  let count = 0
  for(let value of values) {
    cards.push((
      <CardComponent value={value} key={count++} />
    ))
  }
  return cards
}

export default class MemoryGameComponent extends React.Component {

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 100, alignItems: 'center'}}>
        {generateCards(this.props.memoryGame.values)}
      </div>
    )
  }
}
