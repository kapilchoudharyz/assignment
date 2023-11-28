import React from "react";
import Navigation from "@/components/layout/Navigation.tsx";
import MainSidebar from "@/components/layout/MainSidebar.tsx";
import { Navigate, Route, Routes } from "react-router-dom";

const Auth_And_ValidationPage = React.lazy(
  () => import("@/components/mainPages/Auth_And_ValidationPage.tsx")
);
const VerificationPage = React.lazy(
  () => import("@/components/mainPages/VerificationPage.tsx")
);
const KYCPage = React.lazy(() => import("@/components/mainPages/KYCPage.tsx"));
const ReviewAccountBalancePage = React.lazy(
  () => import("@/components/mainPages/ReviewAccountBalancePage.tsx")
);
const SubmissionOfProofPage = React.lazy(
  () => import("@/components/mainPages/SubmissionOfProofPage.tsx")
);
const StandbyForNextStepsPage = React.lazy(
  () => import("@/components/mainPages/StandbyForNextStepsPage.tsx")
);

function App() {
  return (
    <div className="app h-screen w-screen bg-[#0B0E16]">
      <Navigation></Navigation>
      <div className={"flex flex-row mt-12 gap-x-4  justify-center"}>
        <MainSidebar></MainSidebar>
        <div
          className={
            "rounded-[8px]  py-[62px] px-14 w-[600px] bg-[#1d1f2b] h-fit"
          }
        >
          <React.Suspense
            fallback={
              <p className={"text-2xl text-white font-extrabold"}>Loading...</p>
            }
          >
            <Routes>
              <Route
                path={"/"}
                element={<Navigate to={"step1"}></Navigate>}
              ></Route>
              <Route
                path={"step1"}
                element={<Auth_And_ValidationPage></Auth_And_ValidationPage>}
              ></Route>
              <Route
                path={"step2"}
                element={<VerificationPage></VerificationPage>}
              ></Route>
              <Route path={"step3"} element={<KYCPage></KYCPage>}></Route>
              <Route
                path={"step4"}
                element={<ReviewAccountBalancePage></ReviewAccountBalancePage>}
              ></Route>
              <Route
                path={"step5"}
                element={<SubmissionOfProofPage></SubmissionOfProofPage>}
              ></Route>
              <Route
                path={"step6"}
                element={<StandbyForNextStepsPage></StandbyForNextStepsPage>}
              ></Route>
            </Routes>
          </React.Suspense>
        </div>

        {/*<MainPage></MainPage>*/}
      </div>
    </div>
  );
}

export default App;
