import './Footer.css'

export default function Footer() {

    return(
        <footer className='footer'>
            <div className='footer__container'>
            <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__down'>
                <span>&copy; {new Date().getFullYear()}</span>
                <div className='footer__donw-right'><span>Яндекс.Практикум</span>
                <span>Github</span></div>
            </div></div>
        </footer>
    )
}

