import { ChangeEvent, useContext } from "react"
import { CoffeeCartContext } from "../../contexts/CoffeesContext"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard"
import { CheckoutContainer } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from "react-router-dom"

const newOrderFormValidationSchema = zod.object({
    cep: zod.number(),
    rua: zod.string(),
    numero: zod.number(),
    complemento: zod.string(),
    bairro: zod.string(),
    cidade: zod.string(),
    uf: zod.string(),
    payment: zod.string(),
})

export function Checkout() {

    const { cartCoffees, coffeeList, setNewCoffeeList, removeCoffeeFromCart, setCoffeeQuantity, resetState } = useContext(CoffeeCartContext)

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(newOrderFormValidationSchema),
    })

    const navigate = useNavigate()

    function changeCoffeeListQuantity(id: string, value: number) {
        let newCoffeList = [...coffeeList]

        newCoffeList.map(coffee => {
            if(coffee.id == id) {
                coffee.quantidade = value
            }
        })

        setNewCoffeeList(newCoffeList)
    }

    function changeCoffeeCheckoutQuantity(event: ChangeEvent<HTMLInputElement>) {
        changeCoffeeListQuantity(event.target.id, Number(event.target.value))
        setCoffeeQuantity(event.target.id, Number(event.target.value))
    }

    function removeCoffee(coffeeId: string) {
        changeCoffeeListQuantity(coffeeId, 1)
        removeCoffeeFromCart(coffeeId)
    }

    function saveCheckoutInfo(data: any) {
        const stateJSON = JSON.stringify(data)
        localStorage.setItem('@coffee-delivery:checkout-info-1.0.0', stateJSON)
        resetState()
        navigate('/confirmedorder')
    }

    const totalDeItens = cartCoffees.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.preco * currentValue.quantidade), 0
    )

    const isConfirmButtonDisabled = totalDeItens > 0 ? false : true

    return(
        <CheckoutContainer>
            <form action="submit" onSubmit={handleSubmit(saveCheckoutInfo)}>
                <div>
                    <h2>Complete seu pedido</h2>
                    <div>
                        <header>
                            <MapPinLine id="pin" size={22} />
                            <div>
                                <p>Endereço de Entrega</p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>
                        <div>
                            <input type="text" placeholder="CEP" {...register('cep', {valueAsNumber: true})}/>
                            <input type="text" placeholder="Rua" {...register('rua')}/>
                            <div>
                                <input type="text" placeholder="Número" {...register('numero' , {valueAsNumber: true})}/>
                                <input type="text" placeholder="Complemento (opcional)" {...register('complemento' )}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Bairro" {...register('bairro')}/>
                                <input type="text" placeholder="Cidade" {...register('cidade')}/>
                                <input type="text" placeholder="UF" {...register('uf')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <header>
                            <CurrencyDollar id="dollar" size={22} />
                            <div>
                                <p>Pagamento</p>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </header>
                        <ul id="filter-options">
                            <li><input type="radio" value="Cartão de Crédito" data-filter_id="credit" {...register('payment')}/> <CreditCard size={20} /> CARTÃO DE CRÉDITO</li>
                            <li><input type="radio" value="Cartão de Débito" data-filter_id="debit" {...register('payment')}/> <Bank size={20} /> CARTÃO DE DÉBITO</li>
                            <li><input type="radio" value="Dinheiro" data-filter_id="money" {...register('payment')}/> <Money size={20} /> DINHEIRO</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Cafés selecionados</h2>
                    <div>
                        <div>
                            {cartCoffees.map(coffee => {
                                return(
                                    <CheckoutCoffeeCard 
                                        key={coffee.id}
                                        id={coffee.id}
                                        imgsrc={coffee.imgsrc}
                                        nome={coffee.nome}
                                        preco={coffee.preco}
                                        quantidade={coffee.quantidade}
                                        changeCoffeeQuantity={changeCoffeeCheckoutQuantity}
                                        removeCoffee={removeCoffee}
                                    />
                                )
                            })}
                        </div>
                        <p>
                            <span>Total de itens </span>
                            <span>R$ {totalDeItens.toFixed(2).replace(".", ",")}</span>
                        </p>
                        <p>
                            <span>Entrega </span>
                            <span>R$ 3,50</span>
                        </p>
                        <p>
                            <span>Total </span>
                            <span>R$ {totalDeItens != 0 ? (totalDeItens + 3.5).toFixed(2).replace(".", ",") : (0).toFixed(2).replace(".", ",") }</span>
                        </p>
                        <button type="submit" disabled={isConfirmButtonDisabled}>CONFIRMAR PEDIDO</button>
                    </div>
                </div>
            </form>
        </CheckoutContainer>
    )
}
