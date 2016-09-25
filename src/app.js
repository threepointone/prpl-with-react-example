import React from 'react'
import { Match, Miss } from 'react-router'

import { Home } from './home'
import { List } from './list'
import { Detail } from './detail'
import { Cart } from './cart'
import { Checkout } from './checkout'

export class App extends React.Component {
  render () {
    return <div>
      <Match pattern='/' exactly component={Home}/>
      <Match pattern='/list/:term' component={List}/>
      <Match pattern='/detail/:category/:item' component={Detail}/>
      <Match pattern='/cart' component={Cart}/>
      <Match pattern='/checkout' component={Checkout}/>
      <Miss render={() => <div> 404, you be lost </div>}/>
    </div>
  }
}

