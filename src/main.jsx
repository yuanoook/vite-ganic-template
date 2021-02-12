import "./style.less";
import GanicDOM from "ganic-dom";
import GanicDomAir from "ganic-dom-air";
import { useInterval } from "ganic-usex";
import { useStorage } from "ganic-pandora";

const App = () => {
  const [count, setCount] = useStorage('count', 0)
  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  return <>Hello World {count}</>;
};

GanicDOM.render(<App />, document.getElementById("app"), GanicDomAir);
