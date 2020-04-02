import { action, observable } from 'mobx'

import GameStore, { GameStoreType } from './Game.store'
import PlayerStore, { PlayerStoreType } from './Player.store'
import { theme } from '../styles'

export type TicTacToeStoreType = {
  game: GameStoreType
  restart(): void
  play(position: TurnsType): void
  player1: PlayerStoreType
  player2: PlayerStoreType
  startingPlayer: 1 | 2
}

class TicTacToeStore implements TicTacToeStoreType {
  @observable game: GameStoreType
  @observable player1: PlayerStoreType
  @observable player2: PlayerStoreType
  @observable startingPlayer: 1 | 2

  constructor() {
    this.game = new GameStore()
    this.startingPlayer = 1
    this.player1 = new PlayerStore('Player One', true, 'X', theme.palette.primary.main)
    this.player2 = new PlayerStore('Player Two', false, 'O', theme.palette.secondary.main)
  }

  @action
  restart = (): void => {
    this.game = new GameStore()
    this.reverseStartingPlayer()
    this.player1.setMyTurn(this.startingPlayer === 1)
    this.player2.setMyTurn(this.startingPlayer === 2)
  }

  @action
  play = (position: TurnsType): void => {
    const shape = [this.player1, this.player2].find((player: PlayerStoreType) => player.myTurn)
      ?.symbol
    if (shape) {
      this.game.play(position, shape)
      this.player1.setMyTurn(!this.player1.myTurn)
      this.player2.setMyTurn(!this.player2.myTurn)
    }
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
