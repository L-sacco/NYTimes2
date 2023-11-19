import NewsCard from "./NewsCard";
import "./NewsBlock2.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default function NewsBlock2(props) {
  NewsBlock2.propTypes = {
    articles: PropTypes.array,
  };

  return (
    <>
      <div className="block2-container">
        {props.articles.map((article, index) => {
          return (
            <a
              className="block2-card"
              href={article.url}
              key={uuidv4()}
              target="_blank"
              rel="noopener noreferrer">
              {props.articles[index].multimedia && (
                <img src={props.articles[index].multimedia[2].url} alt={props.articles[0].title} />
              )}
              <NewsCard title={article.title} abstract={article.abstract} />
            </a>
          );
        })}
      </div>
    </>
  );
}
