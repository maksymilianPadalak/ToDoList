import "./App.scss";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decremented, incremented } from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncreaseClick = () => {
    dispatch(incremented());
  };

  const handleDecreaseClick = () => {
    dispatch(decremented());
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <Button onClick={handleIncreaseClick}>Increase</Button>
      <Button onClick={handleDecreaseClick}>Decrease</Button>
    </div>
  );
}

export default App;
