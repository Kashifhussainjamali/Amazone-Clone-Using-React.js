import style from "./navbar.module.css";

import { Api1 } from "../context/contextapi1";
import { useContext } from "react";

import { SlLocationPin } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Navbar() {
  let cartValue = useContext(Api1);
  return (
    <>
      <nav class="navbar navbar-expand-lg" id={style["main"]}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="logo.png" alt="" />
          </a>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["pak"]}
                >
                  <SlLocationPin /> Pakistan
                </a>
              </li>
              <div className={style["searchmain"]}>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id={style["all"]}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Departments
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Best Sallers
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        All Departments
                      </a>
                    </li>
                  </ul>
                </li>
                <input
                  type="text"
                  name=""
                  placeholder="Search"
                  className={style["search"]}
                />
                <p className={style["searchiconmain"]}>
                  <LuSearch className={style["sicon"]} />
                </p>
              </div>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["lang"]}
                >
                  <img src="flag.png" alt="" className={style["flag"]} />
                  EN
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["lang"]}
                >
                  Accounts & Lists
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["lang"]}
                >
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["lang"]}
                >
                  {" "}
                  
                  <button className={style["cartbtn"]} onClick={()=>{cartValue.ref1.current.style.visibility="visible"}}>
                  <b className={style["cartvalue"]}>{cartValue.cart}</b>{" "}
                  <PiShoppingCartSimpleBold className={style["cart"]} />
                  Cart
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
