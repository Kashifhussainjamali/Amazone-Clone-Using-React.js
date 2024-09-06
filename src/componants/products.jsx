import style from "./products.module.css";
import Item from "./item";
import { useRef, useState } from "react";
import Cart from "./cart";

function Products() {
  let item1 = {
    name: "Tropical Rainforest Table Cloth for Rectangle Table Stain and Wrinkle Resistant Tablecloths Decorative Kitchen Dining Table",
    id: 1,
    price: 21,
    img: "pic1.jpg",
    sents: 99,
    nprice: "$7.11",
    date: "Sep 17 - 27",
  };
  let item2 = {
    name: "Rainbow Rose Flower Table Cloth for Rectangle Table Stain and Wrinkle Resistant Tablecloths Decorative Kitchen",
    id: 2,
    price: 23,
    img: "pic2.jpg",
    sents: 99,
    nprice: "$7.11",
    date: "Sep 17 - 27",
  };
  let item3 = {
    name: "Indigo Blue Trellis Dining Table Runner Dresser Scarves,Kitchen Table Runners for Farmhouse Dinner, Holiday Parties,",
    id: 3,
    price: 21,
    img: "pic3.jpg",
    sents: 99,
    nprice: "$7.11",
    date: "Sep 17 - 27",
  };
  let item4 = {
    name: "Round Tablecloth 60 Inch Waterproof Cute Xmas Reindeer Table Cloth Stain and Wrinkle Resistant Table Cloth Washable",
    id: 4,
    price: 17,
    img: "pic4.jpg",
    sents: 38,
    nprice: "$6.49",
    date: "Sep 20 - Oct 7",
  };

  let item5 = {
    name: "Acrylic Magnetic Dry Erase Board Calendar for Fridge, 16.5 Inch Clear Dry Erase Calendar for Refrigerator, Magnetic Plannin",
    id: 5,
    price: 14,
    img: "pic5.jpg",
    sents: 99,
    nprice: "$8.49",
    date: "Sep 10 - Oct 17",
  };

  let item6 = {
    name: "All-new Amazon Echo Spot (2024 release), Smart alarm clock with vibrant sound + Alexa, Black",
    id: 6,
    price: 70,
    img: "pic6.jpg",
    sents: 99,
    nprice: "$9.99",
    date: "Sep 9 - Sep 23",
  };

  let item7 = {
    name: "O-Cedar EasyWring RinseClean Microfiber Spin Mop & Bucket Floor Cleaning System, Grey",
    id: 7,
    price: 54,
    img: "pic7.jpg",
    sents: 99,
    nprice: "$5.49",
    date: "Sep 10 - Oct 22",
  };

  let item8 = {
    name: "JouleLoom Power Strip Surge Protector with 11 Outlets, 4 USB and 2 USB C Ports, 5 Ft Extension Cord, Flat Plug, Wall",
    id: 8,
    price: 19,
    img: "pic8.jpg",
    sents: 99,
    nprice: "$2.99",
    date: "Sep 10 - Oct 12",
  };
  let item9 = {
    name: "Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC, PS4, PS5",
    id: 9,
    price: 39,
    img: "pic9.jpg",
    sents: 99,
    nprice: "$9.99",
    date: "Sep 11 - Oct 1",
  };
  let item10 = {
    name: "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic,",
    id: 10,
    price: 18,
    img: "pic10.jpg",
    sents: 50,
    nprice: "$2.99",
    date: "Sep 10 - Oct 12",
  };
  let item11 = {
    name: "Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor, 12,000 DPI, Lightweight, 6 Programmable",
    id: 11,
    price: 9,
    img: "pic11.jpg",
    sents: 99,
    nprice: "$2.99",
    date: "Sep 14 - Oct 2",
  };
  let item12 = {
    name: "ASUS ROG Spatha X Wireless Gaming Mouse (Magnetic Charging Stand, 12 Programmable Buttons, 19,00",
    id: 12,
    price: 99,
    img: "pic12.jpg",
    sents: 99,
    nprice: "$2.99",
    date: "Sep 1 - Oct 2",
  };
  let [a, b] = useState([]);

  const Funco = (id) => {
    if (id == 1) {
      b([...a, <Item items={item1}></Item>]);
    } else if (id == 2) {
      b([...a, <Item items={item2}></Item>]);
    } else if (id == 3) {
      b([...a, <Item items={item3}></Item>]);
    } else if (id == 4) {
      b([...a, <Item items={item4}></Item>]);
    } else if (id == 5) {
      b([...a, <Item items={item5}></Item>]);
    } else if (id == 6) {
      b([...a, <Item items={item6}></Item>]);
    } else if (id == 7) {
      b([...a, <Item items={item7}></Item>]);
    } else if (id == 8) {
      b([...a, <Item items={item8}></Item>]);
    } else if (id == 9) {
      b([...a, <Item items={item9}></Item>]);
    } else if (id == 10) {
      b([...a, <Item items={item10}></Item>]);
    } else if (id == 11) {
      b([...a, <Item items={item11}></Item>]);
    } else if (id == 12) {
      b([...a, <Item items={item12}></Item>]);
    }
  };

  return (
    <>
      <h3 className={style["text1"]}>Table Cover Sheets</h3>
      <div className={style["products"]}>
        <Item items={item1} func={Funco}></Item>
        <Item items={item2} func={Funco}></Item>
        <Item items={item3} func={Funco}></Item>
        <Item items={item4} func={Funco}></Item>
      </div>
      <Cart a={a}></Cart>
      <h3 className={style["text1"]}>Electrnics Items</h3>
      <div className={style["products"]}>
        <Item items={item5} func={Funco}></Item>
        <Item items={item6} func={Funco}></Item>
        <Item items={item7} func={Funco}></Item>
        <Item items={item8} func={Funco}></Item>
      </div>

      <h3 className={style["text1"]}>Gamming Items</h3>
      <div className={style["products"]}>
        <Item items={item9} func={Funco}></Item>
        <Item items={item10} func={Funco}></Item>
        <Item items={item11} func={Funco}></Item>
        <Item items={item12} func={Funco}></Item>
      </div>
    </>
  );
}
export default Products;
