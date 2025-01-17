"use client"
import Image from "next/image";
import styles from "./partners.module.css";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.divs}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: "60" },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className={styles.div}>
          <h1 className={styles.h1}>
            Why You Choose IKO is worth buying today?
          </h1>
          <p className={styles.p}>
            Use the window for the planned investment and calculate the
            estimated Iko price and your monthly dividends at a fixed time
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src="/img/btc.png"
            className={styles.imgs}
            alt="img iko"
            fill
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Partners;
