import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__block">
          <p className="aboutMe__name">Никита</p>
          <p className="aboutMe__job">Фронтенд-разработчик, 25 лет</p>
          <p className="aboutMe__info">
            Я родился и живу в Тюмени, получил высшее инженерное образование в ТИУ. 
            Я люблю слушать музыку, а ещё увлекаюсь автомобилями и животными.
             Недавно начал кодить. С 2019 занимаюсь автомобилями и всем что с ними связанно.
             Уже во время учебы начал заниматься фриланс-заказами и активно развиваюсь в новой сфере.
          </p>
          <Link to={'https://github.com/kot172'} target='_blank' className="aboutMe__github">Github</Link>
        </div>
        <img src={avatar} className="aboutMe__avatar" alt="avatar"></img>
      </div>
    </section>
  );
}
