import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Image from 'next/image';
import style from "./submit.module.css"
export const submitData = [
    {id: 1, img: "/img/download.jpg", title: "Block venna", country: "Venna", date: "August 17, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 2, img: "/img/blov.jpg", title: "SummitSummit", country: "USA", date: "june 12, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 3, img: "/img/images.jpg", title: "Blockchain Summit", country: "united Kingdom", date: "July 05, 2024", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 4, img:"/img/download.jpg", title: "EconomyICO 2024", country: "CostaRIca", date: "Septmper 09, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 5, img: "/img/blov.jpg", title: "Blockchain Summit", country: "Brazil", date: "September 17, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 6, img: "/img/trad.jpg", title: "Blockchain & Bitcoin", country: "Argentina", date: "October 12, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 7, img: "/img/money.jpg", title: "Money Conference", country: "united Kingdom", date: "November 15, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
    {id: 8, img: "/img/money.jpg", title: "EconomyICO 2024", country: "Costa RIca", date: "December 09, 2025", btn: "login",locationIcon: <LocationOnIcon className={style.icon}/>, timeIcon: <ScheduleIcon className={style.icon}/>},
]
const Submit = () => {
  return (
    <div className={style.submit}>
        <h1>Join Events for meet us</h1>
        <div className={style.summitgrid}>
            {submitData.map((data) => {
                return (
                    <div className={style.summit} key={data.id}>
                        <div className={style.summitImg}>
                            <Image src={data.img} fill alt="summit img" />
                        </div>
                        <h2>{data.title}</h2>
                        <div className={style.location}>
                            <div>{data.locationIcon}</div>
                            <span>{data.country}</span>
                        </div>
                        <div className={style.location}>
                            <div >{data.timeIcon}</div>
                            <span>{data.date}</span>
                        </div>
                        <div className={style.button}> <div className={style.btn}>{data.btn}</div></div>
                       
                    </div>
                    
                )
            })}
        </div>

    </div>
  )
}

export default Submit