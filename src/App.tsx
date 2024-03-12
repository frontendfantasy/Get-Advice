import { useState } from "react";
import axios from "axios";

import "./App.css";

const App = function () {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get(import.meta.env.VITE_ADVICE_SLIP_API_KEY)
      .then((res) => {
        // const test = res.data.slip.advice; // normal way
        const { advice } = res.data.slip; // by object destruction
        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <section className="card">
        <h1 className="advice">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </section>
    </div>
  );
};

export default App;
