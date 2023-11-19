import NewsCard from "./NewsCard";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./NewsBlock3.css";

export default function NewsBlock3(props) {
  NewsBlock3.propTypes = {
    articles: PropTypes.array,
  };

  return (
    <>
      <div className="block3-container">
        {props.articles.map((article, index) => {
          return (
            <a
              className="block3-card"
              href={article.url}
              key={uuidv4()}
              target="_blank"
              rel="noopener noreferrer">
              <NewsCard title={article.title} abstract={article.abstract} />
            </a>
          );
        })}
      </div>
    </>
  );
}
