import { Coffee } from "./reducer";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    CHANGE_COFFEE_QUANTITY = 'CHANGE_COFFEE_QUANTITY',
    EMPTY_COFFEE_CART = 'EMPTY_COFFEE_CART',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            newCoffee,
        },
    }
}

export function removeCoffeeAction(coffeeId: string) {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            coffeeId,
        },
    }
}

export function changeCoffeeQuantityAction(coffeeId: string, newQuantity: number) {
    return {
        type: ActionTypes.CHANGE_COFFEE_QUANTITY,
        payload: {
            coffeeId,
            newQuantity
        },
    }
}

export function emptyCoffeeCartAction() {
    return {
        type: ActionTypes.EMPTY_COFFEE_CART,
    }
}
