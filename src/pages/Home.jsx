/* eslint-disable react-hooks/exhaustive-deps */
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsBlock1 from "../components/NewsBlock1";
import NewsBlock2 from "../components/NewsBlock2";
import NewsBlock3 from "../components/NewsBlock3";
import NewsCarousel from "../components/Carousel";

export default function Home() {
  const TopStoriesUrl = import.meta.env.VITE_API_TOPSTORIES_URL;
  const mostViewedUrl = import.meta.env.VITE_API_VIEWED_URL;
  const liveFeedUrl = import.meta.env.VITE_API_LIVEFEED_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [topStories, setTopStories] = useState([]);
  const [topViewed, setTopViewed] = useState([]);
  const [liveFeed, setLiveFeed] = useState([]);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 850) setMobile(true);
      else setMobile(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get(`${TopStoriesUrl}${apiKey}`)
      .then((res) => {
        setTopStories([...res.data.results]);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${mostViewedUrl}${apiKey}`)
      .then((res) => {
        setTopViewed([...res.data.results]);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${liveFeedUrl}${apiKey}`)
      .then((res) => {
        setLiveFeed([...res.data.results]);
      })
      .catch((error) => console.log(error));
  }, []);

  if (topStories.length > 0 && topViewed.length > 0) {
    return (
      <main>
        <section className="live-feed">
          <h4 className="live-text">
            <span className="material-symbols-outlined breaking">breaking_news</span>
            <i className="breaking">LIVE NEWS</i>
            <i className="breaking">LIVE NEWS</i>
            <span className="material-symbols-outlined breaking">breaking_news</span>
          </h4>
          <NewsCarousel articles={liveFeed.slice(0)} />
        </section>
        <section className="top-stories">
          {(!mobile && (
            <div className="left">
              <h6 style={{ textAlign: "start", borderBottom: "1px solid #e2e2e2" }}>
                <i>Top news:</i>
              </h6>
              <NewsBlock1 articles={topStories.slice(0, 4)} />
              <NewsBlock2 articles={topStories.slice(4, 6)} />
              <NewsBlock1 articles={topStories.slice(6, 10)} />
              <NewsBlock2 articles={topStories.slice(10, 12)} />
              <NewsBlock1 articles={topStories.slice(12, 16)} />
              <NewsBlock2 articles={topStories.slice(16)} />
            </div>
          )) || (
            <div className="left">
              <h6 style={{ textAlign: "start", borderBottom: "1px solid #e2e2e2" }}>
                <i>Top news:</i>
              </h6>
              <NewsBlock2 articles={topStories.slice(0)} />
            </div>
          )}

          <div className="right">
            <h6 style={{ textAlign: "start", borderBottom: "1px solid #e2e2e2" }}>
              <i>Most viewed:</i>
            </h6>
            <NewsBlock3 articles={topViewed} />
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
}
