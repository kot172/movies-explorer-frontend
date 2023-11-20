import { Link } from 'react-router-dom'
import './NavTab.css'

export default function NavTab() {
 

    return(
        <section className='navTab'>
          <nav className='navTab__block'>
        <a href='#aboutProject'><h2 className='navTab__text'>О проекте</h2></a>
        <a href='#Techs'><h2 className='navTab__text'>Технологии</h2></a>
        <a href='#aboutMe'><h2 className='navTab__text'>Студент</h2></a>
        </nav>
      </section>
    )
}