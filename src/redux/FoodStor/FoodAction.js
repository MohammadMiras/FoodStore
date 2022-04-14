import { Buy_pizzle, Buy_sandwich } from "./FoodType"

export const buyPizzle =()=>{
    return{
        type:Buy_pizzle
    }
}

export const  buySandwich =()=>{
    return{
        type:Buy_sandwich
    }
}