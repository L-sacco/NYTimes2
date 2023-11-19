import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addValue } from "../features/searchSlice";
import "./Navbar.css";

const getRandomFloat = () => {
  return ((Math.random() * (0.1 - 2.9) + 0.1) * (Math.round(Math.random()) ? 1 : -1))
    .toFixed(2)
    .toString();
};

export default function NavBar() {
  const [weekday] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [date] = useState(new Date().toLocaleDateString());
  const [day] = useState(weekday[1].toString());
  const [searchValue, setSearchValue] = useState("");
  const values = useSelector((state) => state.search.searchValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stockValuesEl = useRef(null);
  const stockName = ["Nasdaq", "S&P 500", "Dow"];
  const stockValues = [getRandomFloat(), getRandomFloat(), getRandomFloat()];
  const [stockNameText, setStockNameText] = useState(stockName[0]);
  const [stockValuesText, setStockValuesText] = useState(stockValues[0]);
  
  // i will use Stock Market APIs one day... maybe...
  useEffect(() => { // change stock market values every 5s
    var i = 1;
    const stockIntv = setInterval(() => {
      setStockNameText(stockName[i]);
      setStockValuesText(stockValues[i]);
      i++;
      if (i > 2) i = 0;
    }, 5000);
    return () => clearInterval(stockIntv);
  }, []);

  useEffect(() => {
    if (parseFloat(stockValuesText) > 0) {
      stockValuesEl.current.className = "stock-span positive";
    } else {
      stockValuesEl.current.className = "stock-span negative";
    }
  }, [stockValuesText]);

  const addValueHandler = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      return;
    }
    dispatch(addValue(searchValue));
    setSearchValue("");
    navigate(`/search/${searchValue}`);
  };

  return (
    <nav>
      <div className="top-nav">
        <div className="search-box">
          <form onSubmit={addValueHandler} className="top-icons box">
            <input
              className="search-input"
              type="text"
              placeholder="Type to search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              list="searchValues"
              autoComplete="off"
            />
            <datalist id="searchValues">
              {values.map((value) => {
                return (
                  <option key={value.id} value={value.text}>
                    {value.text}
                  </option>
                );
              })}
            </datalist>
            <button type="submit" className="search-button">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>
        </div>

        <div className="top-lang">
          <a href="#">U.S</a>
          <a href="#">International</a>
          <a href="#">Canada</a>
          <a href="#">Español</a>
          <a href="#">中文</a>
        </div>
        <div className="top-buttons">
          <button>SUBSCRIBE FOR €0.50/WEEK</button>
          <button>LOG IN</button>
        </div>
      </div>
      <div className="mid-nav">
        <div className="mid-date">
          {day}, {date} <br /> <a href="#">Today&apos;s Paper</a>
        </div>
        <Link to="/">
          <img
            src="./src/assets/logo.png"
            alt="New York Times Logo"
            style={{ width: "27.5rem" }}
          />
        </Link>
        <div className="stock-div" style={{ textAlign: "end" }}>
          <span className="stock-span">{stockNameText}</span>
          <span ref={stockValuesEl} className="stock-span">
            {stockValuesText}%
          </span>
        </div>
      </div>
      <div className="bot-nav">
        <ul>
          <li>
            U.S.
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            World
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Business
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Arts
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Lifestyle
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Opinion
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>|</li>
          <li>
            Audio
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Games
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Cooking
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            Wirecutter
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
          <li>
            The Atletic
            <svg className="expand-sym" viewBox="0 0 13 8">
              <polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
