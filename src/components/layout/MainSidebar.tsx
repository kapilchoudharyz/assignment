import SidebarItems from "@/components/SidebarItems.tsx";
import OpenSteps from "@/components/others/OpenSteps.tsx";
import { useState } from "react";
import ClosedSteps from "@/components/others/ClosedSteps.tsx";

const steps = [
  {
    step: "Initiate Account Owner Authentication",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step1",
  },
  {
    step: "Verify Identity of the Original FTX Account Owner",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step2",
  },
  {
    step: "KYC",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step3",
  },
  {
    step: "Submission of Electronic Proof of Claim",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step4",
  },
  {
    step: "Review Account Balances",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step5",
  },
  {
    step: "Standby for Next Steps",
    about:
      "To access your FTX account, you will need to login with your FTX credentials using the same 2FA as you did before the FTX Exchanges were shutdown.",
    closed: <ClosedSteps />,
    opened: <OpenSteps />,
    route: "step6",
  },
];

function MainSidebar() {
  const [clickNumber, setClickNumber] = useState<number>(0);
  return (
    <div
      className={
        "bg-[#1d1f2b] w-[280px] rounded-b-lg   rounded-[8px] py-7 flex flex-col gap-y-4"
      }
    >
      {steps.map((el, index: number) => {
        return (
          <SidebarItems
            route={el.route}
            key={index}
            stepNumber={index}
            step={el.step}
            openSteps={el.opened}
            closedSteps={el.closed}
            about={el.about}
            handleClickNumber={setClickNumber}
            clickNumber={clickNumber}
          ></SidebarItems>
        );
      })}
    </div>
  );
}

export default MainSidebar;
