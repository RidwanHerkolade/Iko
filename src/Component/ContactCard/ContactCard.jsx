import style from "./contactcard.module.css";
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
export const cardData = [
{id: 1, title: "Location", contact1: "1901 Thornridge Cir.", contact2: "Shiloh, Hawaii", icon: <RoomIcon/>},
{id: 2, title: "Contact", contact1: "+88(0)555-0108", contact2: "+88(0)555-0108", icon: <CallIcon/>},
{id: 3, title: "Email", contact1: "sara.cruz@example.com", contact2: "xeco.@example.com", icon: <EmailIcon/>},
{id: 4, title: "Visit Between", contact1: "Mon - Sat : 8.00-5.00,",contact2: "Sunday : Closed", icon: <BusinessCenterIcon/> },
]
const ContactCard = () => {
  return (
    <div className={style.divs}>
        <div className={style.div}>
            {cardData.map((data) => {
                return (
                    <div className={style.grid} key={data.id}>
                    <div className={style.icon}>{data.icon}</div>
                    <h1>{data.title}</h1>
                    <div className={style.contact}>
                        <small>{data.contact1}</small>
                        <small>{data.contact2}</small>
                    </div>
                </div>

                )
            })}

        </div>

    </div>
  )
}

export default ContactCard