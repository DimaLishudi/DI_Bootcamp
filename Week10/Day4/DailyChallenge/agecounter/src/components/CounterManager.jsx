import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";
import Counter from "./Counter";

export function CounterManager() {
  const isLoading = useSelector(state => state.counter.isLoading);

  if (isLoading) {
    return (<LoadingScreen/>);
  }
  return (<Counter/>);
}

export default CounterManager;