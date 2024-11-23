import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {/* Category Section */}
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>

          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>

          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling</span>
            <span>Buying</span>
          </div>
      
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          {/* More from SkillLink */}
          <div className="item">
            <h2>More From SkillLink</h2>
            <span>SkillLink Business</span>
            <span>SkillLink Pro</span>
            <span>SkillLink Logo Maker</span>
            <span>SkillLink Guides</span>
            <span>Get Inspired</span>
            <span>SkillLink Select</span>
            <span>ClearVoice</span>
            <span>SkillLink Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
 
        <hr />
        <div className="bottom">
          <div className="left">
            <Link className="brand-link" to="/">
              <span className="brand-text">SkillLink</span>
            </Link>
            <span>© SkillLink X SkillMingle</span>
          </div>
          <div className="right">
            {/* Social Media */}
            <div className="social">
              <img src="/img/twitter.png" alt="Twitter logo" />
              <img src="/img/facebook.png" alt="Facebook logo" />
              <img src="/img/linkedin.png" alt="LinkedIn logo" />
              <img src="/img/pinterest.png" alt="Pinterest logo" />
              <img src="/img/instagram.png" alt="Instagram logo" />
            </div>
            {/* Language */}
            <div className="language">
              <img src="/img/language.png" alt="Language selector" />
              <span>English</span>
            </div>
            {/* Currency */}
            <div className="currency">
              <img src="/img/coin.png" alt="Currency selector" />
              <span>USD</span>
            </div>
            {/* Accessibility */}
            <img
              className="accessibility"
              src="/img/accessibility.png"
              alt="Accessibility settings"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
