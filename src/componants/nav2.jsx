import style from "./nav2.module.css";
import { IoReorderThreeOutline } from "react-icons/io5";

function Nav2() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " id={style["main"]}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#" id={style["text"]}>
            <IoReorderThreeOutline className={style["allicon"]} />
            All
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["text"]}
                >
                  Today's Deals
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["text"]}
                >
                  Customer Service
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["text"]}
                >
                  Registry
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["text"]}
                >
                  Gift Cards
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  id={style["text"]}
                >
                  Sell
                </a>
              </li>
            </ul>
            <span class="navbar-text" id={style["text"]}>
              Shop the Gaming Store
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav2;
