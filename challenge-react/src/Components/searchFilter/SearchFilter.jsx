import React, { useState } from "react";
import './searchFilter.css'

const fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];

const SearchFilter = () => {
  const [word, setWord] = useState("");

  const filterFruits = fruits.filter((fruit) => fruit.toLocaleLowerCase().includes(word))
  const fruitsList = filterFruits.map((fruit, index) => <p key={index}>{fruit}</p>);

  return (
    <div className="container-list">
      <h1>SEARCH FILTER</h1>
      <input value={word} placeholder="Search..." onChange={(e) => setWord(e.target.value)} />
      {fruitsList}
    </div>
  );
};

export default SearchFilter;
