import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: -6rem auto 0px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  z-index: 2;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    a {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      margin: 0.3125rem 0;
      cursor: pointer;

      &:not(:focus):hover {
        border-color: ${(props) => props.theme.blue};
        transition: border-color 0.2s;
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  footer {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['base-span']};

      > svg {
        color: #3a536b;
      }
    }
  }
`

export const NavLinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
`
