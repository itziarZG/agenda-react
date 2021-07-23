import React from "react";
import Link from 'next/link'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer_box1">
        <div className="footer_logo"></div>

        <p className="copyright">&copy; 2021</p>
        <Link href="/info" className="footer_info">
          {" "}
          + info
        </Link>
      </div>

      <div className="footer_box2">
        <p>
          Design by{" "}
          <a href="http://marga.pro" className="footer_authors">
            Marga Martinez
          </a>
        </p>
        <p>
          Created by <span className="footer_authors">ItziarZG & Marga</span>
        </p>

        <p className="footer_mail">agendapequeseivissa@gmail.com</p>
      </div>
      <div className="footer_detail"></div>
    </div>
  );
};

export default Footer;
