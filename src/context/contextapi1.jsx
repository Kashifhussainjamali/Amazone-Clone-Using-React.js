import { createContext, useRef, useState } from "react";

export const Api1 = createContext(null);

export const ContextApi = (props) => {
  let [cart, setCart] = useState(0);
  let ref1 = useRef();
  let [bill, setBill] = useState(0);
  let [cartbill, setcartbill] = useState(0);
  return (
    <>
      <Api1.Provider
        value={{ cart, setCart, ref1, bill, setBill, cartbill, setcartbill }}
      >
        {" "}
        {props.children}
      </Api1.Provider>
    </>
  );
};
