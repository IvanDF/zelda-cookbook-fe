import { useEffect, useRef } from "react";

const useOutsideClickRef = (handler: (e: boolean) => void) => {
  // Initialize referece
  const ref = useRef<HTMLEmbedElement>(null);

  useEffect(() => {
    // Set click ouside hanlder
    const handleClickOutside = (event: { target: any }) => {
      // Check if referece exist & it is not hovered
      if (ref.current && !ref.current.contains(event.target)) {
        handler(false);
      }
    };

    // Add & Clear mouse down event listerer
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);

  return { ref };
};

export default useOutsideClickRef;
