import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5rem 10rem;

    header {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding-bottom: 2.5rem;

        > h1 {
            font-family: 'Baloo 2';
            font-weight: 800;
            font-size: 2rem;
            line-height: 1.3;
            color: ${props => props.theme['yellow-dark']};
        }

        > p {
            font-size: 1.25rem;
            line-height: 1.3;
            color: ${props => props.theme['base-subtitle']};
        }

    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6.375rem;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2.5rem;
            background: linear-gradient(white, white) padding-box,
            linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%) border-box;
            border-radius: 6px 36px;
            border: 1px solid transparent;

            li {
                display: flex;
                gap: 0.75rem;

                > div {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    color: ${props => props.theme['base-text']};
                }

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.45rem;
                    border-radius: 1000px;
                    height: fit-content;
                    
                    color: ${props => props.theme['background']};
                }
            }

            li:nth-child(1) {
                span {
                    background-color: ${props => props.theme['purple']};
                }
            }

            li:nth-child(2) {
                span {
                    background-color: ${props => props.theme['yellow']};
                }
            }

            li:nth-child(3) {
                span {
                    background-color: ${props => props.theme['yellow-dark']};
                }
            }
        }

    }
    
`