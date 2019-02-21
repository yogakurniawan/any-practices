import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  touch-action: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
    transition: ${isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'};
    transform: ${isOpen ? '' : 'translate3d(100%, 0, 0)'};
  `}
`

export const MenuWrap = styled.div`
  position: fixed;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 300px;
  z-index: 1100;
  height: 100%;
  ${({ isOpen }) => css`
    transform: ${isOpen ? '' : 'translate3d(-100%, 0, 0)'};
  `}
`

export const Menu = styled.div`
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`

export const ItemList = styled.nav`
  height: 100%;
`

export const Item = styled.div`
  display: block;
`
