import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line no-unused-expressions
const GlobalStyles = createGlobalStyle`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
    }
  }

  .animated-in {
    .additional-content {
      > div {
        animation: fadeIn 0.4s forwards;
      }
    }
  }
`

export default GlobalStyles
