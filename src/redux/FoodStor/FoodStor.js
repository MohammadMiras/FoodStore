import { createStore } from "redux";
import FoodReducer from "./FoodReducer";

const  FoodStor = createStore(FoodReducer)


export default FoodStor