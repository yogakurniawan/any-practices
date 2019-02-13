import React, { PureComponent } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { ListItem, ListItemContent, Avatar, Description } from './styled'

const shouldFlip = index => (prev, current) =>
  index === prev || index === current

const baseArray = [...Array(3).keys()]

export default class TheListItem extends PureComponent {
  render() {
    const { index, color, onClick } = this.props
    return (
      <Flipped
        shouldInvert={shouldFlip(index)}
        stagger="card"
        flipId={`listItem-${index}`}>
        <ListItem onClick={() => onClick(index)} bg={color || '#7ab3ef'}>
          <Flipped inverseFlipId={`listItem-${index}`}>
            <ListItemContent>
              <Flipped
                shouldFlip={shouldFlip(index)}
                stagger="card-content"
                flipId={`avatar-${index}`}>
                <Avatar />
              </Flipped>
              <Description>
                {baseArray.map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content"
                    shouldFlip={shouldFlip(index)}>
                    <div />
                  </Flipped>
                ))}
              </Description>
            </ListItemContent>
          </Flipped>
        </ListItem>
      </Flipped>
    )
  }
}
