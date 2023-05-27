import { ReactNode, createContext, useReducer, useState } from "react";
import { Coffee, coffeeReducer } from "../reducers/coffees/reducer";
import { addNewCoffeeAction, changeCoffeeQuantityAction, emptyCoffeeCartAction, removeCoffeeAction } from "../reducers/coffees/actions";

const coffees = [
    {
        id: '1',
        imgsrc: '/src/assets/expresso.svg',
        nome: 'Expresso Tradicional',
        categoria: ['TRADICIONAL'],
        descricao: 'O tradicional café feito com água quente e grãos moídos',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '2',
        imgsrc: '/src/assets/americano.svg',
        nome: 'Expresso Americano',
        categoria: ['TRADICIONAL'],
        descricao: 'Expresso diluído, menos intenso que o tradicional',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '3',
        imgsrc: '/src/assets/expresso_cremoso.svg',
        nome: 'Expresso Cremoso',
        categoria: ['TRADICIONAL'],
        descricao: 'Café expresso tradicional com espuma cremosa',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '4',
        imgsrc: '/src/assets/cafe_gelado.svg',
        nome: 'Expresso Gelado',
        categoria: ['TRADICIONAL', 'GELADO'],
        descricao: 'Bebida preparada com café expresso e cubos de gelo',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '5',
        imgsrc: '/src/assets/cafe_com_leite.svg',
        nome: 'Café com Leite',
        categoria: ['TRADICIONAL', 'COM LEITE'],
        descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '6',
        imgsrc: '/src/assets/latte.svg',
        nome: 'Latte',
        categoria: ['TRADICIONAL', 'COM LEITE'],
        descricao: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '7',
        imgsrc: '/src/assets/capuccino.svg',
        nome: 'Capuccino',
        categoria: ['TRADICIONAL', 'COM LEITE'],
        descricao: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '8',
        imgsrc: '/src/assets/macchiato.svg',
        nome: 'Macchiato',
        categoria: ['TRADICIONAL', 'COM LEITE'],
        descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '9',
        imgsrc: '/src/assets/mochaccino.svg',
        nome: 'Mochaccino',
        categoria: ['TRADICIONAL', 'COM LEITE'],
        descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '10',
        imgsrc: '/src/assets/chocolate_quente.svg',
        nome: 'Chocolate Quente',
        categoria: ['ESPECIAL', 'COM LEITE'],
        descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '11',
        imgsrc: '/src/assets/cubano.svg',
        nome: 'Cubano',
        categoria: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        descricao: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '12',
        imgsrc: '/src/assets/havaiano.svg',
        nome: 'Havaiano',
        categoria: ['ESPECIAL'],
        descricao: 'Bebida adocicada preparada com café e leite de coco',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '13',
        imgsrc: '/src/assets/arabe.svg',
        nome: 'Árabe',
        categoria: ['ESPECIAL'],
        descricao: 'Bebida preparada com grãos de café árabe e especiarias',
        quantidade: 1,
        preco: 9.90,
    },
    {
        id: '14',
        imgsrc: '/src/assets/irlandes.svg',
        nome: 'Irlandês',
        categoria: ['ESPECIAL', 'ALCOÓLICO'],
        descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        quantidade: 1,
        preco: 9.90,
    },
] as Coffee[]

interface CoffeeCartContextType {
    cartCoffees: Coffee[];
    coffeeList: Coffee[];
    setNewCoffeeList: (newCoffeeList: Coffee[]) => void;
    addCoffeeToCart: (data: Coffee) => void;
    setCoffeeQuantity: (coffeeId: string, newQuantity: number) => void;
    removeCoffeeFromCart: (coffeeId: string) => void;
    resetState: () => void;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

interface CoffeeCartContextProviderProps {
    children: ReactNode;
}

export function CoffeeCartContextProvider( {children}:CoffeeCartContextProviderProps ) {
    
    const [coffeeList, setCoffeeList] = useState(coffees);

    const [coffeeState, dispatch] = useReducer(coffeeReducer, 
    {
        cartCoffees: [],
    })
    
    const { cartCoffees } = coffeeState;

    function setNewCoffeeList(newCoffeeList: Coffee[]) {
        setCoffeeList(newCoffeeList)
    }

    function addCoffeeToCart(data: Coffee) {

        const newCoffee: Coffee = {
            id: data.id,
            imgsrc: data.imgsrc,
            nome: data.nome,
            categoria: data.categoria,
            descricao: data.descricao,
            quantidade: data.quantidade,
            preco: data.preco,
        }

        dispatch(addNewCoffeeAction(newCoffee))
    }

    function setCoffeeQuantity(id: string, quantity: number) {
        dispatch(changeCoffeeQuantityAction(id, quantity))
    }

    function removeCoffeeFromCart(id: string) {
        dispatch(removeCoffeeAction(id))
    }

    function resetState() {
        const resetedCoffeeList = coffeeList.map((coffee) => {
            coffee.quantidade = 1
            return coffee
        })
        setCoffeeList(resetedCoffeeList)
        dispatch(emptyCoffeeCartAction())
    }

    return(
        <CoffeeCartContext.Provider value={{cartCoffees, coffeeList, setNewCoffeeList, addCoffeeToCart, setCoffeeQuantity, removeCoffeeFromCart, resetState}}>
            {children}
        </CoffeeCartContext.Provider>
    )
}
