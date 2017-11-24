import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import Game from '../components/game'

const Container = styled('div')`
  box-sizing: border-box;
  padding: 80px;
  color: #fff;
`

const GamesHeader = styled('h2')`
  margin-left: 20px;
  font-size: 100px;
`

const GamesList = styled('ol')`
  list-style: none;
  display: flex;
  justify-content: center;
`

const GamesNote = styled('div')`
  margin: 20px 40px;
  font-size: 48px;
`

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const games = [
      {
        id: '0',
        date: 'Wed Nov 22 2017 18:51:00 GMT-0500 (EST)',
        location: 'Brower Park, Brooklyn, NY',
        players: [],
        note: ''
      },
      {
        id: '1',
        date: 'Wed Nov 15 2017 18:51:00 GMT-0500 (EST)',
        location: 'Bed Stuy Gym, Brooklyn, NY',
        players: [],
        note: 'This was a great game'
      }
    ]
      .map(g => Object.assign({}, g, { date: new Date(g.date) }))
      .sort((a, b) => b.date - a.date)

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const previousGames = games.filter(g => g.date < yesterday)
    const upcomingGames = games.filter(g => g.date >= yesterday)

    return (
      <Container>
        <GamesHeader>Upcoming Games</GamesHeader>
        { upcomingGames.length > 0
          ? <GamesList>
              { upcomingGames.map(game => <li key={game.id}><Game game={game} /></li> )}
            </GamesList>
          : <GamesNote>None!!! :( Check back soon!!!!!!</GamesNote>
        }

        <GamesHeader>Previous Games</GamesHeader>
        <GamesList>
          { previousGames.map(game => <li key={game.id}><Game game={game} /></li> )}
        </GamesList>
      </Container>
    )
  }
}

export default Play
