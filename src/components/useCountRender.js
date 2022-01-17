import { useRef } from "react";

// custom Hook to keep count each time a component renders
export const useCountRenders = (name) => {
  const renders = useRef(0);
  console.log(`${name} component render count is: `, renders.current++);
};
