import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="LogoImage" />
          <span>amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111, North avenue Orlando Fl, 32801</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>654-9876-765</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>pawan@gmail.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign Up</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copywright}>
        <span>Copywright @2023 by Amazon</span>
        <span>All right reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
