"use client";
import styles from "./header.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Nav from "../Navigation/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className={styles.he}>
      <Nav />
      <motion.div
        className={styles.header}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          y: { type: "spring", stiffness: "60" },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className={styles.headers}>
          <span>Putting Your Money in Product Backed Projects</span>
          <div className={styles.btn}>
            <div className={styles.btns}>
              Purchase a Token
              <ArrowForwardIosIcon className={styles.icon} />
            </div>
            <div className={styles.btnss}>
              Read a token <ArrowForwardIosIcon className={styles.icons} />
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src="/img/slantt.png"
            fill
            alt="header img"
            className={styles.imgs}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
