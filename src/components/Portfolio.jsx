import { Link } from 'react-router-dom'
import portfolio from '../data/portfolio.json'

//NOTE: Está sendo utilizado como página, mas deverá ser componente mesmo!
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {portfolio.map((project) => (
          <li key={project.id}>
            <Link to={`/portfolio/${project.id}`}>{project.company.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}
