import style from "./cart.module.css";
import { Api1 } from "../context/contextapi1";
import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Cart = ({ a }) => {
  let cart = useContext(Api1);
  return (
    <>
      <div className={style["cartmain"]} ref={cart.ref1}>
        <button
          className={style["stylebtn"]}
          onClick={() => {
            cart.ref1.current.style.visibility = "hidden";
          }}
        >
          {" "}
          <MdOutlineCancel className={style["x"]} />
        </button>

        <h2 style={{ marginLeft: "10px" }}>Total Carts: {cart.cart}</h2>
        <h3 style={{ marginLeft: "10px" }}>
          Your total Cart items bill is: ${cart.cartbill}
        </h3>
        <h3 style={{ marginLeft: "10px" }}>Your total bill is: ${cart.bill}</h3>
        <div className={style["cartdata"]}>{a}</div>
      </div>
    </>
  );
};
export default Cart;
