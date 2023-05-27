import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem 0;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: inset 0 -50px 106px -100px #14589c;
  min-height: 18.5rem;

  img {
    user-select: none;
    margin: 1rem auto;
  }

  img:nth-child(1) {
    margin-top: 2.5rem;
    position: absolute;
    z-index: 1;
  }

  img:nth-child(3) {
    position: absolute;
    right: 0;
    z-index: 1;
  }

  img:nth-child(2) {
    margin-bottom: 4.5rem;
  }
`
