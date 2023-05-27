import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const PostContent = styled.div`
  max-width: 54rem;
  margin: 0 auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.5rem 2rem;

  p {
    display: flex;
    flex-direction: column;
    line-height: 1.6;
  }

  a {
    color: ${(props) => props.theme.blue};
    width: max-content;
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;
  }

  code {
    font-family: 'Fira Code';
  }
`
