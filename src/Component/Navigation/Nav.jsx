"use client";
import styles from "./nav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
      <ul
        className={toggle ? styles.list_mobile : styles.list}
      >
        <li></li>
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
          <Link href="Contact" className={styles.links}>
            CONTACT
          </Link>
        </li>
      </ul>
      <div className={styles.select}>
        <select className={styles.select}>
          <option>ENG</option>
          <option>GER</option>
          <option>FREN</option>
          <option>ARAB</option>
          <option>LAT</option>
          <option>SPAN</option>
        </select>
        <Link href="/Login" className={styles.login} >LOGIN</Link>
      </div>
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
    </nav>
  );
};
export default Nav;
