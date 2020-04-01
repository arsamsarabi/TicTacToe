import { createContext, useContext } from 'react'
import TicTacToeStore, { TicTacToeStoreType } from './TicTacToe.store'

export interface StoresContextType {
  TicTacToeStore: TicTacToeStoreType
}

export const stores: StoresContextType = {
  TicTacToeStore: new TicTacToeStore(),
}

export const useStores = (): StoresContextType =>
  useContext(createContext<StoresContextType>(stores))
