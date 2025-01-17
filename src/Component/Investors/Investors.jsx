"use client";
// import { useEffect, useState } from "react";
import style from "./investors.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const investorData = [
  {
    id: 1,
    title: "Quotient",
    content:
      "A company that provides all IT services within the ecosystem",
    btn: "EXPLORE",
  },
  {
    id: 2,
    title: "Monday",
    content:
      "Online exchanger, specializing in the exchange of private individual",
    btn: "EXPLORE",
  },
  {
    id: 3,
    title: "Catalog",
    content:
      "Stable cryptocurrency and an important part of the Uniforx system",
    btn: "EXPLORE",
  },
  {
    id: 4,
    title: "Monday",
    content:
      "A company that provides all IT services within the ecosystem",
    btn: "EXPLORE",
  },
  {
    id: 5,
    title: "Catalog",
    content:
      "Online exchanger, specializing in the exchange of private individual",
    btn: "EXPLORE",
  },
  {
    id: 6,
    title: "Quotient",
    content:
      "Stable cryptocurrency and an important part of the Uniforx system",
    btn: "EXPLORE",
  },
  {
    id: 7,
    title: "Qimm",
    content:
      "Stable cryptocurrency and an important part of the Uniforx system",
    btn: "EXPLORE",
  },
  {
    id: 8,
    title: "Catalog",
    content:
      "Online exchanger, specializing in the exchange of private individual",
    btn: "EXPLORE",
  },
  {
    id: 9,
    title: "Monday",
    content:
      "Online exchanger, specializing in the exchange of private individual",
    btn: "EXPLORE",
  },
];

const Investors = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const numberOfDataOnPage = 3;
  // const autoSlide = 3000;
  // // Total number of pages
  // const totalNumberOfPages = Math.ceil(
  //   investorData.length / numberOfDataOnPage
  // );
  // // Data for the current page
  // const currentPageData = investorData.slice(
  //   currentIndex * numberOfDataOnPage,
  //   (currentIndex + 1) * numberOfDataOnPage
  // );
  // Auto-slide logic
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalNumberOfPages);
  //   }, autoSlide);

  //   return () => clearInterval(interval);
  // }, [totalNumberOfPages]);
  // const handlePaginationClick = (index) => {
  //   setCurrentIndex(index);
  // };
  return (
    <section className={style.section}>
      <h1>Our Partners</h1>
      <div className={style.wrapper}>
        <Swiper
          className={style.divs}
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
              slidesPerView: 2,
              spaceBetween: 40,
            },
           
            1440: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        
          modules={[Autoplay, Pagination]}
        >
          {investorData.map((data) => (
            <SwiperSlide className={style.grid} key={data.id}>
              <div className={style.title}>
                <span>{data.title}</span>
              </div>
              <div className={style.content}>{data.content}</div>
              <div className={style.btn}>{data.btn}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Pagination Buttons */}
      {/* <div className={style.pagination}>
        {Array.from({ length: totalNumberOfPages }).map((_, index) => (
          <button
            key={index}
            className={`${style.pageButton} ${
              currentIndex === index ? style.activePage : ""
            }`}
            onClick={() => handlePaginationClick(index)}
          ></button>
        ))}
      </div> */}
    </section>
  );
};

export default Investors;
