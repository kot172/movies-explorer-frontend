import './Portfolio.css'

export default function Portfolio() {

    return(
        <section className='portfolio'>
<p className='portfolio__caption'>Портфолио</p>
<ul className='portfolio__link'>
<li className='portfolio__link-caption'>
       Статичный сайт
       <a className='portfolio__link-btn' target='_blank' href='https://github.com/kot172/how-to-learn'>
        </a></li>
<li className='portfolio__link-caption'>
    Адаптивный сайт <a className='portfolio__link-btn' target='_blank' href='https://github.com/kot172/russian-travel'>
        </a></li>
<li className='portfolio__link-caption'>
    Одностраничное приложение <a className='portfolio__link-btn' target='_blank' href='https://github.com/kot172/react-mesto-auth'>
        </a></li></ul>
        </section>
    )
}