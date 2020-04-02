import { action, observable } from 'mobx'

export type CellStoreType = {
  content: string
  position: TurnsType
  fill(shape: string): void
}

class CellStore implements CellStoreType {
  @observable content: string
  @observable position: TurnsType

  constructor(position: TurnsType) {
    this.content = ''
    this.position = position
  }

  @action
  fill = (shape: string): void => {
    if (!this.content) {
      this.content = shape
    }
  }
}

export default CellStore
