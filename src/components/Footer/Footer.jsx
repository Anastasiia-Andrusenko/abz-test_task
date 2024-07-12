

import css from './Footer.module.scss';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const email = "nastya.andrus@gmail.com";
  const displayEmail = email.replace('@', '(at)');

  return <div className={css.wrapper}>
    <div className={css.footer}>
      <p className={css.copyright}> {'\u00a9'} abz.agency specially for the test task.</p>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <a href=' ' onClick={() => window.location.href = `mailto:${email}`} className={css.link}>
            <IoMdMail className={css.icon}/>
              {displayEmail}
          </a>
        </li>
        <li className={css.contactItem}><a href="https://www.linkedin.com/in/anastasiia-andrusenko/" target="blank"
            className={css.link}>
              <FaLinkedin className={css.icon}/>
              linkedin
            </a></li>
      </ul>
    </div>
  </div>
};


export default Footer;