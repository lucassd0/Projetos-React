import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-bottom: 2.25rem;
  display: flex;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    flex: 1;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
