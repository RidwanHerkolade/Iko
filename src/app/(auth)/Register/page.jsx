"use client"
import style from "./page.module.css";
import RegisterHeader from "@/Component/RegisterHeader/RegisterHeader";
import Link from "next/link";
import { useForm } from "react-hook-form"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { error },
  } = useForm();
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className={style.login}>
      <RegisterHeader />
      <div className={style.forms}>
        <h1>Register to Iko.</h1>
        <p>
          Don’t have an account?
          <Link href="/register" className={style.js}>
            Create free account
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input}>
            <label>Full Name</label>
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="iko@gmail.com"
                name="fullName"
                required
                {...register("fullName", { required: "enter your full name" })}
              />
            </div>
          </div>
          <div className={style.input}>
            <label>Your email</label>
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="iko@gmail.com"
                name="email"
                required
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
          </div>
          <div className={style.input}>
            <label>Password</label>
            <div className={style.inputs}>
              <input type="password" placeholder="password" />
            </div>
            <div className={style.inpu}>
              <div className={style.rememberMe}>
                <input type="checkbox" />
                <span>remember me</span>
              </div>
              <div className={style.span}>Forgot Password?</div>
            </div>
            <div className={style.input}>
              <button className={style.btns} type="submit">
                Login
                <ArrowForwardIosIcon className={style.icon} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
