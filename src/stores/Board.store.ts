import { observable, action, computed } from 'mobx'

import CellStore, { CellStoreType } from './Cell.store'

export type BoardStoreType = {
  cells: CellStoreType[]
  play(position: number, shape: string): void
  isFull: boolean
}

class BoardStore implements BoardStoreType {
  @observable cells: CellStoreType[] = []

  constructor() {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new CellStore(i as number))
    }
  }

  @action
  play = (position: number, shape: string): void => {
    this.cells[position].fill(shape)
  }

  @computed
  get isFull(): boolean {
    return this.cells.every((cell: CellStoreType) => cell.isFilledIn)
  }
}

export default BoardStore
