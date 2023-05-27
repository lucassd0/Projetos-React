import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introImage from '../../assets/Imagem.svg'
import { BadgeContainer, CoffeeList, HomeContainer, IntroContainer } from "./styles";
import { CoffeeCard } from "./components/CoffeCard";
import { ChangeEvent, useContext } from "react";
import { CoffeeCartContext } from "../../contexts/CoffeesContext";

export function Home() {

    const { cartCoffees, coffeeList, setNewCoffeeList, addCoffeeToCart, setCoffeeQuantity } = useContext(CoffeeCartContext)

    function changeCoffeeQuantity(event: ChangeEvent<HTMLInputElement>) {
        let newCoffeList = [...coffeeList]

        newCoffeList.map(coffee => {
            if(coffee.id == event.target.id) {
                coffee.quantidade = Number(event.target.value)
            }
        })

        setNewCoffeeList(newCoffeList)

    }

    function coffeeToCart(id: string) {
        const selectedCoffee = coffeeList.find(coffee => coffee.id == id)

        if(selectedCoffee) {
            const isInTheCart = cartCoffees.find(coffee => coffee.id == selectedCoffee.id)
            if(isInTheCart) {
                setCoffeeQuantity(selectedCoffee.id, selectedCoffee.quantidade)
            }else{
                addCoffeeToCart(selectedCoffee)
            }
        }
    }

    return(
        <HomeContainer>
            <IntroContainer>
                <article>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <footer>
                        <li>
                            <div>
                                <BadgeContainer badgeColor="yellowDark"><ShoppingCart size={20} weight="fill" /></BadgeContainer>
                                <p>Compra simples e segura</p>
                            </div>
                            <div>
                                <BadgeContainer badgeColor="yellow" ><Timer size={20} weight="fill" /></BadgeContainer>
                                <p>Entrega rápida e rastreada</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <BadgeContainer badgeColor="baseText"><Package size={20} weight="fill" /></BadgeContainer>
                                <p>Embalagem mantém o café intacto</p>
                            </div>
                            <div>
                                <BadgeContainer badgeColor="purple"><Coffee size={20} weight="fill" /></BadgeContainer>
                                <p>O café chega fresquinho até você</p>
                            </div>
                        </li>
                    </footer>
                </article>
                <img src={introImage} alt="" />
            </IntroContainer>
            <CoffeeList>
                <h2>Nossos cafés</h2>
                <div>
                    {coffeeList.map((coffee) => {
                        return <CoffeeCard
                            key={coffee.id}
                            id={coffee.id}
                            imgsrc={coffee.imgsrc}
                            nome={coffee.nome}
                            categoria={coffee.categoria}
                            descricao={coffee.descricao}
                            quantidade={coffee.quantidade}
                            preco={coffee.preco}
                            changeCoffeeQuantity={changeCoffeeQuantity}
                            coffeeToCart={coffeeToCart}
                        />
                    })}
                </div>
            </CoffeeList>
        </HomeContainer>
    )
}