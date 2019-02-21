import React, { Component } from 'react'
// import Example from './components/Example'
// import AnimatedList from './components/AnimatedList'
import SideMenu from './components/SideMenu/Example'
import GlobalStyles from './global-styles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <SideMenu />
      </div>
    )
  }
}

export default App
