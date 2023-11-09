import './Promo.css'
import logo from '../../images/hero_logo.svg'

export default function Promo() {
 

    return(
        <section className='promo'>
        <h1 className='promo__text'>Учебный проект студента факультета  Веб&#8209;разработки.</h1>
        <img
          className="promo__logo"
          src={logo}
          alt="лого"
        />
      </section>
    )
}