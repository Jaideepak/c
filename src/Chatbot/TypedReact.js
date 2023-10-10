import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedReact = () => {
  const el = React.useRef(null);

  const typed = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        showCursor: true,
        strings: [
          '<span style="color: Black;">Click on the Bot icon to get started</span>',
          '<span style="color: Black;">Check out Today\'s Headlines</span>'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000
      };

      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      };
    }, 1000);
  }, []);

  return (
    <div>
      <h3>
        <span ref={el} />
      </h3>
    </div>
  );
};

export default TypedReact;
