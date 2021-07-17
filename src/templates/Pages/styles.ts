import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  // serve para estilos de body
  // p, a, ul, li, bloquote
  p {
    font-size: var(--medium);
  }
`
