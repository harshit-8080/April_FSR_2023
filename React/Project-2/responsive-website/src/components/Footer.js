import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_about">
            <img
              style={{ height: "100px", width: "100px" }}
              src="https://i.pinimg.com/originals/86/86/f9/8686f9ea211fd545c94445c4376eb20b.jpg"
              alt=""
            />
            <h3>HashCrypto</h3>
            <p>Only Platform to Invest in Future</p>
          </div>
          <div className="footer_contact">
            <h3>Contact Us</h3>
            <p>Email: info@hashCrypto.com</p>
            <p>Phone: 979869763782</p>
            <p>Address: India</p>
          </div>
          <div className="footer_follow">
            <a href="">
              <FaFacebook className="icon" />
            </a>
            <a href="">
              <FaInstagram className="icon" />
            </a>
            <a href="">
              <FaWhatsapp className="icon" />
            </a>
            <a href="">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 HashCrypto - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
