import React from 'react'

import Counter from './components/counter/Counter'
import RandomUserData from './components/fetchRandomData/RandomUserData'
import FormSanta from './components/formSanta/FormSanta'
import Router from './components/react-router/Router'
import SearchFilter from './components/searchFilter/SearchFilter'

export default function App() {
  return (
    <div className="container">
    <Counter/>
    <FormSanta/>
    <SearchFilter/>
    <RandomUserData/>
    <Router/>
   </div>
  )
};