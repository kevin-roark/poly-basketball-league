import React, { Component } from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  margin: 25px;
  padding: 10px;
  border: 5px solid #000;
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
`

const GameDate = styled('h2')`
  font-size: 36px;
`

const Location = styled('div')`
  font-size: 28px;
`

const Players = styled('ul')`

`

const PlayersLabel = styled('div')``

const Note = styled('div')`
  margin-top: 12px;
  font-size: 22px;
  line-height: 1.5;
`

const ONE_DAY = 60 * 60 * 24

class Game extends Component {
  render() {
    const { game } = this.props

    const now = new Date()
    const isToday = game.date.getYear() === now.getYear()
      && game.date.getMonth() === now.getMonth()
      && game.date.getDate() === now.getDate()
    const dateText = isToday
      ? `Today at ${game.date.getHours()}:${game.date.getMinutes()}`
      : game.date.toLocaleString()

    return (
      <Container>
        <GameDate>{ dateText }</GameDate>
        <Location>{ game.location }</Location>

        { game.players.length > 0 &&
          <Players>
            <PlayersLabel>{ game.players.length } Signed Up</PlayersLabel>
            <ul>
              { game.players.map(player =>
                <li key={player.id}>{ player.name }</li>
              )}
            </ul>
          </Players>
        }

        { game.note && <Note>{ game.note }</Note> }
      </Container>
    )
  }
}

export default Game
