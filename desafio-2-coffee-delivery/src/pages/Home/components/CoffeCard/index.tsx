import { ShoppingCartSimple } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import { CoffeeCardContainer } from "./styles";

interface CoffeeCardProps {
    id: string;
    imgsrc: string;
    nome: string;
    categoria: string[];
    descricao: string;
    quantidade: number;
    preco: number;
    changeCoffeeQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
    coffeeToCart: (id: string) => void;
}

export function CoffeeCard( { id, imgsrc, nome, categoria, descricao, preco, quantidade, changeCoffeeQuantity, coffeeToCart }:CoffeeCardProps ) {

    function handleChangeCoffeeQuantity(event: ChangeEvent<HTMLInputElement>) {
        changeCoffeeQuantity(event)
    }

    function handleToCart(event: FormEvent) {
        event.preventDefault();
        const target = event.target as HTMLInputElement
        coffeeToCart(target.id)
    }

    return(
        <CoffeeCardContainer>
            <form id={id} action="submit" onSubmit={handleToCart}>
                <img src={imgsrc} alt="" />
                <div>
                    {categoria.map((cat) => {
                        return <span key={cat}>{cat} </span>
                        })
                    }
                </div>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <footer>
                    <p><span>R$</span> {preco.toFixed(2).replace(".", ",")}</p>
                    <div>
                        <input id={id} onChange={handleChangeCoffeeQuantity} type="number" min="1" max="9" step="1" value={quantidade}/>
                        <button><ShoppingCartSimple size={20} weight="fill"/></button>
                    </div>
                </footer>
            </form>
        </CoffeeCardContainer>
    )
}
