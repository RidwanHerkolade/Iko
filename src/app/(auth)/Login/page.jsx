"use client"
import style from "./page.module.css";
import LoginHeader from "@/Component/LoginHeader/LoginHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useForm } from "react-hook-form";
import Link from "next/link";
const Login = () => {
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
      <LoginHeader />
      <div className={style.forms}>
        <h1>Login to Iko.</h1>
        <p>
          Don’t have an account?
          <Link href="/Register" className={style.js}>
            Create free account
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {/* {error.email && <p className={style.error}>{error.email?.message}</p>} */}
          </div>
          <div className={style.input}>
            <label>Password</label>
            <div className={style.inputs}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                {...register("password", {
                  required: "enter a valid password",
                })}
              />
               {/* {error.password && <p className={style.error}>{error.password?.message}</p>} */}
            </div>
            <div className={style.inpu}>
              <div className={style.rememberMe}>
                <input type="checkbox" />
                <span>remember me</span>
              </div>
              <div className={style.span}>Forgot Password?</div>
            </div>
          </div>
          <div className={style.input}>
            <button className={style.btns} type="submit">
              Login
              <ArrowForwardIosIcon className={style.icon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
