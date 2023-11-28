import { useEffect, useState } from "react";
import LoginButton from "@/components/buttons/LoginButton.tsx";
import OtherLoginButtons from "@/components/buttons/OtherLoginButtons.tsx";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [detailsFilled, setDetailsFilled] = useState(false);

  useEffect(() => {
    email.length > 0 && password.length > 0
      ? setDetailsFilled(true)
      : setDetailsFilled(false);
  }, [email, password]);

  return (
    <form className={"w-full flex flex-col gap-y-4 mt-5"}>
      <div
        className={"relative"}
        onFocus={(e) => {
          e.preventDefault();
          setEmailFocus(true);
        }}
        onBlur={(e) => {
          e.preventDefault();
          !(email.length > 0) && setEmailFocus(false);
        }}
      >
        <label
          htmlFor="email"
          className={`absolute ${
            emailFocus ? "top-[25%] text-sm text-blue-500" : "top-[50%]"
          }  translate-y-[-50%] left-3 transition-all duration-200 ease-out text-[#878A9B] text-[16px]`}
        >
          Email
        </label>
        <input
          className={
            "text-white font-bold w-full rounded-[8px] h-[56px] pt-[27px] px-[12px] pb-[10px] transition-all bg-[#2e2e3b] "
          }
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div
        className={"relative"}
        onFocus={(e) => {
          e.preventDefault();
          setPasswordFocus(true);
        }}
        onBlur={(e) => {
          e.preventDefault();
          !(password.length > 0) && setPasswordFocus(false);
        }}
      >
        <label
          htmlFor="password"
          className={`absolute ${
            passwordFocus ? "top-[25%] text-sm text-blue-500" : "top-[50%]"
          } translate-y-[-50%] left-3 text-[16px] transition-all duration-200 ease-out text-[#878A9B]`}
        >
          Password
        </label>
        <input
          id="password"
          className={
            "text-white font-bold w-full rounded-[8px] h-[56px] pt-[27px] px-[12px] pb-[10px] bg-[#2e2e3b]"
          }
          type={`${showPassword ? "text" : "password"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={"absolute top-[50%] right-4 translate-y-[-50%]"}
          onClick={(e) => {
            e.preventDefault();
            setShowPassword((preState) => !preState);
          }}
        >
          <img
            src="../../public/eye_button.svg"
            alt="eye button for seeing the password"
          />
        </button>
      </div>
      <span
        className={"text-blue-400 text-sm cursor-pointer text-right pr-0.5"}
      >
        Forgot Password?
      </span>

      <div className={"mt-4"}>
        <LoginButton detailsFilled={detailsFilled}></LoginButton>
      </div>
      <div
        className={
          "relative w-full border-t-[1px] border-[#F6F6F9] border-opacity-[0.1] mt-4"
        }
      >
        <span
          className={
            "absolute left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-500 w-10 z-10 bg-[#1d1f2b] text-center"
          }
        >
          OR
        </span>
      </div>
      <OtherLoginButtons />
    </form>
  );
}

export default LoginForm;
