import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Coffee {
    id: string;
    imgsrc: string;
    nome: string;
    categoria: string[];
    descricao: string;
    quantidade: number;
    preco: number;
}

interface CoffeesState {
    cartCoffees: Coffee[];
}

export function coffeeReducer(state: CoffeesState, action: any) {

    switch(action.type) {

        case ActionTypes.ADD_NEW_COFFEE:
            return produce(state, (draft) => {
                draft.cartCoffees.push(action.payload.newCoffee)
            })

        case ActionTypes.REMOVE_COFFEE: {
            return produce(state, (draft) => {
                draft.cartCoffees = draft.cartCoffees.filter(coffee => coffee.id != action.payload.coffeeId)
            })
        }

        case ActionTypes.CHANGE_COFFEE_QUANTITY: {
            const coffeeIndex = state.cartCoffees.findIndex((coffee) => {
                return coffee.id == action.payload.coffeeId
            })

            return produce(state, (draft) => {
                draft.cartCoffees[coffeeIndex].quantidade = action.payload.newQuantity
            })
        }
        
        case ActionTypes.EMPTY_COFFEE_CART: {
            return produce(state, (draft) => {
                draft.cartCoffees = []
            })
        }

        default:
            return state

    }
}
