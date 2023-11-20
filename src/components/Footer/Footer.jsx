import './Footer.css'

export default function Footer() {

    return(
        <footer className='footer'>
            <div className='footer__container'>
            <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__down'>
                <span>&copy; {new Date().getFullYear()}</span>
                <div className='footer__donw-right'>
                <a href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
                <a href='https://github.com/kot172' target='_blank'>
                    Github</a>
                    </div>
            </div></div>
        </footer>
    )
}

