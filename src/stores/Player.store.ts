import { action, observable } from 'mobx'

export type PlayerStoreType = {
  name: string
  wins: number
  myTurn: boolean
  symbol: string
  color: string
  won(): void
  setMyTurn(isMyTurn: boolean): void
}

class PlayerStore implements PlayerStoreType {
  @observable wins: number
  @observable name: string
  @observable myTurn: boolean
  @observable symbol: string
  @observable color: string

  constructor(name: string, myTurn: boolean, symbol: string, color: string) {
    this.name = name
    this.wins = 0
    this.myTurn = myTurn
    this.symbol = symbol
    this.color = color
  }

  @action
  won = (): void => {
    this.wins++
  }

  @action
  setMyTurn = (isMyTurn: boolean): void => {
    this.myTurn = isMyTurn
  }
}

export default PlayerStore
