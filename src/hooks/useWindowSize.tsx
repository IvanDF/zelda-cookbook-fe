import { useEffect, useState } from "react";

export type IBreakpoint = "MOBILE" | "TABLET" | "DESKTOP";

const useWindowSize = () => {
  // Breackpoints handler
  const breakpointHandler = (width: number) => {
    if (width <= 767) {
      return "MOBILE";
    } else if (width >= 768 && width <= 1171) {
      return "TABLET";
    } else {
      return "DESKTOP";
    }
  };

  // Set default breakpoint on page load
  const [breakpoint, setBreakpoint] = useState<IBreakpoint>(
    breakpointHandler(window.innerWidth)
  );

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width to state
      setBreakpoint(breakpointHandler(window.innerWidth));
    };
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { breakpoint };
};

export default useWindowSize;
