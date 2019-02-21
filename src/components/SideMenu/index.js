import React, { Component } from 'react'
import { Overlay, MenuWrap, Menu, ItemList } from './styled'
import HamburgerIcon from './HamburgerIcon'

export default class SideMenu extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    if (!this.props.disableCloseOnEsc) {
      window.onkeydown = this.listenForClose.bind(this)
    }

    if (this.state.isOpen) {
      this.toggleMenu({ isOpen: true, noStateChange: true })
    }
  }

  // componentDidUpdate() {
  //   const { isOpen } = this.props
  //   if (typeof isOpen !== 'undefined' && isOpen !== this.state.isOpen) {
  //     this.toggleMenu()
  //   }
  // }

  componentWillUnmount() {
    window.onkeydown = null
  }

  toggleMenu(options = {}) {
    const { isOpen, noStateChange } = options
    const newState = {
      isOpen: typeof isOpen !== 'undefined' ? isOpen : !this.state.isOpen
    }
    this.setState(newState, () => {
      // !noStateChange && this.props.onStateChange(newState)
    })
  }

  listenForClose(e) {
    const _e = e || window.event
    if (this.state.isOpen && (_e.key === 'Escape' || _e.keyCode === 27)) {
      this.toggleMenu()
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <div>
        {!this.props.noOverlay && (
          <Overlay
            isOpen={isOpen}
            className={`bm-overlay ${this.props.overlayClassName}`}
            onClick={() => this.toggleMenu()}
          />
        )}
        <MenuWrap isOpen={isOpen}>
          <Menu>
            <ItemList>
              {React.Children.map(this.props.children, (item, index) => {
                if (item) {
                  const extraProps = {
                    key: index,
                    tabIndex: isOpen ? 0 : -1
                  }
                  return React.cloneElement(item, extraProps)
                }
              })}
            </ItemList>
          </Menu>
        </MenuWrap>
        <HamburgerIcon onClick={() => this.toggleMenu()} />
      </div>
    )
  }
}
