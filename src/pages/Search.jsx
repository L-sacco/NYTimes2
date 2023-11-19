import "./Search.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import SearchBlock from "../components/SearchBlock";
import { useParams } from "react-router-dom";
// import fakeData from "../assets/array.js"; // FOR TESTING PURPOSES

export default function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchUrl = import.meta.env.VITE_API_SEARCH_URL;
  const { q } = useParams();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const snackBar = useRef(null);
  const [snackBarText, setSnackBarText] = useState("Errore generico! Prova ad aggiornare la pagina.");

  const getData = async () => {
    setLoading(true);
    console.log("Fetching data...");
    await axios
      .get(`${searchUrl}q=${value}&page=${page}&api-key=${apiKey}`)
      .then((res) => {
        setArticles((prev) => [...prev, ...res.data.response.docs]);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setSnackBarText("Errore nel caricamento degli articoli. Prova ad aggiornare la pagina tra qualche secondo.");
        console.log(error);
      });
  };

  useEffect(() => { // if query changes directly from url
    console.log("Query changed: " + q);
    setValue(q.toString().replace(/ /g, "+"));
  }, [q]);

  useEffect(() => { // if value changes - / - searching while on search page already
    if (!error && value && value != "") {
      console.log("New value: " + value);
      setArticles([]);
      getData();
      // setArticles([(prev) => [...prev, ...fakeData()]]); // FOR TESTING PURPOSES
    }
  }, [value]);

  useEffect(() => { // if user clicks on Load More
    if (!error && value && value != "") {
      console.log("New page:", page);
      getData();
      // setArticles((prev) => [...prev, ...fakeData()]); // FOR TESTING PURPOSES
    }
  }, [page]);

  useEffect(() => { // max 10 pages from api even if at 5/6 it gives 429 :(
    if (error && snackBar) {
      if (page > 9) {
        setSnackBarText("Limite articoli raggiunto!");
      }
      snackBar.current.className = "snackbar show";
      setTimeout(function () {
        snackBar.current.className = "snackbar";
      }, 7000);
    }
  }, [error]);

  return (
    <>
      <div className="search-block-container">
        <h6 style={{ textAlign: "center" }}>Showing results for: </h6>
        <h3 style={{ textAlign: "center" }}>{value.replace(/\+/g, " ").toUpperCase()}</h3>
        <div className="snackbar" ref={snackBar} style={{ textAlign: "center", color: "red" }}>
          <span className="material-symbols-outlined sb-bg">error</span>
          <h5>{snackBarText}</h5>
        </div>
        {articles.length > 0 &&
          articles.map((article, index) => {
            return (
              <SearchBlock
                key={uuidv4()}
                web_url={article.web_url}
                multimedia={article.multimedia}
                title={article.title}
                section_name={article.section_name}
                subsection_name={article.subsection_name}
                headline={article.headline.main}
                abstract={article.abstract}
                byline={article.byline.original}
                index={index} // for testing purposes
              />
            );
          })}
        {articles.length > 0 && (
          <div className="load-more">
            <button className="load-button" onClick={() => setPage(page + 1)}>
              {loading ? "Loading..." : "Load More..."}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
