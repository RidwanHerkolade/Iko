"use client"
import style from "./investment.module.css";
import { datas } from "./investmentData";
import CustomMarks from "../Slider.jsx/Slider";
const Investment = () => {
  return (
    <div className={style.divs}>
      <div className={style.div}>
        <div className={style.div_con}>
          <h1>Amount invested</h1>
          <span>50,000 $</span>
        </div>
        <div className={style.div_con}>
          <h1>Quantity Iko</h1>
          <span>500,000 Iko</span>
        </div>
      </div>
      <div className={style.grids}>
        {datas.map((data) => {
          return (
            <div className={style.grid} key={data.id}>
              <div className={style.grid_con}>
                <div className={style.grid_cons}>
                  <h3>{data.namePrice}</h3>
                  <span>{data.foxPrice}</span>
                </div>
                <div className={style.slides}>
                   <CustomMarks/>
                </div>
              </div>
              <div className={style.platform}>
                <div className={style.platfms}>
                  <div className={style.icon}>
                       <div className={style.icons}>{data.icon}</div>
                  </div>
                  <div className={style.imgss}>
                    <h3>{data.expectedName}</h3>
                    <div className={style.prce}>{data.expectedPrice}</div>
                    <div className={style.prce}>{data.Roi}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Investment;
