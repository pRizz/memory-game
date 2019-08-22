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
    memoryGame: new MemoryGame(12, this),
    showWonModal: false
  }

  onGameUpdated() {
    this.setState({})
  }

  displayGamePrompt() {
    this.setState({
      showWonModal: true
    })
  }

  onGameWon() {
    this.flipCards(false)
    setTimeout(() => {
      this.flipCards(true)
    }, 300)

    this.displayGamePrompt()
  }

  flipCards(isFlipped) {
    for(let i = 0; i < this.state.memoryGame.cardViewModels.length; ++i) {
      setTimeout(() => {
        this.state.memoryGame.cardViewModels[i].flipped = isFlipped
        this.setState({})
      }, 100 * i)
    }
  }

  render() {
    return (
      <div style={{}}>
        <div onClick={() => {}} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'fixed', width: '100%', height: '100%', fontSize: '3em', zIndex: this.state.showWonModal ? 50 : -1, transition: 'all 0.5s', opacity: this.state.showWonModal ? 1 : 0 }}>
          <div style={{backgroundColor: '#44aa44', padding: 50, borderRadius: 10}}>
            <div>
              You won the game!
            </div>
            <button style={{fontSize: '3rem'}} onClick={() => {
              this.setState({showWonModal: false})
            }}>
              Ok
            </button>
          </div>
        </div>
        <div style={{textAlign: 'center', fontSize: '3em', marginTop: 40}}>
          Points: {this.state.memoryGame.points}
        </div>
        <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 100, marginTop: 40, alignItems: 'center', justifyContent: 'space-evenly'}}>
          {generateCards(this.state.memoryGame.cardViewModels, (cardIndex, cardValue) => {
            this.state.memoryGame.cardClicked(cardIndex)
            this.setState({})
          })}
        </div>
      </div>
    )
  }
}
