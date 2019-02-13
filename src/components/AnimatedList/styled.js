import styled from 'styled-components'
import { color } from 'styled-system'
import { Flipper } from 'react-flip-toolkit'

export const ListItem = styled.div`
  ${color}
  width: 100%;
  cursor: pointer;
`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  li {
    width: 100%;
  }
  li + li {
    margin-top: 1rem;
  }
`

export const StaggeredListContent = styled(Flipper)`
  width: 400px;
  margin: 2rem auto;
`

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: hsla(0, 0%, 100%, 0.3);
  margin-right: 2rem;
`

export const AvatarExpanded = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  margin-right: 0;
  margin-bottom: 1rem;
`

export const AdditionalContent = styled.div`
  width: 100%;
  margin-top: 2rem;
  > div {
    opacity: 0;
    border-radius: 3px;
    background-color: hsla(0, 0%, 100%, 0.3);
    height: 5rem;
    :nth-of-type(2) {
      animation-delay: 0.15s !important;
    }

    :nth-of-type(3) {
      animation-delay: 0.3s !important;
    }

    + div {
      margin-top: 1rem;
    }
  }
`

export const ExpandedListItem = styled.div`
  ${color}
  cursor: pointer;
  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const ExpandedListItemContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.div`
  > div {
    background-color: hsla(0, 0%, 100%, 0.3);
    width: 14rem;
    border-radius: 6px;
    height: 0.5rem;
  }
  > div:nth-of-type(2) {
    width: 11rem;
  }
  > div:nth-of-type(3) {
    width: 8rem;
  }
  > div + div {
    margin-top: 1rem;
  }
`
