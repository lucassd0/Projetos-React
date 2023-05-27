import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 1rem;
`

export const PostsContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  > header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1.125;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 16.25rem;
  gap: 2rem;
`
