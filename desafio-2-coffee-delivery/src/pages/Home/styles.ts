import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 0 10rem;
`

export const IntroContainer = styled.div`
    display: flex;
    gap: 3.5rem;
    align-items: center;
    justify-content: space-around;
    padding-top: 5.875rem;
    padding-bottom: 5.75rem;

    article {
        display: flex;
        flex-direction: column;
        max-width: 36.75rem;


        h1 {
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 3rem;
            line-height: 1.3;
            color: ${props => props.theme['base-title']};
        }

        h2 {
            padding-top: 1rem;
            padding-bottom: 4.125rem;

            font-weight: 400;
            font-style: normal;
            font-size: 1.25rem;
            line-height: 1.3;
            color: ${props => props.theme['base-subtitle']};

        }

        footer {
            display: flex;
            justify-content: space-between;

            li {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.25rem;

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;

                    p {
                        color: ${props => props.theme['base-text']};
                        font-size: 1rem;
                        font-weight: 400;
                    }
                }

            }
        }
    }

`

export const CoffeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 9.8125rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
    }

    > div {
        padding-top: 3.375rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

        footer {
            display: flex;
            align-items: center;
            gap: 1.4375rem;

            div {
                display: flex;
                gap: 0.5rem;
            }
        }
    }
`

interface BadgeProps {
    badgeColor: keyof typeof BADGES_COLORS
}

const BADGES_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple'
} as const

export const BadgeContainer = styled.span<BadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 1000px;
    
    color: ${props => props.theme['background']};
    background-color: ${props => props.theme[BADGES_COLORS[props.badgeColor]]};
    
`
