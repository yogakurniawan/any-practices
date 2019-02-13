import React, { Component } from 'react'
// import Example from './components/Example'
import AnimatedList from './components/AnimatedList'
import GlobalStyles from './global-styles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <AnimatedList />
      </div>
    )
  }
}

export default App
