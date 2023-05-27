import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    max-width: 16rem;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme['base-card']};
        border-radius: 6px 36px;
        padding: 1rem;

        img {
            position: relative;
            top: -30px;
        }

        > div {
            margin-top: -15px;
            padding-bottom: 1rem;
            display: flex;
            gap: 0.25rem;

            span {
                background: ${props => props.theme['yellow-light']};
                color: ${props => props.theme['yellow-dark']};
                border-radius: 100px;
                font-size: 0.625rem;
                padding: 0.25rem 0.5rem;
            }
        }

        h3 {
            padding-bottom: 0.5rem;
            font-family: 'Baloo 2';
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.3;
        }
        
        > p {
            text-align: center;
            font-size: 0.875rem;
            line-height: 1.3;
            color: ${props => props.theme['base-label']};
            padding-bottom: 2.0625rem;
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                font-family: 'Baloo 2';
                font-size: 1.5rem;
                font-weight: 800;
                line-height: 1.3;
                color: ${props => props.theme['base-text']};

                > span {
                    font-family: 'Roboto';
                    font-weight: 400;
                    font-size: 0.875rem;
                }
            }

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
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                background: ${props => props.theme['purple-dark']};
                color: ${props => props.theme['base-card']};
                border-radius: 6px;
                border: 0;
                transition: 0.2s ease-in-out;
                cursor: pointer;
            }

            button:hover {
                background: ${props => props.theme['purple']};
            }
        }
    }
`