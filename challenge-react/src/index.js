import React from "react";
import ReactDOM from "react-dom/client";

import Counter from "./Components/counter/Counter";
import FormSanta from "./Components/formSanta/FormSanta";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
  <div className="container">
   <Counter/>
   <FormSanta/>
  </div>
); 