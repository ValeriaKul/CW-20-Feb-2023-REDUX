/* npm i redux react-redux  */

import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../../store/reducer/clickerReducer";
import AddForm from "../AddForm";
import MinusForm from "../MinusForm";
import TasksContainer from "../TasksContainer";

function App() {
  const state = useSelector((state) => state.clicker);
 
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

 
  return (
    <div>
      <p>State: {state}</p>
      <AddForm />
      <MinusForm />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={clear}>CLEAR</button>
      <TasksContainer />
    </div>
  );
}

export default App;
