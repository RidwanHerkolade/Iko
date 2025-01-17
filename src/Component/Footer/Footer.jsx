import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import style from "./footer.module.css"
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.div}>
        <div className={style.link}>
          <div className={style.linkedIn}>
            <XIcon />
          </div>
          <div className={style.linkedIn}>
            <YouTubeIcon />
          </div>
          <div className={style.linkedIn}>
            <LinkedInIcon />
          </div>
          
        </div>
        <ul className={style.list}>
        <li className={style.li}>
          <Link href="/" className={style.links}>
            HOME
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.links}>
            OUR PROJECT
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.links}>
            OUR TEAM
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.links}>
            NEW FAQ
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.links}>
            DOCUMENTS
          </Link>
        </li>
      </ul>
      </div>
      <div className={style.footer_btm}>
        <p>Copyright © 2024 IKO. All rights reserved.</p>
        <ul className={style.lists}>
        <li className={style.li}>
          <Link href="/" className={style.linkss}>
            job & career
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.linkss}>
             term and condition
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/" className={style.linkss}>
            Help center
          </Link>
        </li>
      </ul>

      </div>
    </footer>
  );
};

export default Footer;
