import React from 'react'

export default class CardComponent extends React.Component {
  state = {

  }

  componentDidMount() {
    this.setState({flipped: this.props.flipped})
  }

  render() {
    return (
      <div style={{width: 200, height: 250, perspective: 1000}} onClick={() => {
        console.log('tapped ', this.props.value)
      }}>
        <div style={{position: 'relative', width: '100%', height: '100%', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}}>
          <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'green'}}>
            not flipped
          </div>
          <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'blue', transform: 'rotateX(180deg)'}}>
            flipped {this.props.value}
          </div>
        </div>
      </div>
    )
  }
}
