import { ChangeEvent } from "react";
import { CheckoutCoffeeCardContainer } from "./styles";
import { Trash } from "phosphor-react";

interface CheckoutCoffeeCardProps {
    id: string;
    imgsrc: string;
    nome: string;
    quantidade: number;
    preco: number;
    changeCoffeeQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
    removeCoffee: (coffeeId: string) => void;
}

export function CheckoutCoffeeCard( { id, imgsrc, nome, preco, quantidade, changeCoffeeQuantity, removeCoffee}:CheckoutCoffeeCardProps ) {

    function handleChangeCoffeeQuantity(event: ChangeEvent<HTMLInputElement>) {
        changeCoffeeQuantity(event)
    }

    function handleRemoveCoffee(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        const target = event.target as HTMLInputElement
        removeCoffee(target.id)
    }

    return(
        <CheckoutCoffeeCardContainer>
            <img src={imgsrc} alt="" />
            <div>
                <p>{nome}</p>
                <div>
                    <input id={id} onChange={handleChangeCoffeeQuantity} type="number" min="1" max="9" step="1" value={quantidade}/>
                    <button id={id} onClick={handleRemoveCoffee} > <Trash size={16} /> REMOVER</button>
                </div>
            </div>
            <p>R$ {(preco*quantidade).toFixed(2).replace(".", ",")}</p>
        </CheckoutCoffeeCardContainer>
    )
}
