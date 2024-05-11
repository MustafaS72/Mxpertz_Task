import React, { useEffect, useState } from "react";

const CountdownTimer = ({ seconds, setShowUserModal }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setShowUserModal(true);
    }
  }, [timeLeft, setShowUserModal]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className={timeLeft > 5 ? "text-yellow-300" : "text-red-600"}>
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
