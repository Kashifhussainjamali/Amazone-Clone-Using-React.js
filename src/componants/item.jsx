import style from "./item.module.css";
import { Api1 } from "../context/contextapi1";
import { useContext } from "react";

function Item({ items, func }) {
  let cartValue = useContext(Api1);

  const update = () => {
    func(items.id);
    cartValue.setcartbill(cartValue.cartbill + items.price);
    cartValue.setCart(cartValue.cart + 1);
  };

  const billing = () => {
    if (items.id == 1) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 2) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 3) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 4) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 5) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 6) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 7) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 8) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 9) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 10) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 11) {
      cartValue.setBill(cartValue.bill + items.price);
    } else if (items.id == 12) {
      cartValue.setBill(cartValue.bill + items.price);
    }
  };

  return (
    <>
      <div className={style["productmain"]}>
        <img src={items.img} alt="" className={style["img"]} />
        <p className={style["textname"]}>{items.name}</p>
        <p className={style["newprice"]}>
          <sup className={style["sup"]}>$</sup>
          <b className={style["price"]}>{items.price} </b>
          <sup className={style["sup"]}>{items.sents}</sup>
        </p>
        <p className={style["newprice"]}>
          {items.nprice} Delevery <b>{items.date}</b>
        </p>
        <button className={style["cart"]} onClick={update}>
          Add to cart
        </button>
        <button className={style["cart"]} onClick={billing}>
          Buy Now
        </button>
      </div>
    </>
  );
}
export default Item;
