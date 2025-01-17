"use client"
import style from "./contactside.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { AddContext } from "@/context/AddContextProvider";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
const ContactSideBar = () => {
const {toggle, handleClose} = useContext(AddContext);
  return (
    <>
    {toggle && <aside className={style.divs}>
      <div className={style.div}>
      <div className={style.menu}>
            <CloseIcon
              className={style.menu_icon}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={handleClose}
            />
          </div>
        <div className={style.navs}>
          <div className={style.imgs}>
            <Image
              src="/img/favicon.png"
              alt="nav img"
              className={style.img}
              fill
            />
          </div>
          <span>IKO</span>
        </div>
        <div className={style.address_item}>
          <div className={style.lists}>
            <h1>Office Address</h1>
            <p>123/A, Miranda City Likaoli</p>
            <p>Prikano, Dope</p>
          </div>
          <div className={style.lists}>
            <h1> Phone Number</h1>
            <p>+0989 7876 9865 9</p>
            <p>+(090) 8765 86543 85</p>
          </div>
          <div className={style.lists}>
            <h1> Address</h1>
            <p>info@example.com</p>
            <p>example.mail@hum.com</p>
          </div>
          <div className={style.list}>
            <Link href="/" className={style.icon}>
              <FacebookIcon className={style.icons}/>
            </Link>
            <Link href="/" className={style.icon}>
              <TwitterIcon  className={style.icons}/>
            </Link>
            <Link href="/" className={style.icon}>
              <GoogleIcon  className={style.icons}/>
            </Link>
            <Link href="/" className={style.icon}>
              <InstagramIcon  className={style.icons}/>
            </Link>
          </div>
        </div>
      </div>
    </aside> }
    </>
  );
};

export default ContactSideBar;
