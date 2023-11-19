import NewsCard from "./NewsCard";
import "./SearchBlock.css";
import PropTypes from "prop-types";

export default function SearchBlock(props) {
  SearchBlock.propTypes = {
    web_url: PropTypes.string,
    multimedia: PropTypes.array,
    title: PropTypes.string,
    section_name: PropTypes.string,
    subsection_name: PropTypes.string,
    headline: PropTypes.string,
    abstract: PropTypes.string,
    byline: PropTypes.string,
    index: PropTypes.number, // for testing purposes
  };

  return (
    <>
      <a className="search-block-card" href={props.web_url} target="_blank" rel="noopener noreferrer">
        {props.multimedia && props.multimedia.length > 0 && (
          <div className="search-block-card-image">
            <img src={"https://static01.nyt.com/" + props.multimedia[0].url} alt={props.title} />
          </div>
        )}
        <div className="search-block-card-content">
          <h6 style={{ textAlign: "start" }}>
            {props.section_name}
            {props.subsection_name && ", " + props.subsection_name}
          </h6>
          <NewsCard title={props.headline} abstract={props.abstract} />
          <h6>{props.byline}</h6>
          {/* <p>{props.index}</p> for testing purposes */}
        </div>
      </a>
    </>
  );
}
