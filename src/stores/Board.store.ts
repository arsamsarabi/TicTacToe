import { observable, action } from 'mobx'

import CellStore, { CellStoreType } from './Cell.store'

export type BoardStoreType = {
  cells: CellStoreType[]
  play(position: TurnsType, turn: TurnsType): void
}

class BoardStore implements BoardStoreType {
  @observable cells: CellStoreType[] = []
  NUMBER_OF_CELLS = 9

  constructor() {
    for (let i = 1; i <= this.NUMBER_OF_CELLS; i++) {
      this.cells.push(new CellStore(i as TurnsType))
    }
  }

  @action
  play = (position: TurnsType, turn: TurnsType): void => {
    const shape: XOType = turn % 2 === 0 ? 'X' : 'O'
    this.cells[position - 1].fill(shape)
  }
}

export default BoardStore
