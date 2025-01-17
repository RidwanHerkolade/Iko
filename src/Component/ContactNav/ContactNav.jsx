"use client";
import styles from "./contactnav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { AddContext } from "@/context/AddContextProvider";
import { useContext } from "react";
const ContactNav = () => {
  const {toggle, handleToggle, mobileToggle, handleMobileToggle} = useContext(AddContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.navs}>
        <div className={styles.imgs}>
          <Image
            src="/img/favicon.png"
            alt="nav img"
            className={styles.img}
            fill
          />
        </div>
        <span>IKO</span>
      </div>
      <ul className={mobileToggle ? styles.lists_mobile : styles.lists}>
        <li className={styles.li}>
          <Link href="/" className={styles.links} id={styles.active}>
            HOME
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" className={styles.links}>
            FEATURE
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" className={styles.links}>
            ROADMAP
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" className={styles.links}>
            BLOG
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/Contact" className={styles.links} id={styles.active}>
            CONTACT
          </Link>
        </li>
      </ul>
      <div className={styles.select}>
        <Link href="/Login" className={styles.login}>LOGIN</Link>
        {toggle ? (
          <div className={styles.menu}>
            <CloseIcon
              className={styles.menu_icon}
              style={{ fontSize: "2rem" }}
              onClick={handleToggle}
            />
          </div>
        ) : (
          <div className={styles.menu}>
            <MenuIcon
              className={styles.menu_icon}
              style={{ fontSize: "2rem" }}
              onClick={handleToggle}
            />
          </div>
        )}
      </div>
      <div className={styles.select_mobile}>
        {mobileToggle ? (
          <div className={styles.menu}>
            <CloseIcon
              className={styles.menu_icon}
              style={{ fontSize: "2rem" }}
              onClick={handleMobileToggle}
            />
          </div>
        ) : (
          <div className={styles.menu}>
            <MenuIcon
              className={styles.menu_icon}
              style={{ fontSize: "2rem" }}
              onClick={handleMobileToggle}
            />
          </div>
        )}
      </div>
    </nav>
  );
};
export default ContactNav;
