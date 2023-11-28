import circle from "/circle.svg";
import lock from "/lock.svg";
function ClosedSteps() {
  return (
    <div className={"relative w-12 h-12"}>
      <img src={circle} alt="circle" className={"w-12"} />
      <img
        src={lock}
        alt="lock"
        className={
          "w-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }
      />
    </div>
  );
}

export default ClosedSteps;
