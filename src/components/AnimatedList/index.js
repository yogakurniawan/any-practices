import React, { Component } from 'react'
import { StaggeredListContent, List } from './styled'
import ListItem from './ListItem'
import ExpandedListItem from './ExpandedListItem'

const listData = [0, 1, 2, 3, 4, 5, 6, 7]
const colors = ['#ff4f66', '#7971ea', '#5900d8']

export default class AnimatedList extends Component {
  state = {
    focused: null
  }

  onClick = index =>
    this.setState({ focused: this.state.focused === index ? null : index })

  render() {
    return (
      <StaggeredListContent
        decisionData={this.state.focused}
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
            speed: 0.5
          }
        }}
        spring="gentle"
        flipKey={this.state.focused}>
        <List>
          {listData.map(index => {
            return (
              <li>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    key={index}
                    index={this.state.focused}
                    color={colors[this.state.focused % colors.length]}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem
                    index={index}
                    color={colors[index % colors.length]}
                    onClick={this.onClick}
                  />
                )}
              </li>
            )
          })}
        </List>
      </StaggeredListContent>
    )
  }
}
