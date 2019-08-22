import React from 'react'

export default class CardComponent extends React.Component {
  state = {

  }

  render() {
    const rotatedTransform = this.props.cardViewModel.flipped ? { transform: 'rotateX(180deg)' } : {}
    return (
      <div style={{width: 150, height: 200, perspective: 1000, margin: 10}} onClick={this.props.onClick}>
        <div style={{position: 'relative', width: '100%', height: '100%', transition: 'transform 0.5s', transformStyle: 'preserve-3d', ...rotatedTransform}}>
           <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{fontSize: '4em'}}>
                ?
              </div>
            </div>
          <div style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', backgroundColor: 'blue', transform: 'rotateX(180deg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{fontSize: '4em'}}>
              {this.props.cardViewModel.value}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
