import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: -6rem auto 0px;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  z-index: 2;

  img {
    border-radius: 8px;
    max-width: 8.475rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    header {
      display: flex;
      justify-content: space-between;
      align-items: start;

      h1 {
        font-size: 1.5rem;
        line-height: 1.3;
        font-weight: 700;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        color: ${(props) => props.theme.blue};
        font-size: 0.75rem;
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 1px solid transparent;
        margin: 0.3125rem 0;
        cursor: pointer;

        &:not(:focus):hover {
          border-color: ${(props) => props.theme.blue};
          transition: border-color 0.2s;
        }
      }
    }

    p {
      margin-bottom: 1rem;
    }

    footer {
      display: flex;
      gap: 1.5rem;

      span {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme['base-subtitle']};

        > svg {
          color: #3a536b;
        }
      }
    }
  }
`
