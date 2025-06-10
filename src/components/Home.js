// src/components/Home.js
import React, { useState } from "react";
import "./Home.css";
import music from "../assest/ayyagarujpeg.jpg";
import church from "../assest/chuechimAGE.jpg";
import evg from "../assest/ammagarujpeg.jpg";
import me from "../assest/nithin2jpeg.jpg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "./Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import SliderOne from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (1).jpeg'
import Slider2 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (3).jpeg'
import Slider3 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (4).jpeg'
import Slider4 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (16).jpeg'
import Slider5 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (5).jpeg'
import Slider6 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (6).jpeg'
import Slider7 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (7).jpeg'
import Slider8 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (8).jpeg'
import Slider9 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (9).jpeg'
import Slider10 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (10).jpeg'
import Slider11 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (11).jpeg'
import Slider12 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (12).jpeg'
import Slider13 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (13).jpeg'
import Slider14 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (14).jpeg'
import Slider15 from '../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (15).jpeg'



const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    SliderOne,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    Slider9,
    Slider10,
    Slider11,
    Slider12,
    Slider13,
    Slider14,
    Slider15,
  ];
  const settings = {
    centerMode: true,
    centerPadding: "100px", // Makes side images visible
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
  };
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const locations = ["Hyderabad"];

  const serviceSchedule = [
    { title: "Sunday Prayers", times: ["6 AM", "9 AM", "12 PM", "6 PM"] },
    { title: "Fasting Prayer", times: ["-", "-", "-", "-"] },
    { title: "Sponsors Meet", times: ["-", "-", "-", "-"] },
    { title: "Daily Evening Prayers", times: ["-", "-", "-", "-"] },
  ];

  return (
    <div className="home-container">
      <h1 className="Cname"> Welcome to Jesus Prayer Ministries</h1>
      <div className="image-wrapper">
        <img src={church} alt="Music Stage" className="music-image" />
      </div>
      // Add this right before <h2 className="timings">Church Timings2</h2>
      <div className="highlight-card">
        <div className="card-image">
          <img src={music} alt="Worship" />
        </div>
        <div className="card-text">
          <h2>Worship With Us</h2>
          <p>Pleasure to welcome you to Calvary Temple, India</p>
          <p>
            <strong>Man of God:</strong> Pastor Rev P Satish Kumar
          </p>
          <p>
            Pastor Satish Kumar is a highly respected and accepted preacher
            across the globe for the following reasons:
          </p>
          <ul>
            <li>
              Consistent teaching: He focuses on love, hope, and redemption
              without criticizing others.
            </li>
            <li>
              Transparency: Never took a salary; financial operations are clear.
            </li>
          </ul>

          {showMore && (
            <>
              <ul>
                <li>Humility: Despite fame, he remains grounded and simple.</li>
                <li>
                  Charity: Raised 5000+ spiritual warriors to establish Calvary
                  Temple churches.
                </li>
              </ul>
              <p>
                Read more about his mission to transform lives through faith and
                service.
              </p>
            </>
          )}

          <span className="read-more-text" onClick={handleToggle}>
            {showMore ? "Read less" : "Read more"}
          </span>
        </div>
      </div>
      <div className="highlight-card">
        <div className="card-text">
          <h2>Worship With Us</h2>
          <p>Pleasure to welcome you to Calvary Temple, India</p>
          <p>
            <strong>Man of God:</strong> Pastor Rev P Satish Kumar
          </p>
          <p>
            Pastor Satish Kumar is a highly respected and accepted preacher
            across the globe for the following reasons:
          </p>
          <ul>
            <li>
              Consistent teaching: He focuses on love, hope, and redemption
              without criticizing others.
            </li>
            <li>
              Transparency: Never took a salary; financial operations are clear.
            </li>
          </ul>

          {showMore && (
            <>
              <ul>
                <li>Humility: Despite fame, he remains grounded and simple.</li>
                <li>
                  Charity: Raised 5000+ spiritual warriors to establish Calvary
                  Temple churches.
                </li>
              </ul>
              <p>
                Read more about his mission to transform lives through faith and
                service.
              </p>
            </>
          )}

          <span className="read-more-text" onClick={handleToggle}>
            {showMore ? "Read less" : "Read more"}
          </span>
        </div>

        <div className="card-image">
          <img src={evg} alt="Worship" />
        </div>
      </div>
      <div className="highlight-card">
        <div className="card-image">
          <img src={me} alt="Worship" />
        </div>
        <div className="card-text">
          <h2>Worship With Us</h2>
          <p>Pleasure to welcome you to Calvary Temple, India</p>
          <p>
            <strong>Man of God:</strong> Pastor Rev P Satish Kumar
          </p>
          <p>
            Pastor Satish Kumar is a highly respected and accepted preacher
            across the globe for the following reasons:
          </p>
          <ul>
            <li>
              Consistent teaching: He focuses on love, hope, and redemption
              without criticizing others.
            </li>
            <li>
              Transparency: Never took a salary; financial operations are clear.
            </li>
          </ul>

          {showMore && (
            <>
              <ul>
                <li>Humility: Despite fame, he remains grounded and simple.</li>
                <li>
                  Charity: Raised 5000+ spiritual warriors to establish Calvary
                  Temple churches.
                </li>
              </ul>
              <p>
                Read more about his mission to transform lives through faith and
                service.
              </p>
            </>
          )}

          <span className="read-more-text" onClick={handleToggle}>
            {showMore ? "Read less" : "Read more"}
          </span>
        </div>
      </div>


      <div className="message-container">
        <div className="message-text">
          <h1>Watch our Sunday Service Live</h1>
          <p>
            Watch the latest live message from the man of God and be blessed and
            empowered in your spirit.
          </p>
          <div className="button-group">
            <a
              href="https://www.youtube.com/channel/UC_YKXJtPVGfEHIyln_k0bow"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-now"
            >
              Our Channel ⏯
            </a>

            <a
              href="https://www.youtube.com/channel/UC_YKXJtPVGfEHIyln_k0bow"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              View all messages
            </a>

            <a
              href="https://www.youtube.com/channel/UC_YKXJtPVGfEHIyln_k0bow"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              Share 📤
            </a>
          </div>
        </div>

        <div className="message-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9omiqEOwrC4?autoplay=1"
            title="Dr P Satish Kumar Message"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>



      <div className="message-container">
      <div className="message-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/auk7wtCeSlo?autoplay=1"
            title="Dr P Satish Kumar Message"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="message-text">
          <h1>Watch our Youth Service Live</h1>
          <p>
            Watch the latest live message from the man of God and be blessed and
            empowered in your spirit.
          </p>
          <div className="button-group">
            <a
              href="https://www.youtube.com/@nithinstephenofficial/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-now"
            >
              Our Channel ⏯
            </a>

            <a
              href="https://www.youtube.com/@nithinstephenofficial/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              View all messages
            </a>

            <a
              href="https://www.youtube.com/@nithinstephenofficial/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              Share 📤
            </a>
          </div>
        </div>

   
      </div>

      <div style={{  margin: "0 auto", padding: "40px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Church Anniversary Celebrations
      </h2>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} style={{ padding: "0 25px" }}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>

      <div className="home">
        <h2 className="timings">Church Timings</h2>

        <div className="services">
          <h3>Church Timings</h3>
          <table>
            <thead>
              <tr>
                <th>Service Type</th>
                <th>1st Service</th>
                <th>2nd Service</th>
                <th>3rd Service</th>
                <th>4th Service</th>
              </tr>
            </thead>
            <tbody>
              {serviceSchedule.map((service, index) => (
                <tr key={index}>
                  <td>{service.title}</td>
                  {service.times.map((time, i) => (
                    <td key={i}>{time}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="social-subscribe-container">
        <h2>Subscribe to our social media</h2>
        <p>Be a part of our family.</p>

        <div className="icon-group">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon youtube" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon twitter" />
          </a>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;
