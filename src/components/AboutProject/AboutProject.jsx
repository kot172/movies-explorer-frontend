import './AboutProject.css'

export default function AboutProject() {
 

    return(
        <section className='aboutProject' id='aboutProject'>
        <h2 className='aboutProject__title'>О проекте</h2>
        <div className='aboutProject__container'>
        <div className='aboutProject__container-block'>
            <h2 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h2>
            <h3 className='aboutProject__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
        </div>
        <div className='aboutProject__block'>
            <h2 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h2>
            <h3 className='aboutProject__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
        </div>
        </div>
        <div className='aboutProject__progress'>
        <p className='aboutProject__progress-m'>1 неделя</p>
        <p className='aboutProject__progress-l'>4 недели</p>
        <span className='aboutProject__progress-m aboutProject__progress-span'>Back-end</span>
        <span className='aboutProject__progress-l aboutProject__progress-span'>Front-end</span>
        </div>
      </section>
    )
}