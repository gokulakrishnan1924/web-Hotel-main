import React from "react";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Weboin</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Dining</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h4>WELCOME TO</h4>
          <h1>Weboin</h1>
          <p>RESORT & SPA HOTEL</p>
          <button>LEARN MORE</button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-text">
          <h2>Welcome to your luxurious home away from home</h2>
          <p>
            Write a paragraph that talks about your brand or property here.
            Convince your prospective clients to choose you and your offerings
            by highlighting the unique value you can offer.
          </p>
        </div>
        <div className="welcome-img">
          <img src="https://picsum.photos/500/300" alt="Pool" />
        </div>
      </section>

      {/* Accommodations */}
      <section className="accommodations">
        <h2>Accommodations</h2>
        <div className="accom-grid">
          <div>
            <img src="https://picsum.photos/300/200?1" alt="Deluxe Room" />
            <p>
              De Luxe Room
              <br />
              from $299 a night
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/300/200?2" alt="Sea View" />
            <p>
              De Luxe Sea View
              <br />
              from $399 a night
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/300/200?3" alt="Family Suite" />
            <p>
              The Alon Family Suite
              <br />
              from $599 a night
            </p>
          </div>
        </div>
      </section>

      {/* Family Suite */}
      <section className="family-suite">
        <h2>The Family Suite</h2>
        <div className="suite-grid">
          <div>
            <img src="https://picsum.photos/400/250?4" alt="Suite Bed" />
          </div>
          <div>
            <img src="https://picsum.photos/400/250?5" alt="Suite Bath" />
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="promos">
        <h2>Promos and Offers</h2>
        <div className="promo-grid">
          <div>
            <img src="https://picsum.photos/300/200?6" alt="Early Bird" />
            <p>Early Bird Discount</p>
          </div>
          <div>
            <img src="https://picsum.photos/300/200?7" alt="Free Night" />
            <p>Book 3 Nights, Get 1 Night Free</p>
          </div>
          <div>
            <img src="https://picsum.photos/300/200?8" alt="Members Club" />
            <p>Weboin Members Club</p>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="press">
        <h2>In the Press</h2>
        <div className="press-grid">
          <div>
            <p>"Boost your product and service's credibility..."</p>
          </div>
          <div>
            <p>"Boost your product and service's credibility..."</p>
          </div>
          <div>
            <p>"Boost your product and service's credibility..."</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-top">
          <div>
            <h4>RESERVATIONS OFFICE</h4>
            <p>
              123 Anywhere St.
              <br />
              Any City ST 12345
            </p>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div>
            <h4>OFFICE HOURS</h4>
            <p>
              Mon - Fri: 9:00 am to 6:00 pm
              <br />
              Sat: 9:00 am to 12:00 noon
            </p>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <h2 className="footer-logo">Weboin Hotel</h2>
      </footer>
    </div>
  );
}

export default Home;
