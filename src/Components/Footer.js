import React from "react";
import Images from "../assests/images";
import styles from "../styles/modules/footer.module.scss";

function Footer() {
  const footerNavItems1 = [
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Responsibilities",
      link: "#responsibilities",
    },
    {
      name: "Our Services",
      link: "#services",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const footerNavItems2 = [
    {
      name: "Disclaimer",
      link: "#disclaimer",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Privacy Policy",
      link: "#privacypolicy",
    },
    {
      name: "Terms of Service",
      link: "#TermsofService",
    },
  ];
  const socialLinks = [
    { href: "https://facebook.com", src: Images.Facebook, alt: "Facebook" },
    { href: "https://twitter.com", src: Images.Twitter, alt: "Twitter" },
    { href: "https://instagram.com", src: Images.Instagram, alt: "Instagram" },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <nav>
          <div className={styles["footer-navbar"]}>
            <div>
              <img
                src={Images.Logo2}
                alt="logo-white"
                className={`${styles.Logo2}`}
              />
            </div>
            <div className={`${styles["footer-navbar-ul"]}`}>
              <ul className={styles.ul}>
                {footerNavItems1.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerNavItems2.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.socials}>
              {socialLinks.map((social, index) => (
                <a href={social.href} key={index} target="_blank">
                  <img src={social.src} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
