import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;

    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                border-radius: 6px;
                padding: 0.5rem;
                background: ${props => props.theme['yellow-light']};
                color: ${props => props.theme['yellow-dark']};
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 0.55rem;

                position: absolute;
                width: 20px;
                height: 20px;
                right: 150px;
                top: 29px;

                font-size: 0.75rem;
                background: ${props => props.theme['yellow-dark']};
                color: ${props => props.theme['white']};
                border-radius: 1000px;

                flex: none;
                order: 1;
                flex-grow: 0;
                z-index: 1;
            }

        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            background: ${props => props.theme['purple-light']};
            padding: 0.5rem;
            border-radius: 6px;
            color: ${props => props.theme['purple-dark']};
            font-size: 0.875rem;
            line-height: 1.3;

            svg {
                color: ${props => props.theme['purple']};
            }
        }
    }
`