import { action, observable } from 'mobx'

import GameStore, { GameStoreType } from './Game.store'
import PlayerStore, { PlayerStoreType } from './Player.store'
import { theme } from '../styles'

export type TicTacToeStoreType = {
  game: GameStoreType
  gameCount: number
  restart(): void
  player1: PlayerStoreType
  player2: PlayerStoreType
  startingPlayer: 1 | 2
}

class TicTacToeStore implements TicTacToeStoreType {
  @observable game: GameStoreType
  @observable gameCount: number
  @observable player1: PlayerStoreType
  @observable player2: PlayerStoreType
  startingPlayer: 1 | 2

  constructor() {
    this.startingPlayer = 1
    this.gameCount = 1
    this.player1 = new PlayerStore('Player One', true, 'X', theme.palette.primary.main)
    this.player2 = new PlayerStore('Player Two', false, 'O', theme.palette.secondary.main)
    this.game = new GameStore(this.player1, this.player2)
  }

  @action
  restart = (): void => {
    this.reverseStartingPlayer()
    this.player1.setTurn(this.startingPlayer === 1)
    this.player2.setTurn(this.startingPlayer === 2)
    this.game = new GameStore(this.player1, this.player2)
    this.gameCount++
  }

  reverseStartingPlayer = (): void => {
    if (this.startingPlayer === 1) {
      this.startingPlayer = 2
    } else if (this.startingPlayer === 2) {
      this.startingPlayer = 1
    }
  }
}

export default TicTacToeStore
