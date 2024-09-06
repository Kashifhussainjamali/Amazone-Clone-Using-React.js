import style from "./footer.module.css";
import { GrLanguage } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className={style["footermain"]}>
        <ul className={style["mainul"]}>
          <li>
            <ul className={style["innerul"]}>
              <li className={style["heading"]}>Get to Know Us</li>
              <li className={style["text"]}>Careers</li>
              <li className={style["text"]}>Blog</li>
              <li className={style["text"]}>About Amazon</li>
              <li className={style["text"]}>Investor Relations</li>
              <li className={style["text"]}>Amazon Devices</li>
              <li className={style["text"]}>Amazon Science</li>
            </ul>
          </li>
          <li>
            <ul className={style["innerul"]}>
              <li className={style["heading"]}>Make Money with Us</li>
              <li className={style["text"]}>Sell products on Amazon</li>
              <li className={style["text"]}>Sell on Amazon Business</li>
              <li className={style["text"]}>Sell apps on Amazon</li>
              <li className={style["text"]}>Become an Affiliate</li>
              <li className={style["text"]}>Advertise Your Products</li>
              <li className={style["text"]}>Self-Publish with Us</li>
              <li className={style["text"]}>Host an Amazon Hub</li>
              <li className={style["text"]}>See More Make Money with Us</li>
            </ul>
          </li>
          <li>
            <ul className={style["innerul"]}>
              <li className={style["heading"]}>Amazon Payment Products</li>
              <li className={style["text"]}>Amazon Business Card</li>
              <li className={style["text"]}>Shop with Points</li>
              <li className={style["text"]}>Reload Your Balance</li>
              <li className={style["text"]}>Amazon Currency Converter</li>
            </ul>
          </li>
          <li>
            <ul className={style["innerul"]}>
              <li className={style["heading"]}>Let Us Help You</li>
              <li className={style["text"]}>Amazon and COVID-19</li>
              <li className={style["text"]}>Your Account</li>
              <li className={style["text"]}>Your Orders</li>
              <li className={style["text"]}>Shipping Rates & Policies</li>
              <li className={style["text"]}>Returns & Replacements</li>
              <li className={style["text"]}>Manage Your Content and Devices</li>
              <li className={style["text"]}>Help</li>
            </ul>
          </li>
        </ul>
        <hr style={{ color: "white" }} />
        <ul className={style["lastul"]}>
          <li>
            <img src="logo2.png" alt="" />
          </li>
          <li className={style["lang"]}>
            <GrLanguage style={{ marginRight: "10px" }} />
            English
          </li>
          <li className={style["lang"]}>$ USD - U.S Doller</li>
          <li className={style["lang"]}>
            <img src="flag.png" alt="" className={style["flag"]} />
            United States
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
