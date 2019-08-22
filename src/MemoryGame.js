
function createShuffledCards(pairCount) {
  const cardViewModels = []

  for(let i = 0; i < pairCount; ++i) {
    cardViewModels.push({ value: i, flipped: false })
    cardViewModels.push({ value: i, flipped: false })
  }

  for(let i = 0; i < cardViewModels.length; ++i) {
    const swapIndex = Math.floor(Math.random() * cardViewModels.length);
    [cardViewModels[i], cardViewModels[swapIndex]] = [cardViewModels[swapIndex], cardViewModels[i]]
  }

  return cardViewModels
}

export class MemoryGame {
  currentlySelectedCard = null
  points = 0
  shouldIgnoreClicks = false

  constructor(pairCount = 12, delegate) {
    this.pairCount = pairCount
    this.cardViewModels = createShuffledCards(pairCount)
    this.delegate = delegate
  }

  cardClicked(cardIndex) {
    if(this.shouldIgnoreClicks) {
      return
    }

    const card = this.cardViewModels[cardIndex]

    if(card.flipped) {
      return
    }

    card.flipped = true
    if(this.currentlySelectedCard === null) {
      this.currentlySelectedCard = card
      return
    }

    if(this.currentlySelectedCard.value === card.value) {
      this.points += 2
      this.currentlySelectedCard = null
      console.log('points: ', this.points)
    } else {
      this.shouldIgnoreClicks = true
      setTimeout(() => {
        card.flipped = false
        this.currentlySelectedCard.flipped = false
        this.currentlySelectedCard = null
        this.shouldIgnoreClicks = false
        this.delegate.onGameUpdated()
      }, 2000)
    }

  }
}
