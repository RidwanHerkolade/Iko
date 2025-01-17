import style from "./team.module.css"
import Image from "next/image"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const teamData = [
    { id: 1, img: "/img/w1.png", team: "Advisory team", name: "Jacob Jones", icon: <LinkedInIcon className={style.icons}/>},
    { id: 2, img: "/img/w1.png", team: "Advisory team", name: "Albert Flores", icon: <LinkedInIcon className={style.icons}/>},
    { id: 3, img: "/img/w2.png", team: "Advisory team",name: "Devon Lane", icon: <LinkedInIcon className={style.icons}/>},
    { id: 4, img: "/img/w2.png", team: "Advisory team",name: "Jacob Jones", icon: <LinkedInIcon className={style.icons}/>},
    {id: 5, img: "/img/w2.png", team: "Advisory team", name: "Albert Flores", icon: <LinkedInIcon className={style.icons}/>},
    {  id: 6, img: "/img/w1.png", team: "Management team", name: "flores john", icon: <LinkedInIcon className={style.icons}/>},
    { id: 7, img: "/img/w2.png", team: "Management team",name: "Amanda lewis", icon: <LinkedInIcon className={style.icons}/>},
    {id: 8, img: "/img/imgs.png", team: "Management team", name: "Amanda Gabriel", icon: <LinkedInIcon className={style.icons}/>},
    { id: 9, img: "/img/mark.png", team: "Marketing team", name: "John Mike", icon: <LinkedInIcon className={style.icons}/>},
    {id: 10, img: "/img/w1.png", team: "Marketing team",name: "Owen James", icon: <LinkedInIcon className={style.icons}/>},
    {id: 11, img: "/img/btc.png", team: "Marketing team",name: "Ownen lolly", icon: <LinkedInIcon className={style.icons}/>}
];
const Team = () => {
  return (
    <div className={style.divs}>
        <div className={style.div}>
            <ul className={style.team_nav}>
                <li className={style.team_navs} id={style.teams_id}>
                     Advisory Team
                </li>
                <li className={style.team_navs}>
                     Management Team
                </li>
                <li className={style.team_navs}>
                     Marketing Team
                </li>
            </ul>
            <div className={style.teams}>
                {teamData.map((data) => {
                    return(
                        <div className={style.grid} key={data.id}>
                            <div className={style.grid_item}>
                            <div className={style.imgs}>
                                <Image src={data.img} fill alt="team image" className={style.img} />
                            </div>
                            <div className={style.name}>{data.name}</div>
                             <div className={style.linkedIn}>{data.icon}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
export default Team