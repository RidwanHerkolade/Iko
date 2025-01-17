import styles from "./page.module.css";
import Header from "@/Component/Header/Header";
import IcoDate from "@/Component/IcoDate/IcoDate";
import Partners from "@/Component/Partners/Partners";
import Investment from "@/Component/investment/Investment";
import Mission from "@/Component/Mission/Mission";
import Roadmap from "@/Component/Roadmap/Roadmap";
import Ecosystem from "@/Component/Ecosystem/Ecosystem";
import Founder from "@/Component/Founders/Founder";
import Team from "@/Component/Team/Team";
import Investors from "@/Component/Investors/Investors";
import Submit from "@/Component/Submit/Submit";
import Press from "@/Component/Press/Press";
import FreeQsn from "@/Component/FreqQsn/FreeQsn";
import Footer from "@/Component/Footer/Footer";
const page = () => {
  return (
    <section className={styles.section}>
      <Header />
        <IcoDate />
        <Partners/>
        <Investment/>
        <Mission/>
        <Roadmap/>
        <Ecosystem/>
        <Founder/>
        <Team/>
        <Investors/>
        <Submit/>
        <Press/>
        <FreeQsn/>
        <Footer/>
    </section>
  );
};
export default page;
