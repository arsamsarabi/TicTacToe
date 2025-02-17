import React, { ReactElement } from 'react'

import Layout from './components/Layout'
import Game from './components/Game'

const App = (): ReactElement => {
  return (
    <Layout>
      <Game />
    </Layout>
  )
}

export default App
