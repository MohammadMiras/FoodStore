import { Provider } from "react-redux";
import MyStor from "./MyStor";
import FoodStor from  '../redux/FoodStor/FoodStor'

function App() {
  return (
    <>
    <Provider store={FoodStor}>
      <h1> jjjjj</h1>
      <MyStor/>
    </Provider>
    </>
    
  );
}

export default App;
