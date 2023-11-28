import { Combobox } from "@/components/ui/Combobox.tsx";

function Navigation() {
  const navigationLinks = ["Privacy", "FAQ", "Support"];
  return (
    <nav
      className={
        "p-4 h-[77px] border-b-navBorder border-b-[1px] flex flex-row items-center justify-between"
      }
    >
      <div className="logo">
        <a className="cursor-pointer   ">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAACgCAMAAAClk+zVAAAAY1BMVEUAAAAAn8cAoscAocX///////////////////////////////////////////////////////////////////////////////8An89Ax98+x+NAx+dAw+P///9Az9+A5/986P6BCM6tAAAAIHRSTlMAIP+AYP8g369QoO8Qn3CAz39Av5Awj7AQIP8gQG8QIGKsqzgAAAQNSURBVHgB7MFBFQAABAUw6N9ZCe+fthUAAAAAAAAAAAAAAAAAQF7Pqz32zmRNVSUIwrkgq2iplpY6p+fp/Z/yrlxdUsLhI8pD/Etn/R0iEigtovPrSHYk+02xI73P8mAQu/hhS+J6EtPgc+RiAMHTezRJXFWi7X2W0QCyz5GTJK4s0Z58jgEwcfBZOpPEtSVOPku1JZLPkk0SV5dof3yWiZ9qJBGWWC7LNg8+yx9bCUlEHuV4UaopFImSaBXPNoRUI4kBUETpLSZlUkWUxECijUC2wVINTaIklvmbf7KIv9HPKEmiJMZlcX9mqjGiREmMsk0563l1VImSGAzCn+mpBpcoidEgfMJTzZA2JLHiFDvyUk8wN8Me6ins/zzBI9TETjV8idluTnf5dxuebeipRhIB/oDZpvNZ/kpiAxILlm14qUYSAfbQR2zH25wviQAVyDaJURElEecvIIiTaiQRZ1zcRthxBt+SiFPyQgNMmbQ5XxJxpoUP2jMh1YQWb8rr/UsEsw0/1RBoXyI4CJ9OKe6NjySi2YabaiQRJ8o2QOxpBUmcwu1MB35FlMSrBuG19VQjicAgvOv5g29JvHYQvurm/LeQ4CIYG5EYN4lVU817yMfR4fsFfG5H4l9HySaJJIlAtgH526xESSzZIR6tWYmSaA+OkNNWJQ4dBlUilm0626ZEHK7ENCCppmmJkmijL5IalyiJJQOppm2JkmgTkGoalyiJtgNSTeMSJbEMfoJqbUuURGAQntqWKIlAWRztPiRKYr57iZL4BYy+25YoiemfDzaqGHtJbFwi8NiHIon3P3brJbF1ic++yCSJbUtMvkwuTUvURuHsAGPLErV7xpdD/JXEdiWmwSGqJLYrcecge75EScRuj1AWP0KCi2B8b0ZiyQ7TGx8dUANXREJZlMRbV8Su4mWRjSRGC/ClAS+LXCTxEO7bNja87oIkAhVxHweeanwkEaiIGV+cmIIk4ssK17AsEvgJ2aJEfFnhNARnMxz+hvxsUyK6AN9IKouSiJOWfvRKJpRFSYTAlxWenFEWJRHnAGw1rISyKIkocWxBLlT5EiUR/7OEkVAWJRGlw+yU3EZZlES8Imb0EOJHvkRJfIb3haqEsiiJCAn/fKWhhbIoiXBFTDbDyC+LkohXxM6OINkmMSVKYnIo1Sxkm8qUKIm7M+cwPbMsSiJwA8BtpIFSFiUxJgGpBss2zyyJkrgLU01M5pZFScRTTczkhLIoiSH5oq1LPbMsSiJQEYEbSAOpLEoi/mW6KGNklUVJxFPNIplQFiURvS74KCenlUVJBCqiJwPoCWVREqEvU/zaaSCURUnEUw3EyC6LLP5rD44FAAAAAAb5W89iV/UDAAAAAAAAAAAAAAAAAAJKqDhNFb75kgAAAABJRU5ErkJggg=="
            className={"h-[32px] px-[8px]"}
            alt="FTX logo"
          />
        </a>
      </div>
      <div className="navBtns flex flex-row items-center gap-x-8 pr-[0.875rem] ">
        {navigationLinks.map((navLink) => {
          return (
            <a
              href={"#"}
              target="_blank"
              key={Math.random() * 10000}
              className={"text-white text-[14px] hover:underline"}
            >
              {navLink}
            </a>
          );
        })}
        <Combobox></Combobox>
      </div>
    </nav>
  );
}

export default Navigation;
