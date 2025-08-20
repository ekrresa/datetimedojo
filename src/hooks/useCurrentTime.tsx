"use client";

import * as React from "react";
import { useAnimationFrameLoop } from "react-timing-hooks";

export function useCurrentTime() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  const controls = useAnimationFrameLoop(
    () => {
      setCurrentTime(new Date());
    },
    { startOnMount: true }
  );

  return { currentTime, controls };
}
