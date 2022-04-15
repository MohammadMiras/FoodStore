import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { buyPizzle, buySandwich } from "../redux/FoodStor/FoodAction";


const  MyStor =()=>{
  
  var {pizzle , sandwich } = useSelector((state)=>{return state})
  var disPacth = useDispatch()
  console.log(buyPizzle);
  return(
    <div className="">
      <div className="text-center mt-5 ">        
      <h5 className="text-center  mb-3">تعداد پیتزا:<span  className="puls">{pizzle}</span></h5>
      <h5 className="text-center">تعداد ساندویچ<span className="puls">{sandwich}</span></h5>
      </div>
      <div className="text-center mt-5">
        <button className="btn  btn-success mx-3" onClick={()=>disPacth(buyPizzle())}>خرید پیتزا</button>
        <button className="btn  btn-warning mx-3" onClick={()=>disPacth(buySandwich())}>خرید ساندویچ</button>
      </div>
      
    </div>
  )
}

// const stateToprops = state=>{
//   return{
//     pizzle:state.pizzle,
//     sandwich:state.sandwich
//   }
// }

// const  dispatchToproprs = dispatch=>{
  
//   return{
//     buypizzle:()=>dispatch(buyPizzle()) ,
//     buysandwich:()=>dispatch(buySandwich())
//   }
// }

  // export default connect(stateToprops,dispatchToproprs)(MyStor) ;

  export default MyStor