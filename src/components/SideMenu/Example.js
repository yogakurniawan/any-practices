import React, { Component } from 'react'
import Menu from './'
import { Item } from './styled'

export default class Example extends Component {
  render() {
    return (
      <Menu>
        <Item>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
        </Item>
        <Item>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
        </Item>
        <Item>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Item>
        <Item>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Item>
      </Menu>
    )
  }
}
