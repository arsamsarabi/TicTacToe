import { observable, action } from 'mobx'

import CellStore, { CellStoreType } from './Cell.store'

export type BoardStoreType = {
  cells: CellStoreType[]
  play(position: TurnsType, shape: string): void
}

class BoardStore implements BoardStoreType {
  @observable cells: CellStoreType[] = []

  constructor() {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new CellStore(i as TurnsType))
    }
  }

  @action
  play = (position: TurnsType, shape: string): void => {
    this.cells[position].fill(shape)
  }
}

export default BoardStore
