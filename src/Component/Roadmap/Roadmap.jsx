"use client";
import style from "./roadmap.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { mapDatas } from "./roadmapData";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Roadmap = () => {
//   const [nextSlide, setNextSlide] = useState(0);
//   const roadmapPage = 3;
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    if(swiperRef.current) {
        swiperRef.current.slideNext()
    }
  };
  const handlePrevSlide = () => {
    if(swiperRef.current) {
        swiperRef.current.slidePrev()
    }
  };



  // Extract data for the current page
//   const totalPages = Math.ceil(mapDatas.length / roadmapPage);
//   const roadmapPerPage = mapDatas.slice(
//     nextSlide * roadmapPage,
//     (nextSlide + 1) * roadmapPage
//   );
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 3000);

//     return () => clearInterval(interval); 
//   }, [nextSlide]);

  return (
    <section className={style.divs}>
      <div className={style.div}>
        <h1 className={style.header}>Our Roadmap</h1>
        <div className={style.arrow}>
          <div className={style.backwardarrow} onClick={handlePrevSlide}>
            <ArrowBackIcon
              className={style.arrowkey}
              style={{ fontSize: "1.5rem", fontWeight: "800" }}
            />
          </div>
          <div className={style.backwardarrow} onClick={handleNextSlide}>
            <ArrowForwardIcon
              className={style.arrowkey}
              style={{ fontSize: "1.5rem", fontWeight: "800" }}
            />
          </div>
        </div>
      </div>
      <Swiper
        className={style.content}
        slidesPerView={2}
        spaceBetween={30}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
            swiperRef.current = swiper; 
          }}
      >
        {mapDatas.map((data) => (
          <SwiperSlide className={style.contents} key={data.id}>
            <div className={style.date}>{data.date}</div>
            <div className={style.vertical}></div>
            <div className={style.header}>
              <div className={style.circle}>
                <div className={style.innercircle}></div>
              </div>
              <div className={style.title}>{data.title}</div>
            </div>
            <div className={style.para}>{data.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Roadmap;
