"use client"
import { createContext, useState, useEffect } from "react"
export const AddContext = createContext(null)
const AddContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0});
 useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const targetDate = new Date("2025-12-31T00:00:00");
      const timeDiff = targetDate - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCurrentTime({ days, hours, minutes, seconds });
    }
    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
 }, [])
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleMobileToggle = () => {
    setMobileToggle((prev) => !prev);
  };
  const handleClose = () => {
    setMobileToggle(false);
    setToggle(false)
  }
  const contextValue = {
     toggle,
     setToggle,
     mobileToggle,
     currentTime,
     setCurrentTime,
     handleMobileToggle,
     handleClose,
     handleToggle,

  }
  return (
      <AddContext.Provider value={contextValue}>
           {props.children}
      </AddContext.Provider>
    
  )
}

export default AddContextProvider