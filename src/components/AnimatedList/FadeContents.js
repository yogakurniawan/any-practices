import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }`

const FadeContainer = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay};
`

const propTypes = {
  delay: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.func
}

const FadeContents = forwardRef(({ children, delay }, ref) => (
  <FadeContainer delay={delay} ref={ref}>
    {children}
  </FadeContainer>
))

FadeContents.propTypes = propTypes

export default FadeContents
