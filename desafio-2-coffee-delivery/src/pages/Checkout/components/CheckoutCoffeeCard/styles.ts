import styled from "styled-components";

export const CheckoutCoffeeCardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    background: ${props => props.theme['base-card']};
    margin: 0 0 1.125rem 0;
    padding: 0 0 1.5rem 0;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    img {
        max-width: 64px;
        max-height: 64px;
        object-fit: cover;
    }
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
            color: ${props => props.theme['base-subtitle']};
        }

        div {
            display: flex;
            gap: 0.5rem;

            input {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                border-radius: 6px;
                background: ${props => props.theme['base-button']};
                border: 0;
            }

            button {

                svg {
                    color: ${props => props.theme['purple']};
                }

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.25rem;
                padding: 0 0.5rem;
                background: ${props => props.theme['base-button']};
                border-radius: 6px;
                border: 0;
                font-size: 0.875rem;
                color: ${props => props.theme['base-text']};
                line-height: 1.5;
                cursor: pointer;
                transition: 0.2s ease-in-out;

                &:hover {
                    background: ${props => props.theme['base-hover']};
                }
            }
        }
    }

    > p {
        display: flex;
        justify-content: flex-end;
        font-weight: 700;
        color: ${props => props.theme['base-text']};
        line-height: 1.3;
        flex: 1;
    }

`