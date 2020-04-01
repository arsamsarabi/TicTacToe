import { action, observable } from 'mobx'

import GameStore, { GameStoreType } from './Game.store'

export type TicTacToeStoreType = {
  game: GameStoreType
  restart(): void
}

class TicTacToeStore implements TicTacToeStoreType {
  @observable game: GameStoreType

  constructor() {
    this.game = new GameStore()
  }

  @action
  restart = (): void => {
    this.game = new GameStore()
  }
}

export default TicTacToeStore
