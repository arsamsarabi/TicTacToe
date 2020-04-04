import { action, observable, computed } from 'mobx'

export type CellStoreType = {
  content: string
  position: number
  fill(shape: string): void
  isFilledIn: boolean
}

class CellStore implements CellStoreType {
  @observable content: string
  @observable position: number

  constructor(position: number) {
    this.content = ''
    this.position = position
  }

  @action
  fill = (shape: string): void => {
    if (!this.content) {
      this.content = shape
    }
  }

  @computed
  get isFilledIn(): boolean {
    return this.content !== ''
  }
}

export default CellStore
