import { Button } from "@/components/ui/button.tsx";

function OtherLoginButtons() {
  return (
    <div className={"flex gap-x-8 mt-4 items-center justify-center"}>
      <Button
        className={
          "w-full bg-[white] text-gray-500 text-[12px] font-bold hover:bg-white h-12 flex gap-x-2 items-center justify-center"
        }
      >
        <img
          className={"w-[26px]"}
          src="../../../public/icons8-google.svg"
          alt="Google logo"
        />{" "}
        Sign in with Google
      </Button>
      <Button
        className={
          "w-full bg-[white] text-gray-500 text-[12px] font-bold hover:bg-white h-12 flex gap-x-1 items-center justify-center"
        }
      >
        <img
          className={"w-[26px]"}
          src="../../../public/icons8-apple-logo.svg"
          alt="Apple logo"
        />{" "}
        Sign in with Apple
      </Button>
    </div>
  );
}

export default OtherLoginButtons;
