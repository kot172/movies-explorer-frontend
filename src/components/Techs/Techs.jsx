import './Techs.css'

export default function Techs() {

    return(
        <section className='techs'>
            <div className='techs__info'>
            <h2 className='techs__title'>Технологии</h2>
            <p className='techs__text'>7 технологий</p>
            <p className='techs__caption'>На курсе веб-разработки мы освоили технологии,
             которые применили <br></br>в дипломном проекте.</p>
             <ul className='techs__container'>
                <li className='techs__container-block'>HTML</li>
                <li className='techs__container-block'>CSS</li>
                <li className='techs__container-block'>JS</li>
                <li className='techs__container-block'>React</li>
                <li className='techs__container-block'>Git</li>
                <li className='techs__container-block'>Express.js</li>
                <li className='techs__container-block'>mongoDB</li>
             </ul>
             </div>
        </section>
    )
}