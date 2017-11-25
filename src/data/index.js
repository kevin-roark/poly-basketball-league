import firebase from 'firebase'

export class Data {
  constructor() {
    this.onGamesValue = this.onGamesValue.bind(this)

    this.hasInit = false
    this.subscribers = {}
    this.data = {
      games: [],
    }
  }

  init() {
    if (this.hasInit) {
      return
    }

    firebase.initializeApp({
      apiKey: "AIzaSyBF-H7YBCaC1hzJk51DMwM-ZAYQtjEOmp8",
      authDomain: "poly-basketball-league.firebaseapp.com",
      databaseURL: "https://poly-basketball-league.firebaseio.com",
      projectId: "poly-basketball-league",
      storageBucket: "",
      messagingSenderId: "76648318309"
    })

    this.gamesRef = firebase.database().ref('games')
    this.gamesRef.on('value', this.onGamesValue)

    this.hasInit = true
  }

  addSubscriber(id, fn) {
    this.subscribers[id] = fn
  }

  removeSubscriber(id) {
    delete this.subscribers[id]
  }

  setData(data) {
    this.data = Object.assign({}, this.data, data)

    Object.values(this.subscribers).forEach(fn => fn(this.data))
  }

  getGames() {
    return this.data.games
  }

  addGamePlayer(gameId, player) {
    const { key } = firebase.database().ref('games').push()
    firebase.database().ref(`games/${gameId}/players/${key}`).set(player)
  }

  onGamesValue(snapshot) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const val = snapshot.val()

    const games = Object.keys(val)
      .map(id => {
        const g = val[id]
        const date = new Date(g.date)
        const players = g.players ? Object.values(g.players) : []

        return Object.assign({}, g, {
          id,
          date,
          upcoming: date >= yesterday,
          players
        })
      })
      .sort((a, b) => b.date - a.date)

    this.setData({ games })
  }
}

const defaultData = new Data()
export default defaultData
