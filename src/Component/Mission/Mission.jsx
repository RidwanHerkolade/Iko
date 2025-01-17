import style from "./mission.module.css";
import Image from "next/image";
const Mission = () => {
  return (
    <section className={style.section}>
      <div className={style.grids}>
        <div className={style.divs}>
          <h1>Introducing Iko Crypto</h1>
          <p>True wealth in the world of virtual currencies</p>
          <div className={style.contents}>
            <div className={style.content}>
              <div className={style.title}>
                <div className={style.circle}></div>
                <span>Who We Are</span>
              </div>
              <div className={style.para}>
                Iko is a 100% pre-scratched cryotome There are 1 Million
                Minutes, and 60% of them can be yours (60% - ICO) Utility &
                security token (applies to all transactions and gives a monthly
                dividend)
              </div>
            </div>
            <div className={style.content}>
              <div className={style.title}>
                <div className={style.circle}></div>
                <span>Wealth</span>
              </div>
              <div className={style.para}>
                Users with Iko have lower system fees Price growth is gathered
                by demand for Unifox technologies. You own a stake in an
                international corporation. You are part of the community
              </div>
            </div>
            <div className={style.content}>
              <div className={style.title}>
                <div className={style.circle}></div>
                <span>True Riches?</span>
              </div>
              <div className={style.para}>
                The underlying growth attracts investors The whole community is
                interested in growing the Iko prize. The company is planning to
                continue to expand the project, and it will cost the top up
              </div>
            </div>
          </div>
        </div>
        <div className={style.grid_img}>
          <div className={style.img}>
            <Image
              src="/img/mark.png"
              fill
              alt="image"
              className={style.markImg}
            />
          </div>
          <div className={style.contentss}>
            <div className={style.title}>
              <div className={style.circle}></div>
              <span>Our Missions & Visions</span>
            </div>
            <div className={style.para}>
              Iko is a 100% pre-scratched cryptome There are 1 Million Minutes,
              and 60% of them can be yours (60% - ICO) Utility & security token
              (applies to all transactions and gives a monthly dividend)<br></br><br></br> Iko is
              a 100% pre-scratched cryptome There are 1 Million Minutes, and 60%
              of them can be yours (60% - ICO) Utility & security token (applies
              to all transactions and gives a monthly dividend) <br></br><br></br> Iko is a 100%
              pre-scratched cryptome There are 1 Million Minutes, and 60% of
              them can be yours (60% - ICO)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mission;
