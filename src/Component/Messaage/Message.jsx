"use client";
import style from "./message.module.css";
import { useForm } from "react-hook-form";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Message = () => {
  const {
    handleSubmit,
    register,
    formState: { error },
  } = useForm();
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className={style.divs}>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.69000255124!2d-118.41173260000001!3d34.02047895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1737008142769!5m2!1sen!2sng"
          className={style.maps}
          loading="lazy"
        ></iframe>
      </div>
      <div className={style.form}>
        <form className={style.forms} onSubmit={handleSubmit(onSubmit)}>
          <h1>Send a message</h1>
          <div className={style.input}>
            <input
              type="text"
              required
              placeholder="Enter your name"
              name="fullName"
              {...register("fullName", { required: "enter your full name" })}
            />
            <input
              type="email"
              required
              placeholder="Enter your email"
              name="email"
              {...register("email", {
                required: "enter a valid email ",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
          </div>
          <div className={style.input}>
            <input
              type="tel"
              required
              placeholder="Mobile no"
              name="mobileNo"
              {...register("mobileNo", { required: "enter your mobile no" })}
            />
            <input
              type="text"
              required
              placeholder="Company"
              name="companyName"
              {...register("companyName", {
                required: "enter your company name",
              })}
            />
          </div>
          <div className={style.txt}>
            <textarea
              placeholder="Enter your message...."
              required
              name="companyMessage"
              {...register("companyMessage", {
                required: "enter your a message",
              })}
            ></textarea>
          </div>
          <div className={style.btn}>
            <button className={style.btnss}>
              Send message <ArrowForwardIosIcon className={style.icons} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
