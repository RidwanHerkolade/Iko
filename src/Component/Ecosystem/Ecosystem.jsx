
import style from "./ecosystem.module.css";
import { ecoDatas } from "./EcoData";

const Ecosystem = () => {
  return (
    <section className={style.section}>
      <h1>Invest in Our ecosystem shares today</h1>
      <div className={style.grids}>
        {ecoDatas.map((data) => {
          return (
            <div className={style.eco} key={data.id}>
              <div className={style.icon}>{data.icon}</div>
              <div className={style.btn}>{data.btn}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ecosystem;
