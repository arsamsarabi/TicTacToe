import { action, observable, computed } from 'mobx'

import BoardStore, { BoardStoreType } from './Board.store'
import PlayerStore, { PlayerStoreType } from './Player.store'

export type GameStoreType = {
  board: BoardStoreType
  player1: PlayerStoreType
  player2: PlayerStoreType
  play(position: number): void
  activePlayer: PlayerStore
  isGameOver: boolean
  hasPlayer1Won: boolean
  hasPlayer2Won: boolean
  gameOverMessage: string
}

class GameStore implements GameStoreType {
  @observable board: BoardStoreType
  @observable player1: PlayerStoreType
  @observable player2: PlayerStoreType
  WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  constructor(player1: PlayerStoreType, player2: PlayerStoreType) {
    this.board = new BoardStore()
    this.player1 = player1
    this.player2 = player2
  }

  @action
  play = (position: number): void => {
    if (this.canPlayCell(position)) {
      this.board.play(position, this.activePlayer.symbol)
      if (!this.isGameOver) {
        this.player1.toggleTurn()
        this.player2.toggleTurn()
      } else {
        if (this.hasPlayer1Won) this.player1.won()
        if (this.hasPlayer2Won) this.player2.won()
      }
    }
  }

  @computed
  get activePlayer(): PlayerStore {
    if (this.player1.myTurn) return this.player1
    return this.player2
  }

  @computed
  get isGameOver(): boolean {
    return this.board.isFull || this.hasPlayer1Won || this.hasPlayer2Won
  }

  @computed
  get hasPlayer1Won(): boolean {
    return this.checkWinCondition(this.player1)
  }

  @computed
  get hasPlayer2Won(): boolean {
    return this.checkWinCondition(this.player2)
  }

  @computed
  get gameOverMessage(): string {
    if (this.hasPlayer1Won) return `${this.player1.name} has won the game!`
    if (this.hasPlayer2Won) return `${this.player2.name} has won the game!`
    return 'It\'s a tie!'
  }

  protected checkWinCondition = (player: PlayerStoreType): boolean =>
    this.WIN_CONDITIONS.map((c: number[]) => {
      return [c[0], c[1], c[2]].every((i) => this.board.cells[i].content === player.symbol)
    }).some((result) => result)

  protected canPlayCell = (position: number): boolean => {
    return !this.isGameOver && !this.board.cells[position].isFilledIn
  }
}

export default GameStore
