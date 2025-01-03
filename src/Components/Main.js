import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/main.module.scss";
import Card from "./Card";
import ListItems from "./ListItems";
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
        breakpoint: 768, // Small tablets or large phones
        settings: {
          slidesToShow: 1.5, // Show 1.5 slides at a time
          centerMode: false,
        },
      },
      {
        breakpoint: 540, // Large mobile screens
        settings: {
          slidesToShow: 1.2, // Show slightly more than 1 card
          centerMode: false,
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

  const benefitsData = [
    {
      text: "Learn one language free",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every Diamond Plus Ambassador registered",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 5 dollars on every Premium Ambassador registered",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 3 dollars on every Enterprise Ambassador registered",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Access Pro Ambassador registered",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every student you bring to language academy",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 5 dollars each from all students your downline register every month",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
  ];

  const benefitsData2 = [
    {
      text: "Learn a language at 60% discount ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Diamond Plus Ambassador registered ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Premium Ambassador registered ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Enterprise Ambassador registered ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Access Pro Ambassador registered ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every student you bring to language academy ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 5 dollars each from all students your down line register every month",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
  ];

  const benefitsData3 = [
    {
      text: "Learn Two languages free ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 20 dollars on every Diamond Plus Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10  dollars on every Premium Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 6 dollars on every Enterprise Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Access Pro Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every student you bring to language academy  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 5 dollars each from all students your down line register every month",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
  ];

  const benefitsData4 = [
    {
      text: "Learn one language free ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 15 dollars on every Diamond Plus Ambassador registered   ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every Premium Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 7.5 dollars on every Enterprise Ambassador registered  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 0 dollars on every Access Pro Ambassador registered   ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 10 dollars on every student you bring to language academy  ",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
    {
      text: "Earn 5 dollars each from all students your down line register every month",
      image: Images.CheckMark,
      imageClass: "check-mark",
    },
  ];
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
            <div className={`${styles["ambassador-packages"]}`}>
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
          </div>
        </section>
        <section className={`${styles["second-section"]}`}>
          <div className={`${styles["subscription-section"]}`}>
            <h2>SUBSCRPTION PLAN AND BENEFITS</h2>
            <div className={`${styles["enterprise-ambassador"]}`}>
              <div className={styles["enterprise-ambassador-left"]}>
                <img
                  src={Images.Man1}
                  alt="man pointing downwards"
                  className={`${styles["Man1"]}`}
                />
              </div>
              <div className={styles["enterprise-ambassador-right"]}>
                <p>Easier decision making for</p>
                <h3>ENTERPRISE AMBASSADOR </h3>
                <ul>
                  {benefitsData.map((benefit, index) => (
                    <ListItems
                      key={index}
                      image={benefit.image}
                      text={benefit.text}
                      imageClass={benefit.imageClass}
                    />
                  ))}
                </ul>
                <a href="" className={styles.subscribe}>
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <div className={`${styles["access-pro-ambassador"]}`}>
            <div className={styles["access-pro-ambassador-left"]}>
              <p>Easier decision making for</p>
              <h3>ACCESS PRO AMBASSADORS </h3>
              <ul>
                {benefitsData2.map((benefit, index) => (
                  <ListItems
                    key={index}
                    image={benefit.image}
                    text={benefit.text}
                    imageClass={benefit.imageClass}
                  />
                ))}
              </ul>
              <a href="" className={styles.subscribe}>
                Subscribe
              </a>
            </div>
            <div className={styles["access-pro-ambassador-right"]}>
              <img
                src={Images.GirlImage3}
                alt="girl folding her hands"
                className={`${styles["GirlImage3"]}`}
              />
            </div>
          </div>
        </section>

        <section className={styles["fourth-section"]}>
          <div className={`${styles["diamond-ambassador"]}`}>
            <div className={styles["diamond-ambassador-left"]}>
              <img
                src={Images.Man2}
                alt="a guy wearing a jean jacket"
                className={`${styles["Man2"]}`}
              />
            </div>
            <div className={styles["diamond-ambassador-right"]}>
              <p>Easier decision making for</p>
              <h3>DIAMOND AMBASSADORS </h3>
              <ul>
                {benefitsData3.map((benefit, index) => (
                  <ListItems
                    key={index}
                    image={benefit.image}
                    text={benefit.text}
                    imageClass={benefit.imageClass}
                  />
                ))}
              </ul>
              <a href="" className={styles.subscribe}>
                Subscribe
              </a>
            </div>
          </div>
        </section>

        <section className={styles["fifth-section"]}>
          <div className={`${styles["premium-ambassador"]}`}>
            <div className={styles["premium-ambassador-left"]}>
              <p>Easier decision making for</p>
              <h3>ACCESS PRO AMBASSADORS </h3>
              <ul>
                {benefitsData4.map((benefit, index) => (
                  <ListItems
                    key={index}
                    image={benefit.image}
                    text={benefit.text}
                    imageClass={benefit.imageClass}
                  />
                ))}
              </ul>
              <a href="" className={styles.subscribe}>
                Subscribe
              </a>
            </div>
            <div className={styles["premium-ambassador-right"]}>
              <img
                src={Images.GirlImage4}
                alt="girl folding her hands"
                className={`${styles["GirlImage4"]}`}
              />
            </div>
          </div>
        </section>
        <section className={styles["sixth-section"]}>
          <div className={`${styles["we-can-help"]}`}>
            <div className={styles["first-avatars"]}>
              <img src={Images.Avatar1} alt=""  className={styles["Avatar1"]}/>
              <img src={Images.Avatar2} alt="" className={styles["Avatar2"]}/>
            </div>
            <div className={styles["hear-from-us"]}>
              <h2>Doubting? Hear from others</h2>
              <p>
                Do you require some help for your project: Conception workshop,
                prototyping, marketing strategy, landing page, Ux/UI?
              </p>
              <a href="">Register Now</a>
            </div>
            <div className={styles["second-avatars"]}>
              <img src={Images.Avatar3} alt="" />
              <img src={Images.Avatar4} alt="" />
            </div>
            <div className={styles["third-avatar"]}>
              <img src={Images.Avatar5} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
