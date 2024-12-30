import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/main.module.scss";
function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={`${styles["hero-section"]} d-flex`}>
          <div className={styles["hero-left"]}>
            <div className={`${styles["language-ambassador"]} text1`}>
              <h1>
                Earn over <span className="text-primary"> $500</span> Monthly
              </h1>
              <h2>
                <span className="text-primary">LEARN AND EARN</span>
              </h2>
              <h2>BECOME OUR LANGUAGE AMBASSADOR</h2>
            </div>
            <div className={`${styles["platform-description"]} text2 mb-5`}>
              <p>
                Our online education platform is a fully functional learning
                place consisting of virtual class,e-library,testing/assessment
                modus and others.It is an interactive medium where students can
                engage the teachers just from the comfort of their homes.
              </p>
            </div>
            <div className={`${styles["join-now-btn"]}`}>
              <a href="" className="btn-secondary">
                <span>
                  Join Now
                  <img src={Images.Arrow} alt="arrow-image" />
                </span>
              </a>
            </div>
          </div>
          <div className={styles["hero-right"]}>
            <img src={Images.GirlImage1} alt="Girl holding a book" className={styles["first-girl-img"]}/>
            <img src={Images.GirlImage2} alt="" className={`${styles["second-girl-img"]} d-none`}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
