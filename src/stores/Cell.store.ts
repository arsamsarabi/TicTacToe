import { action, observable } from 'mobx'

export type CellStoreType = {
  content: XOType | ''
  position: TurnsType
  fill(shape: XOType): void
}

class CellStore implements CellStoreType {
  @observable content: XOType | ''
  @observable position: TurnsType

  constructor(position: TurnsType) {
    this.content = ''
    this.position = position
  }

  @action
  fill = (shape: XOType): void => {
    if (!this.content) {
      this.content = shape
    }
  }
}

export default CellStore
