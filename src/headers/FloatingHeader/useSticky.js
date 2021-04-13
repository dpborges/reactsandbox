import { useEffect, useRef, useState } from "react";

import './floating-header.css';


function useSticky() {
    
    const [isSticky, setSticky] = useState(false); /* initialize isStick to false */

    // Establish a ref, to be able to store a DOM node. Once the reference is attached to the Dom node,
    // React will assign the element.current for the attached DOM element when the component mounts, and 
    // set it back to null when it unmounts.
    const elementRef = useRef(null);                  

    /* Returns the dimensions of the element and its position relative to viewport. All dimensions, 
      except width and height, are relative to the top left corner of the viewport (0,0). See link below
      https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect */
    const getElementDimensions = (ele) => {
      // console.log(JSON.stringify(ele.getBoundingClientRect()))
      // const heightOfElement = ele.getBoundingClientRect().height;
      // const distanceFromTopOfViewPort = ele.getBoundingClientRect().y;

      return {
        heightOfElement:           ele.getBoundingClientRect().height,
        distanceFromTopOfViewPort: ele.getBoundingClientRect().y
      };
    };

    /*  Set and unset sticky status on scroll based on trigger  */
    const handleScroll = () => {
      const { distanceFromTopOfViewPort } = getElementDimensions(elementRef.current);
      const numPixelsScrolled = window.pageYOffset;
      distanceFromTopOfViewPort < 1 && numPixelsScrolled >= 161
      ? setSticky(true)
      : setSticky(false)
      console.log(`numPixelsScrolled: ${numPixelsScrolled} distanceFromTopOfViewPort: ${distanceFromTopOfViewPort}`);
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return {isSticky, elementRef}
}

export default useSticky