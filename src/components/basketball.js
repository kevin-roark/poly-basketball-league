import React, { Component } from 'react'
import { css } from 'emotion'

import svgUrl from '../assets/basketball.svg'

const basketballWrapper = css`
  position: fixed;
  top: calc(50% + 36px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  user-select: none;
`

const basketballImg = css`
  margin: 0;
  max-width: 50vw;
  max-height: calc(100vh - 144px);
  width: 50vw;
  transition: transform 2s linear;
`

class Basketball extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skew: null,
      scale: null,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(this.chooseMorph())

      this.animationInterval = setInterval(() => {
        this.setState(this.chooseMorph())
      }, 2000)
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval)
  }

  chooseMorph() {
    return {
      skew: this.chooseSkew(),
      scale: this.chooseScale(),
    }
  }

  chooseSkew() {
    const x = -45 + Math.random() * 45
    const y = -30 + Math.random() * 30
    return `skew(${x.toFixed(2)}deg, ${y.toFixed(2)}deg)`
  }

  chooseScale() {
    const x = 0.6 + Math.random() * 0.8
    const y = 0.7 + Math.random() * 0.9
    return `scale(${x}, ${y})`
  }

  render() {
    const { skew, scale } = this.state

    const imageStyle = {
      transform: skew ? `${scale} ${skew}` : null,
    }

    return (
      <div className={basketballWrapper}>
        <img className={basketballImg} style={imageStyle} src={svgUrl} />
      </div>
    )
  }
}

export default Basketball
