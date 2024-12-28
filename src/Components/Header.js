import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/header.module.scss";
import Button from "./Button";
function Header() {
  const navItems = [
    {
      name: "Packages",
      link: "#packages",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Offers",
      link: "#offers",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={styles.navbar}>
            <div>
              <img
                src={Images.Logo1}
                alt="logo-image"
                className={styles.logo1}
              />
            </div>
            <div className={`${styles.navbarUl} ${styles.menu}`}>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
              <div className={`${styles.auth}`}>
                <a href="" className="btn btn-primary">
                  Sign up
                </a>
                <a href="" className={`${styles.login} btn`}>
                  Login
                </a>
              </div>
              <div className={`${styles.hamburger} d-none`}>
                <img
                  src={Images.Hamburger}
                  alt=""
                  className={`${styles["hamburger-img"]}`}
                />
                <img
                  src={Images.Xicon}
                  alt=""
                  className={`${styles["x-icon"]}`}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
