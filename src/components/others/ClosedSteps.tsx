function ClosedSteps() {
  return (
    <div className={"relative"}>
      <img src="../../assets/circle.svg" alt="circle" className={"w-12"} />
      <img
        src="../../assets/lock.svg"
        alt="lock"
        className={
          "w-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }
      />
    </div>
  );
}

export default ClosedSteps;
