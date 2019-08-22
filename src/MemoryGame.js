
function createShuffledLocations(pairCount) {
  const locations = []
  for(let i = 0; i < pairCount; ++i) {
    locations.push(i)
    locations.push(i)
  }
  for(let i = 0; i < locations.length; ++i) {
    const swapIndex = Math.floor(Math.random() * locations.length);
    [locations[i], locations[swapIndex]] = [locations[swapIndex], locations[i]]
  }
  return locations
}

export class MemoryGame {

  constructor(pairCount = 12, delegate) {
    this.pairCount = pairCount
    this.values = createShuffledLocations(pairCount)
    this.delegate = delegate
  }

}
