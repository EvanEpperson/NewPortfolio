import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Footer.css'
import { animateScroll as scroll } from "react-scroll";

function Footer() {

    const toggleTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div className="footer-container">
        {/* <section className="footer-subscription">
          <p className="footer-subscription-heading">
            testing the footer out right now{" "}
          </p>
          <p className="footer-subscription-text">you can unsubscribe</p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="footer-input"
              />
              <Button buttonStyle="bttn--outline">Subscribe</Button>
            </form>
          </div>
        </section> */}
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo" onClick={toggleTop}>
                Evan Epperson
                <i class="fas fa-rocket" />
              </Link>
            </div>
            <small class="website-rights">About Me</small>
            <div class="social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/evanepperson/"
                class="social-icon-link linkedin"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/EvanEpperson"
                class="social-icon-link linkedin"
                aria-label="LinkedIn"
              >
                <i class="fab fa-github" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Footer
