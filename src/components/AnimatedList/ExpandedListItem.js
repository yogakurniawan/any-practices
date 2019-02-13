import React, { PureComponent } from 'react'
import { Flipped } from 'react-flip-toolkit'
import {
  ExpandedListItem,
  ExpandedListItemContent,
  AvatarExpanded,
  AdditionalContent
} from './styled'

const baseArray = [...Array(3).keys()]

export default class TheExpandedListItem extends PureComponent {
  render() {
    const { index, color, onClick } = this.props
    return (
      <Flipped
        onStart={el => {
          setTimeout(() => {
            el.classList.add('animated-in')
          }, 400)
        }}
        stagger="card"
        flipId={`listItem-${index}`}>
        <ExpandedListItem onClick={() => onClick(index)} bg={color}>
          <Flipped inverseFlipId={`listItem-${index}`}>
            <ExpandedListItemContent>
              <Flipped flipId={`avatar-${index}`} stagger="card-content">
                <AvatarExpanded />
              </Flipped>
              <div className="description">
                {baseArray.map(i => (
                  <Flipped
                    flipId={`description-${index}-${i}`}
                    stagger="card-content">
                    <div />
                  </Flipped>
                ))}
              </div>
              <AdditionalContent className="additional-content">
                {baseArray.map(i => (
                  <div />
                ))}
              </AdditionalContent>
            </ExpandedListItemContent>
          </Flipped>
        </ExpandedListItem>
      </Flipped>
    )
  }
}
