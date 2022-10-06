import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const incrementByTen = () => {
    dispatch(actions.incrementByTen(10))
  }

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByTen}>Increment by 10</button>
    </div>
  );
}

export default App;
