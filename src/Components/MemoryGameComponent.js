import React from 'react'
import CardComponent from '../CardComponent'
import {MemoryGame} from '../MemoryGame'

function generateCards(cardViewModels, onCardClicked) {
  const cards = []
  let index = 0
  for(let cardViewModel of cardViewModels) {
    const currentIndex = index
    cards.push((
      <CardComponent cardViewModel={cardViewModel} key={index} onClick={() => { onCardClicked(currentIndex, cardViewModel.value) }} />
    ))
    ++index
  }
  return cards
}

export default class MemoryGameComponent extends React.Component {
  state = {
    memoryGame: new MemoryGame(12, this)
  }

  onGameUpdated() {
    this.setState({})
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 100, alignItems: 'center', justifyContent: 'space-evenly'}}>
        {generateCards(this.state.memoryGame.cardViewModels, (cardIndex, cardValue) => {
          this.state.memoryGame.cardClicked(cardIndex)
          this.setState({})
        })}
      </div>
    )
  }
}
