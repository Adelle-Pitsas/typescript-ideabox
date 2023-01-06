import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Article } from '../Interfaces/Interfaces'
import { key } from '../Util/key'
import { getArticles } from '../apiCalls'
import cleanData from '../Util/util'
import Articles from '../Ideas/Articles'


function App() {

  const [articles, setArticles] = useState<Article[]>([])

  useEffect (() => {
    getArticles(key)
    .then(data => {
      console.log(data)
      setArticles(cleanData(data.results))
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>TypeScript IdeaBox</h1>
      </header>
      <Routes>
        <Route path='/' element = {<Articles articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
