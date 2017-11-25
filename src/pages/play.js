import React, { Component } from 'react'
import styled, { css } from 'react-emotion'

import data from '../data'
import Game from '../components/game'
import { MobileBreakpoint } from '../layouts/util'

const Container = styled('div')`
  box-sizing: border-box;
  padding: 80px;
  color: #fff;

  @media (${MobileBreakpoint}) {
    padding: 10px;
  }
`

const GamesHeader = styled('h2')`
  margin-left: 20px;
  font-size: 100px;

  @media (${MobileBreakpoint}) {
    font-size: 72px;
    margin-left: 0;
  }
`

const GamesList = styled('ol')`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`

const GamesNote = styled('div')`
  margin: 20px 40px;
  font-size: 48px;

  @media (${MobileBreakpoint}) {
    margin: 20px 0;
  }
`

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {
      games: data.getGames()
    }
  }

  componentDidMount() {
    const setGames = () => {
      this.setState({
        games: data.getGames()
      })
    }

    setGames()
    data.addSubscriber('play', setGames)
  }

  componentWillUnmount() {
    data.removeSubscriber('play')
  }

  render() {
    const { games } = this.state

    const isLoading = games.length === 0
    if (isLoading) {
      return (
        <Container>
          <GamesHeader>Loading...</GamesHeader>
        </Container>
      )
    }

    const previousGames = games.filter(g => !g.upcoming)
    const upcomingGames = games.filter(g => g.upcoming)

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
