import React from "react";

import Counter from "./Components/counter/Counter";
import RandomUserData from "./Components/fetchRandomData/RandomUserData";
import FormSanta from "./Components/formSanta/FormSanta";
import Router from "./Components/react-router/Router";
import SearchFilter from "./Components/searchFilter/SearchFilter";
export default function App() {
  return (
    <div className="container">
      <Counter />
      <FormSanta />
      <SearchFilter />
      <RandomUserData />
      <Router />
    </div>
  );
}
