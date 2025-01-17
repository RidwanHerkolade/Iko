import styles from "./contactHeader.module.css"
import ContactNav from "../ContactNav/ContactNav"
import Link from "next/link"
import Image from "next/image"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ContactHeader = () => {
  return (
    <header className={styles.he}>
      <ContactNav/>
    <div className={styles.header}>
      <div className={styles.headers}>
        <div className={styles.sp_img}>
            <Image fill src="/img/bg.png" alt="contact img"/>
        </div>
        <div className={styles.span}>
             <h1>Contact</h1>
             <div className={styles.h1_link}>
                <Link href="/" className={styles.home}>Home</Link>
                 <ArrowForwardIosIcon className={styles.arrow}/>
                <span>CONTACT</span>
             </div>
        </div>
        <div className={styles.sp_imgs}>
            <Image fill src="/img/span.png" alt="contact img" className={styles.img}/>
        </div>
      </div>
    </div>
    </header>
  )
}
export default ContactHeader