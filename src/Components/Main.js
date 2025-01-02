import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/main.module.scss";
import Card from "./Card";
function Main() {
  const cardData = [
    {
      image: Images.Group4,
      title: "Enterprise",
      description: (
        <>
          ENTERPRISE-30 dollars
          <br />
          Our enterprise package contains a whole lot to learn and earn with.
        </>
      ),
      link: { text: "Learn More", url: "#", icon: "path-to-arrow-icon.jpg" },
    },
    {
      image: Images.Group1,
      title: "Access Pro",
      description: (
        <>
          ACCESS PRO-Free
          <br /> Yes! FREE! Enjoy the best of our Access pro package all for
          FREE
        </>
      ),
      link: { text: "Learn More", url: "#", icon: "path-to-arrow-icon.jpg" },
    },
    {
      image: Images.Group2,
      title: "Diamond Plus",
      description: (
        <>
          DIAMOND PLUS-100 dollars. Get
          <br /> access to all our diamond packages with just $100.
        </>
      ),
      link: { text: "Learn More", url: "#", icon: "path-to-arrow-icon.jpg" },
    },
    {
      image: Images.Group3,
      title: "Premimum",
      description: (
        <>
          PREMIUM-50 dollars. With just $50,
          <br /> get the best of all that is included in our Premium
          subscription
        </>
      ),
      link: { text: "Learn More", url: "#", icon: "path-to-arrow-icon.jpg" },
    },
  ];
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const sliderSettings = {
    dots: true, // Enable pagination dots
    infinite: false, // Disable infinite scrolling
    slidesToShow: 2.5, // Show 2.5 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: true, // Centers the active slide
    initialSlide: 1.5, // Start at the second slide (index 1)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

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
            <img
              src={Images.GirlImage1}
              alt="Girl holding a book"
              className={styles["first-girl-img"]}
            />
            <img
              src={Images.GirlImage2}
              alt=""
              className={`${styles["second-girl-img"]} d-none`}
            />
          </div>
        </div>
        <section className={styles["first-section"]}>
          <div className={styles["packages"]}>
            <div className={styles["ambassador-packages"]}>
              <h2>AMBASSADOR PACKAGES</h2>
              <p>
                Our approach to teaching is unique and our teachers are
                extremely highly rated. We are affordable, simple, effective and
                very intensive{" "}
              </p>
            </div>
            <div className={styles.mainContainer}>
              <Slider {...sliderSettings}>
                {cardData.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                  />
                ))}
              </Slider>
            </div>
            {/* <div className={styles.singleCard}>
                <Card
                  image={cardData[3].image}
                  title={cardData[3].title}
                  description={cardData[3].description}
                  link={cardData[3].link}
                />
              </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
