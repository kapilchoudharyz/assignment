import { Button } from "@/components/ui/button.tsx";
import googleIcon from "/icons8-google.svg";
import appleIcon from "/icons8-apple-logo.svg";
function OtherLoginButtons() {
  return (
    <div className={"flex gap-x-8 mt-4 items-center justify-center"}>
      <Button
        className={
          "w-full bg-[white] text-gray-500 text-[12px] font-bold hover:bg-white h-12 flex gap-x-2 items-center justify-center"
        }
      >
        <img className={"w-[26px]"} src={googleIcon} alt="Google logo" /> Sign
        in with Google
      </Button>
      <Button
        className={
          "w-full bg-[white] text-gray-500 text-[12px] font-bold hover:bg-white h-12 flex gap-x-1 items-center justify-center"
        }
      >
        <img className={"w-[26px]"} src={appleIcon} alt="Apple logo" /> Sign in
        with Apple
      </Button>
    </div>
  );
}

export default OtherLoginButtons;
