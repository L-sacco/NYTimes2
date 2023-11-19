import { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewsCarousel(props) {
  NewsCarousel.propTypes = {
    articles: PropTypes.array,
  };
  
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 850) setMobile(true);
      else setMobile(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        rewind={true}
        slidesPerView='auto'
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel-container">
        {props.articles.length > 0 &&
          props.articles.map((article) => {
            return (
              <>
                {article.abstract && article.abstract != "" && (
                  <SwiperSlide key={uuidv4()}>
                    <CarouselCard
                      multimedia={article.multimedia}
                      title={article.title}
                      url={article.url}
                      section={article.section}
                      subsection={article.subsection}
                      abstract={article.abstract}
                      byline={article.byline}
                    />
                  </SwiperSlide>
                )}
              </>
            );
          })}
      </Swiper>
    </>
  );
}
