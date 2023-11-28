import { Button } from "@/components/ui/button.tsx";
import React from "react";

interface props {
  detailsFilled: boolean;
}

const LoginButton: React.FC<props> = ({ detailsFilled }) => {
  return (
    <Button
      className={`${
        detailsFilled
          ? "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white focus:text-white"
          : "bg-[#0000001f] text-[#878A9B]"
      } w-full  font-bold`}
      disabled={!detailsFilled}
      onClick={(e) => e.preventDefault()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
