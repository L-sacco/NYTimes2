import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./NewsBlock1.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default function NewsBlock1(props) {
  NewsBlock1.propTypes = {
    articles: PropTypes.array,
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setMobile(true);
      else setMobile(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="block1-container">
        <div className="block1-news">
          {props.articles.map((article, index) => {
            return (
              <a href={article.url} key={uuidv4()} target="_blank" rel="noopener noreferrer">
                <NewsCard title={article.title} abstract={article.abstract} index={index} />
              </a>
            );
          })}
        </div>
        {!mobile && props.articles[3].multimedia && props.articles[3].multimedia.length > 0 && (
          <div className="block1-image">
            <a href={props.articles[3].url}>
              <img src={props.articles[3].multimedia[1].url} alt={props.articles[0].title} />
              <h6>{props.articles[3].multimedia[1].copyright}</h6>
              <h4>{props.articles[3].title}</h4>
              <h5>{props.articles[3].abstract}</h5>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
