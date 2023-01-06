import React from 'react'
import { Article } from '../Interfaces/Interfaces'
import Card from '../Card/Card'
import './Articles.css'

const Articles = ({ articles }: {articles: Article[]}) => {
  const allArticles = articles.map((article : Article) => {
    return <Card 
      title={article.title}
      abstract={article.abstract}
      date={article.date}
      id={article.id}
      url={article.url}
    />
  })
  return (
    <div className='allArticles'>
      {allArticles}
    </div>
  )
}

export default Articles