import React, { useState, useEffect } from "react";

const delay = 2;

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(false), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  if (show) {
    return (
      <div className={`${variant} message`}>
        <div className="pr-1">{children}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Message;
