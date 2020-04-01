import { action, observable, computed } from 'mobx'

import BoardStore, { BoardStoreType } from './Board.store'

export type GameStoreType = {
  turn: TurnsType
  isGameOver: boolean
  nextTurn(): void
  board: BoardStoreType
  play(position: TurnsType): void
}

class GameStore implements GameStoreType {
  @observable turn: TurnsType
  @observable board: BoardStoreType

  constructor() {
    this.turn = 1
    this.board = new BoardStore()
  }

  @action
  nextTurn = (): void => {
    if (!this.isGameOver) {
      this.turn++
    }
  }

  @action
  play = (position: TurnsType): void => {
    if (!this.isGameOver && this.board.cells[position - 1].content === '') {
      this.board.play(position, this.turn)
      this.nextTurn()
    }
  }

  @computed
  get isGameOver(): boolean {
    return this.board.cells.every((cell) => cell.content !== '')
  }
}

export default GameStore
