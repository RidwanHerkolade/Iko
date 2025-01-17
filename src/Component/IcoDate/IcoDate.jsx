"use client";
import styles from "./icoDate.module.css";
import EjectIcon from "@mui/icons-material/Eject";
import CustomMarks from "../Slider.jsx/Slider";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useContext } from "react";
import { AddContext } from "@/context/AddContextProvider";
const IcoDate = () => {
  const {currentTime} = useContext(AddContext)
  return (
    <div className={styles.ico}>
      <div className={styles.ico__divs}>
        <div className={styles.ico__div}>
          <h1>ICO will start in..</h1>
          <div className={styles.lab}>
            <div className={styles.eject}>
                   <div className={styles.ee}>
                       <label className={styles.label}>Value <br></br>of technology invested</label>
                       <EjectIcon className={styles.transform} />
                   </div>
                   <div className={styles.ee}>
                       <label className={styles.label}> Private <br></br>salea</label>
                       <EjectIcon className={styles.transform} />
                   </div>
                   <div className={styles.ee}>
                       <label className={styles.label} >Value <br></br>of technology invested</label>
                       <EjectIcon className={styles.transform} />
                   </div>
                 
            </div>
            <div className={styles.innerlab}>
              <CustomMarks />
            </div>
            <div className={styles.inner}>
              <div className={styles.datess}>7.75 Min</div>
              <div className={styles.datess}>1.5 Min</div>
              <div className={styles.datess}>140,000 $ chosen</div>
            </div>
          </div>
          <div className={styles.date__data}>
            <div className={styles.dada}>
              <div className={styles.da}>
                <span>days</span>
                <div className={styles.num}>{currentTime.days}</div>
              </div>
              <div className={styles.dot__name}>
                <FiberManualRecordIcon className={styles.dot} />
                <FiberManualRecordIcon className={styles.dot} />
              </div>
              <div className={styles.da}>
                <span>hours</span>
                <div className={styles.num}>{currentTime.hours}</div>
              </div>
            </div>
            <div className={styles.dada}>
              <div className={styles.dot__name}>
                <FiberManualRecordIcon className={styles.dot} />
                <FiberManualRecordIcon className={styles.dot} />
              </div>
              <div className={styles.da}>
                <span>mins</span>
                <div className={styles.num}>{currentTime.minutes}</div>
              </div>
              <div className={styles.dot__name}>
                <FiberManualRecordIcon className={styles.dot} />
                <FiberManualRecordIcon className={styles.dot} />
              </div>
              <div className={styles.da}>
                <span>secs</span>
                <div className={styles.num}>{currentTime.seconds}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcoDate;
