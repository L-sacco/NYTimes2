import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import "./CarouselCard.css";

export default function CarouselCard(props) {
  CarouselCard.propTypes = {
    multimedia: PropTypes.array,
    title: PropTypes.string,
    url: PropTypes.string,
    section: PropTypes.string,
    subsection: PropTypes.string,
    abstract: PropTypes.string,
    byline: PropTypes.string,
  };

  return (
    <>
      <a className="carousel-card" href={props.url} target="_blank" rel="noopener noreferrer">
        {(props.multimedia && props.multimedia.length > 0 && (
          <div className="carousel-card-image">
            <img src={props.multimedia[2].url} alt={props.title} loading="lazy" />
          </div>
        )) || (
            <img src="../src/assets/No-Image-Placeholder.png" alt="Image Placeholder" loading="lazy" />
        )}
        <div className="carousel-card-content">
          <h6 style={{ textAlign: "start" }}>
            {props.section}
            {props.subsection && ", " + props.subsection}
          </h6>
          <NewsCard title={props.title} abstract={props.abstract} />
          <h6>{props.byline}</h6>
        </div>
      </a>
    </>
  );
}
