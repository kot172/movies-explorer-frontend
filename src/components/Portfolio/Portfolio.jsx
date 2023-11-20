import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__caption">Портфолио</p>
      <ul className="portfolio__link">
        <li className="portfolio__link-caption">
          <a
            className="portfolio__link-btn"
            target="_blank"
            href="https://github.com/kot172/how-to-learn"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <button type="button" className="portfolio__link-cursor"></button>
          </a>
        </li>
        <li className="portfolio__link-caption">
          <a
            className="portfolio__link-btn"
            target="_blank"
            href="https://github.com/kot172/russian-travel"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <button type="button" className="portfolio__link-cursor"></button>
          </a>
        </li>
        <li className="portfolio__link-caption">
          <a
            className="portfolio__link-btn"
            target="_blank"
            href="https://github.com/kot172/react-mesto-auth"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <button type="button" className="portfolio__link-cursor"></button>
          </a>
        </li>
      </ul>
    </section>
  );
}
