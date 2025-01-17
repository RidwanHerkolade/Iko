import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import style from "./founder.module.css"
import Image from 'next/image';
const FounderData = [ 
    {id: 1, name: "Eleanor Pena", post: "Founder & CEO", linkedInLinks: <LinkedInIcon className={style.icons}/>, xlinks: <XIcon/>,youtubeLinks: <YouTubeIcon/>, img: "/img/w1.png" },
    {id: 2, name: "William Xeno", post: "Founder & CEO", linkedInLinks: <LinkedInIcon className={style.icons}/>, xlinks: <XIcon/>,youtubeLinks: <YouTubeIcon/>, img: "/img/w2.png" }
]
const Founder = () => {
  return (
      <section className={style.section}>
        <h1>Active Founders</h1>
        <div className={style.divs}>
            {FounderData.map((data) => {
                return[
                    <div className={style.contents} key={data.id}>
                        <div className={style.founderImg}>
                            <Image src={data.img} fill alt="owner image" className={style.img}
                            />
                        </div>
                       <div className={style.founderData}>
                           <h2>{data.name}</h2>
                           <p>{data.post}</p>
                           <div className={style.links}>
                               <div className={style.linkedIn}>{data.linkedInLinks}</div>
                               <div className={style.linkedIn}>{data.xlinks}</div>
                               <div className={style.linkedIn}>{data.youtubeLinks}</div>
                           </div>
                        
                        </div> 
                    </div>
                ]
            })}

        </div>
         
      </section>
    // <div>Founder</div>
  )
}

export default Founder