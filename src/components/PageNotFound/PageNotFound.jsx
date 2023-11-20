import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <main className="pageNotFound">
      <section className="pageNotFound__container">
        <p className="pageNotFound__status">404</p>
        <h1 className="pageNotFound__description">Страница не найдена</h1>
        <Link to="/" className="pageNotFound__link">
          Назад
        </Link>
      </section>
    </main>
  );
}