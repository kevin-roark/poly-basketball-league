import React, { Component } from 'react'
import styled from 'react-emotion'
import cx from 'classnames'

import { MobileBreakpoint } from '../layouts/util'
import data from '../data'

const Container = styled('div')`
  box-sizing: border-box;
  width: 600px;
  margin: 25px;
  padding: 10px;
  border: 5px solid #000;
  background-color: rgba(255, 255, 255, 0.99);
  color: #000;

  @media (${MobileBreakpoint}) {
    margin: 25px 0;
    width: auto;
  }
`

const GameDate = styled('h2')`
  font-size: 36px;
  margin-bottom: 10px;
`

const Location = styled('h2')`
  font-size: 28px;
  margin-bottom: 10px;
`

const Note = styled('div')`
  margin-top: 12px;
  font-size: 22px;
  line-height: 1.5;
`

const Players = styled('div')`
  margin-top: 15px;
  text-align: center;
  padding: 4px;
  background: #f00;
  color: #00f;

  & ul {
    display: flex;
    justify-content: center;

    & li {
      margin: 8px 8px 0 0;
      font-size: 22px;

      &:not(:last-child):after {
        content: ",";
      }
    }
  }
`

const PlayersLabel = styled('div')`
  display: inline-block;
  font-size: 28px;
  border-bottom: 2px solid #000;
`

const PlayerSignupContainer = styled('div')`
  margin-top: 20px;
  border-top: 1px solid #000;
  padding-top: 15px;
`

const PlayerSignupLabel = styled('div')`
  font-size: 18px;
  margin-bottom: 10px;
`

const PlayerSignupRules = styled('div')`
  &.error {
    color: #f00;
    font-weight: 600;
  }
`

const PlayerSignupForm = styled('form')`
  text-align: center;

  & input,
  & button {
    box-sizing: border-box;
    outline: none;
    border: 2px solid #000;
    border-radius: 0px;
  }

  & input {
    padding: 10px;
    margin: 10px;
    width: 150px;
  }

  & button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: 250px;
    font-weight: 600;
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

const zp = s => (s + '').length === 1 ? `0${s}` : s
const getDateText = date => {
  const h = date.getHours()
  const mi = date.getMinutes()
  const ampm = h >= 12 ? 'PM' : 'AM'
  const timeText = `${h % 12}:${zp(mi)} ${ampm}`

  const now = new Date()
  const isToday = date.getYear() === now.getYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate()

  if (isToday) {
    return `Today at ${timeText}`
  }

  const mo = date.getMonth() + 1
  const d = date.getDate()
  const y = date.getYear() % 100
  return `${zp(mo)}/${zp(d)}/${y} — ${timeText}`
}

class Game extends Component {
  constructor(props) {
    super(props)

    this.onNewPlayerNameChange = this.onNewPlayerNameChange.bind(this)
    this.onNewPlayerPhoneChange = this.onNewPlayerPhoneChange.bind(this)
    this.onNewPlayerEmailChange = this.onNewPlayerEmailChange.bind(this)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)

    this.state = {
      newPlayerName: '',
      newPlayerPhone: '',
      newPlayerEmail: '',
      joinError: false
    }
  }

  onNewPlayerNameChange(ev) {
    this.setState({ newPlayerName: ev.target.value })
  }

  onNewPlayerPhoneChange(ev) {
    this.setState({ newPlayerPhone: ev.target.value })
  }

  onNewPlayerEmailChange(ev) {
    this.setState({ newPlayerEmail: ev.target.value })
  }

  onSignupSubmit(ev) {
    ev.preventDefault()

    const { game } = this.props
    const { newPlayerName, newPlayerPhone, newPlayerEmail } = this.state

    if (!newPlayerName || (!newPlayerPhone && !newPlayerEmail)) {
      return this.setState({
        joinError: true
      })
    }

    data.addGamePlayer(game.id, {
      name: newPlayerName,
      phone: newPlayerPhone,
      email: newPlayerEmail
    })

    this.setState({
      newPlayerName: '',
      newPlayerPhone: '',
      newPlayerEmail: '',
      joinError: false
    })
  }

  render() {
    const { game } = this.props
    const { newPlayerName, newPlayerPhone, newPlayerEmail, joinError } = this.state

    const dateText = getDateText(game.date)

    return (
      <Container>
        <GameDate>{ dateText }</GameDate>
        <Location>{ game.location }</Location>

        { game.note && <Note>{ game.note }</Note> }

        { game.players.length > 0 &&
          <Players>
            <PlayersLabel>
              { game.players.length } Players Signed Up:
            </PlayersLabel>
            <ul>
              { game.players.map(player =>
                <li key={player.name}>{ player.name }</li>
              )}
            </ul>
          </Players>
        }

        { game.upcoming &&
          <PlayerSignupContainer>
            <PlayerSignupLabel>
              Sign up to play.
              <PlayerSignupRules className={cx({error: joinError})}>
                Just give your name and one way to contact you, please.
              </PlayerSignupRules>
            </PlayerSignupLabel>
            <PlayerSignupForm onSubmit={this.onSignupSubmit}>
              <input
                type="text"
                placeholder="Name*"
                value={newPlayerName}
                onChange={this.onNewPlayerNameChange}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={newPlayerPhone}
                onChange={this.onNewPlayerPhoneChange}
              />
              <input
                type="email"
                placeholder="Email"
                value={newPlayerEmail}
                onChange={this.onNewPlayerEmailChange}
              />

              <button type="submit">Join</button>
            </PlayerSignupForm>
          </PlayerSignupContainer>
        }
      </Container>
    )
  }
}

export default Game
