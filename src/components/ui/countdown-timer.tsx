
import React, { useState, useEffect } from "react";
import { Card } from "./card";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onComplete?: () => void;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 1,
  initialMinutes = 0,
  initialSeconds = 0,
  onComplete,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Calculate new time
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        // Check if countdown is complete
        if (newHours === 0 && newMinutes === 0 && newSeconds === 0) {
          clearInterval(countdownInterval);
          if (onComplete) onComplete();
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(countdownInterval);
  }, [onComplete]);

  // Format time digits with leading zeros
  const formatTimeDigit = (digit: number) => digit.toString().padStart(2, "0");

  return (
    <Card className={`p-4 bg-black/60 backdrop-blur-sm border border-orange-500/20 ${className}`}>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{formatTimeDigit(timeLeft.hours)}</div>
          <div className="text-xs uppercase text-muted-foreground">Hours</div>
        </div>
        <div className="text-xl md:text-2xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{formatTimeDigit(timeLeft.minutes)}</div>
          <div className="text-xs uppercase text-muted-foreground">Minutes</div>
        </div>
        <div className="text-xl md:text-2xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{formatTimeDigit(timeLeft.seconds)}</div>
          <div className="text-xs uppercase text-muted-foreground">Seconds</div>
        </div>
      </div>
    </Card>
  );
};

export default CountdownTimer;
