import React from 'react'

const HamburgerIcon = props => (
  <svg viewBox="0 0 24 24" aria-hidden="true" height={24} width={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

export default HamburgerIcon
