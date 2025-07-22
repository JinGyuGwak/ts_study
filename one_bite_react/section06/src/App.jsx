import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(2);

  const onClickButton = (value) => {
    console.log(value);
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count1={count} />
      </section>
      <section>
        <Controller onClick1={onClickButton} />
      </section>
    </div>
  );
}

export default App;
