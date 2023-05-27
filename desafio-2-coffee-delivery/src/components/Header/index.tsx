import logoCoffeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../contexts/CoffeesContext'

export function Header() {

    const { cartCoffees } = useContext(CoffeeCartContext)

    return(
        <HeaderContainer>
            <NavLink to="/" title="Coffee Delivery">
                <img src={logoCoffeDelivery} alt="" />
            </NavLink>
            <div>
                <span> <MapPin size={20} weight='fill' /> Rio de Janeiro, RJ</span>
                <NavLink to="/checkout" title="Checkout">
                    <div><ShoppingCart size={20} weight='fill' /></div>
                    {cartCoffees.length > 0 && <span>{cartCoffees.length}</span>}
                </NavLink>
            </div>
        </HeaderContainer>
    )
}
