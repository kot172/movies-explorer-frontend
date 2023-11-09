import './Portfolio.css'

export default function Portfolio() {

    return(
        <section className='portfolio'>
<p className='portfolio__caption'>Портфолио</p>
<ul className='portfolio__link'>
<li className='portfolio__link-caption'>
    Статичный сайт<button className='portfolio__link-btn'></button></li>
<li className='portfolio__link-caption'>
    Адаптивный сайт <button className='portfolio__link-btn'></button></li>
<li className='portfolio__link-caption'>
    Одностраничное приложение <button className='portfolio__link-btn'></button></li></ul>
        </section>
    )
}