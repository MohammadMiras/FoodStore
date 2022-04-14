import {Buy_pizzle , Buy_sandwich} from './FoodType'

const foodstate ={
    pizzle:15,
    sandwich:10
}

const FoodReducer =(state = foodstate ,action)=>{
    switch (action.type) {
        case Buy_pizzle:
            return {...state,pizzl : state.pizzle - 1}
        case Buy_sandwich:
            return {...state , sandwich : state.sandwich - 1}
        default:
           return state
    }
}

export default FoodReducer
