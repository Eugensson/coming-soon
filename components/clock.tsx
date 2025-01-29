"use client";

import { useEffect, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Clock = () => {
  const [targetTime, setTargetTime] = useState<number | null>(null);

  useEffect(() => {
    setTargetTime(Date.now() + 24 * 3600 * 1000 + 5000);
  }, []);

  return (
    <>
      {targetTime && (
        <FlipClockCountdown
          to={targetTime}
          className="flipClock mb-20"
          style={{
            fontFamily: "Orbitron",
            fontWeight: 700,
          }}
        />
      )}
    </>
  );
};

export default Clock;
