"use client"
import style from "./press.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const pressData = [
  {
    id: 1,
    title: "HOFFPOST",
    content:
      "UniFox seek incorporate cryptocurrencies into everyday life through introduction of their autonomous design.",
    link: "hoffpost.com",
    btn: "read more",
  },
  {
    id: 2,
    title: "HOFFPOST",
    content:
      "In excellence from tether or love another stable crippling. Unicash can easily be converted to local currency by special bankers.",
    link: "msnbc.com",
    btn: "read more",
  },
  {
    id: 3,
    title: "HOFFPOST",
    content:
      "UniFox seek incorporate cryptocurrencies into everyday life through introduction of their autonomous design.",
    link: "hoffpost.com",
    btn: "read more",
  },
  {
    id: 4,
    title: "HOFFPOST",
    content:
      "In excellence from tether or love another stable crippling. Unicash can easily be converted to local currency by special bankers.",
    link: "msnbc.com",
    btn: "read more",
  },
];
const Press = () => {
  return (
    <section className={style.section}>
      <h1>Press us</h1>
      <Swiper
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
         className={`${style.grids}`}
      >
        {pressData.map((data) => {
          return [
            <SwiperSlide className={style.grid} key={data.id}>
              <div className={style.title}>
                <h3>{data.title}</h3>
                <div className={style.btn}>{data.btn}</div>
              </div>
              <div className={style.link}>
                <Link href="/" className={style.links}>
                  {data.link}
                </Link>
                <div className={style.content}>{data.content}</div>
              </div>
              {/* <div className={style.btn} style={{margin: "1rem 0rem"}} id={style.no}>{data.btn}</div> */}
            </SwiperSlide>,
            
            
          ];
        })}
      </Swiper>
    </section>
  );
};

export default Press;
