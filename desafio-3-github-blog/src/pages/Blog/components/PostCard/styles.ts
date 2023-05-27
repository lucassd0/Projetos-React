import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 0.2s;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-title']};
      width: 70%;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.875rem;
      line-height: 2.2;
      color: ${(props) => props.theme['base-span']};
      flex: 1;
    }
  }

  div {
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
