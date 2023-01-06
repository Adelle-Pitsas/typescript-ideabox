import { Link } from 'react-router-dom'
import { Article } from '../Interfaces/Interfaces'
import './Card.css'

const Card = ({title, abstract, date, id, url}: Article) => {
  return (
    <Link to={`/${id}`} className='card'>
      <h3>{title}</h3>
      <p>{date}</p>
      <a href={url}>Link to NYT</a>
    </Link>
  )
}

export default Card