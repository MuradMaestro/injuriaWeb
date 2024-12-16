import React, { useState, useEffect } from "react";

const Count = () => {
  const targetDate = new Date("2024-12-21T10:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({});
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center pt-20 md:gap-6 w-full">
      {timeLeft.days !== undefined && (
        <div className="font-nunito flex items-center justify-center text-[#252525]  w-full ">
          <div className="flex flex-col items-center  md:w-[20%] w-[25%] ">
            <div className=" font-bold md:text-[42px] text-[28px]">{timeLeft.days}</div>
            <span className="md:text-[14px] text-[12px]">Gün</span>
          </div>
          <div className="w-[1px]  h-[10vh] md:h-[15vh] bg-[#252525]"></div>
          <div className="flex flex-col items-center md:w-[20%] w-[25%]">
            <div className=" font-bold md:text-[42px] text-[28px]">{timeLeft.hours}</div>
            <span className="md:text-[14px] text-[12px]">Saat</span>
          </div>
          <div className="w-[1px] h-[10vh] md:h-[15vh] bg-[#252525]"></div>
          <div className="flex flex-col items-center md:w-[20%] w-[25%]">
            <div className=" font-bold md:text-[42px] text-[28px]">{timeLeft.minutes}</div>
            <span className="md:text-[14px] text-[12px]">Dəqiqə</span>
          </div>
          <div className="w-[1px] h-[10vh] md:h-[15vh] bg-[#252525]"></div>
          <div className="flex flex-col items-center md:w-[20%] w-[25%]">
            <div className=" font-bold md:text-[42px] text-[28px]">{timeLeft.seconds}</div>
            <span className="md:text-[14px] text-[12px]">Saniyə</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Count;
