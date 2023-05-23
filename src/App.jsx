import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResult from './components/SearchResult/SearchResult'

function App() {

  const [result, setResult]= useState([])

  return (
    <div className='App'>
    <div className='container'>
    <SearchBar setResult={setResult}/>
    <SearchResult result={result}/>
    </div>
    </div>
  )
}

export default App
