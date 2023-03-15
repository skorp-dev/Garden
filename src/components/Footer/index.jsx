import React from "react";
import instagramLogo from "../../icons/instagram.png";
import whatsappLogo from "../../icons/whatsapp.png";
import s from "./style.module.css";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.contacts}>
        <h1>Contact</h1>

        <a className={s.contacts_tel} href="tel:+4999999999">
          +49 999 999 99 99
        </a>

        <div className={s.contacts_links}>
          <a href="/instgram">
            <img src={instagramLogo} alt="instagram" />
            <p>Instagram</p>
          </a>

          <a href="/whatsapp">
            <img src={whatsappLogo} alt="whatsapp" />
            <p>Whatsapp</p>
          </a>
        </div>

        <h1>Adress</h1>

        <a className={s.contacts_adress} href="http://telRan.de">
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </a>

        <p>Working Hours: </p>
        <p className={s.adress_hours}>24 hours a day</p>
      </div>

      <iframe
        className={s.iframe}
        title="gogl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19423.756635345188!2d13.3578823!3d52.5158896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sen!2sde!4v1678022830586!5m2!1sen!2sde"
      ></iframe>
    </div>
  );
}
