import "./NewsCard.css";
import PropTypes from "prop-types";

export default function NewsCard(props) {
  NewsCard.propTypes = {
    title: PropTypes.string,
    abstract: PropTypes.string,
  };
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <h5 className="abstract">{props.abstract}</h5>
    </div>
  );
}
