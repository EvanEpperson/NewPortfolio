import React from "react";
import "../../App.css";

export default function Products() {
  return (
    <>
      <div>
        <h1>Screen Shots of App</h1>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/EvanEpperson/PenPals"
          class="social-icon-link linkedin"
          aria-label="LinkedIn"
        >
          <img
            className="services"
            src="https://i.imgur.com/vuPcos5.png"
            alt="testing"
          />
          <img
            className="services"
            src="https://i.imgur.com/Tyzs6Ee.png"
            alt="testing"
          />
        </a>
      </div>
    </>
  );
}

