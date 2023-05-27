import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.5rem;

    form {
        display: flex;
        align-items: start;
        gap: 2rem;
        padding: 1rem;

        h2 {
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.125rem;
            color: ${props => props.theme['base-subtitle']};
        }

        > div:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 0.9375rem;

            > div:nth-child(2) {
                display: flex;
                flex-direction: column;
                background: ${props => props.theme['base-card']};
                border-radius: 6px;
                padding: 2.5rem;
                gap: 2rem;

                header {
                    display: flex;
                    gap: 0.5rem;
                    
                    p {
                        color: ${props => props.theme['base-subtitle']};
                        line-height: 1.3;
                    }

                    p:nth-child(2) {
                        font-size: 0.875rem;
                        color: ${props => props.theme['base-text']};
                        line-height: 1.3;
                    }

                    #pin {
                        color: ${props => props.theme['yellow-dark']};
                    }
                    
                    #dollar {
                        color: ${props => props.theme['purple']};
                    }
                }
                
                > div {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    > div {
                        display: flex;
                        gap: 0.75rem;
                    }

                    > input:nth-child(1) {
                        max-width: 12.5rem;
                    }

                    > input:nth-child(2) {
                        flex: 1;
                    }

                    > div {
                        input:nth-child(1) {
                            max-width: 12.5rem;
                        }
                        input:nth-child(2) {
                            flex: 1;
                        }
                        input:nth-child(3) {
                            max-width: 3.75rem;
                        }
                    }

                    input {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        background: ${props => props.theme['base-input']};
                        border: 1px solid ${props => props.theme['base-button']};
                        border-radius: 4px;
                        box-shadow: none;
                        color: ${props => props.theme['base-text']};

                        &:focus {
                            border-color: ${props => props.theme['yellow-dark']};
                        }

                        &::placeholder {
                            color: ${props => props.theme['base-label']};
                        }
                    }
                }
            }

            > div:nth-child(3) {
                display: flex;
                flex-direction: column;
                background: ${props => props.theme['base-card']};
                border-radius: 6px;
                padding: 2.5rem;
                gap: 2rem;

                header {
                    display: flex;
                    gap: 0.5rem;
                    
                    p {
                        color: ${props => props.theme['base-subtitle']};
                        line-height: 1.3;
                    }

                    p:nth-child(2) {
                        font-size: 0.875rem;
                        color: ${props => props.theme['base-text']};
                        line-height: 1.3;
                    }

                    #pin {
                        color: ${props => props.theme['yellow-dark']};
                    }
                    
                    #dollar {
                        color: ${props => props.theme['purple']};
                    }
                }

                ul {
                    display: flex;
                    list-style: none;
                    flex-wrap: wrap;
                    gap: 0.75rem;

                    li {

                        svg {
                            color: ${props => props.theme['purple']};
                        }

                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 0.5rem;
                        font-size: 0.75rem;
                        min-width: 12.5rem;
                        color: ${props => props.theme['base-text']};
                        line-height: 1.5;
                        background: ${props => props.theme['base-button']};
                        border: 1px solid transparent;
                        transition: 0.2s ease-in-out;
                        border-radius: 6px;
                        flex: none;
                        padding: 1rem;

                        &:hover {
                            background: ${props => props.theme['base-hover']};
                        }

                        &:has(input[type='radio']:checked) {
                            background-color: ${props => props.theme['purple-light']};
                            border: 1px solid ${props => props.theme['purple']};
                        }

                    }
                }
            }
        }

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: 0.9375rem;

            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 2.5rem;
                background: ${props => props.theme['base-card']};
                border-radius: 6px 44px;
                gap: 0.75rem;

                > div {
                    width: 100%;
                }

                > p {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    color: ${props => props.theme['base-text']};
                }

                p:nth-of-type(1) {
                    span:first-child {
                        font-size: 0.875rem;
                    }
                }

                p:nth-of-type(2) {
                    span:first-child {
                        font-size: 0.875rem;
                    }
                }

                > p:last-of-type {
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                > button {
                    align-self: center;
                    padding: 0.75rem 0.5rem;
                    margin-top: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${props => props.theme['yellow']};
                    border-radius: 6px;
                    cursor: pointer;
                    transition: 0.2s ease-in-out;
                    border: 0;
                    width: 23rem;

                    font-size: 0.875rem;
                    line-height: 1.6;
                    font-weight: 700;
                    color: ${props => props.theme['white']};

                    &:hover {
                        background: ${props => props.theme['yellow-dark']};
                    }
                }

            }
        }
    }

`