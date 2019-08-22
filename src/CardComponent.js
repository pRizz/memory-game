import React from 'react'

export default class CardComponent extends React.Component {
  state = {

  }

  render() {
    return (
      <div style={{width: 200, height: 250, perspective: 1000, margin: 10}} onClick={this.props.onClick}>
        <div style={{position: 'relative', width: '100%', height: '100%', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}}>
          {
            !this.props.cardViewModel.flipped && <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{fontSize: '4em'}}>
                ?
              </div>
            </div>
          }
          {
            this.props.cardViewModel.flipped && <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'blue', transform: 'rotateX(20deg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{fontSize: '4em'}}>
                {this.props.cardViewModel.value}
              </div>
            </div>
          }

        </div>
      </div>
    )
  }
}
