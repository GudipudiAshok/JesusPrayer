// src/components/Home.js
import React, { useState } from "react";
import "./Home.css";
import music from "../assest/ayyagarujpeg.jpg";
import church from "../assest/chuechimAGE.jpg";
import evg from "../assest/ammagarujpeg.jpg";
import me from "../assest/nithin2jpeg.jpg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderOne from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (1).jpeg";
import Slider2 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (3).jpeg";
import Slider3 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (4).jpeg";
import Slider4 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (16).jpeg";
import Slider5 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (5).jpeg";
import Slider6 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (6).jpeg";
import Slider7 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (7).jpeg";
import Slider8 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (8).jpeg";
import Slider9 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (9).jpeg";
import Slider10 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (10).jpeg";
import Slider11 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (11).jpeg";
import Slider12 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (12).jpeg";
import Slider13 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (13).jpeg";
import Slider14 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (14).jpeg";
import Slider15 from "../assest/WhatsApp Image 2025-06-09 at 4.04.05 PM (15).jpeg";
import Timer from '../assest/output_icon.png'

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const mapsUrl = 'https://maps.app.goo.gl/cXM9X4ZByqGXMgdy9';
  // ✅ Opens the map link in a new tab
  const handleMapDirections = () => {
    window.open(mapsUrl, '_blank');
  };

  // ✅ Copies current webpage link to clipboard
  const handleShare = () => {
    const currentPageUrl = window.location.href;

    navigator.clipboard.writeText(currentPageUrl)
      .then(() => alert('Page link copied to clipboard!'))
      .catch((err) => alert('Failed to copy page link.'));
  };

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
  const galleryData = {
    "Womens Retreat": [SliderOne, Slider2, Slider3, Slider4, Slider5],
    VBS: [
      "https://via.placeholder.com/300x200?text=South+Africa+1",
      "https://via.placeholder.com/300x200?text=South+Africa+2",
    ],
    "Christmas Celebrations": [
      "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+1",
      "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+2",
      "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+3",
      "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+4",
    ],
    "New Year Celebrations": [
      "https://via.placeholder.com/300x200?text=Conicom+1",
      "https://via.placeholder.com/300x200?text=Conicom+2",
    ],
    "Palm Sunday": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Harvest Festival": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Good Friday": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Resurrection Day": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Sunday Service": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Holy Communion": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
    "Youth Service": [
      "https://via.placeholder.com/300x200?text=Dallas+1",
      "https://via.placeholder.com/300x200?text=Dallas+2",
    ],
  };
  const tabList = Object.keys(galleryData);
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
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
    { title: "Services", times: ["1st Service", "2nd Service", "3rd Service", ] },
    { title: "Sunday Service", times: ["10 AM", "-", "-", ] },
    { title:"Wednesday Youth Service" , times : ["7 PM","-","-",]},
    { title: "Friday Fasting Prayer", times: ["11 AM", "-", "-", ] },
    { title: "Saturday Intercessory Prayer", times: ["7 PM", "-", "-", ] },
  ];

  return (
    <div className="home-container">
      <h1 className="Cname"> Welcome to Jesus Prayer Ministries</h1>
      <div className="image-wrapper">
        <img src={church} alt="Music Stage" className="music-image" />
      </div>

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

      <div style={{ margin: "0 auto", padding: "40px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "48px",
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

      <div style={styles.wrapper}>
        <h2 style={styles.heading}>JPM Gallery</h2>

        {/* Tabs */}
        <div style={styles.tabBar}>
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              style={{
                ...styles.tab,
                borderBottom:
                  selectedTab === tab
                    ? "3px solid red"
                    : "3px solid transparent",
                fontWeight: selectedTab === tab ? "bold" : "normal",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div style={styles.gallery}>
          {galleryData[selectedTab].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${selectedTab} ${idx}`}
              style={styles.image}
            />
          ))}
        </div>
      </div>

      <div style={styles.wrapper}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', justifyContent:'center' , height:80}}>
  <img src={Timer} alt="Music Stage" height={50} width={50} />
  <h2 className="timings">Church Timings</h2>
</div>

<h1 className="Kokapet">Kokapet, Hyderabad</h1>

<div className="services">
  <table>

    <tbody>
      {serviceSchedule.map((service, index) => (
        <tr key={index}>
          <td className="title-cell">{service.title}</td>
          {service.times.map((time, i) => (
            <td className="servicetime"key={i}>{time}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>


      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent:'center', marginBottom:'20px' }}>
      <button className="custom-button" onClick={handleMapDirections}>Get Directions</button>
      <button className="custom-button" onClick={handleShare}>Share</button>
    </div>

      <div className="social-subscribe-container">
        <h2 style={{color:'white'}}>Subscribe to our social media</h2>
        <p style={{color:'white'}}>Be a part of our family.</p>

        <div className="icon-group">
          <a
        href="https://www.youtube.com/channel/UC_YKXJtPVGfEHIyln_k0bow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon youtube" />
          </a>
          <a
            href="https://www.facebook.com/YesuPradhanaMandhiramKokapet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon facebook" />
          </a>
          <a
            href="https://www.instagram.com/jesusprayerministries_hyd/"
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

const galleryData = {
  "South Korea": [
    "https://via.placeholder.com/300x200?text=South+Korea+1",
    "https://via.placeholder.com/300x200?text=South+Korea+2",
    "https://via.placeholder.com/300x200?text=South+Korea+3",
  ],
  "South Africa": [
    "https://via.placeholder.com/300x200?text=South+Africa+1",
    "https://via.placeholder.com/300x200?text=South+Africa+2",
  ],
  "Asian Leader Summit": [
    "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+1",
    "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+2",
    "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+3",
    "https://via.placeholder.com/300x200?text=Asian+Leader+Summit+4",
  ],
  "Conicom Conference": [
    "https://via.placeholder.com/300x200?text=Conicom+1",
    "https://via.placeholder.com/300x200?text=Conicom+2",
  ],
  Dallas: [
    "https://via.placeholder.com/300x200?text=Dallas+1",
    "https://via.placeholder.com/300x200?text=Dallas+2",
  ],
};

const tabList = Object.keys(galleryData);

function GalleryTabs() {
  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Man of God International Presence</h2>

      {/* Tabs */}
      <div style={styles.tabBar}>
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              ...styles.tab,
              borderBottom:
                selectedTab === tab ? "3px solid red" : "3px solid transparent",
              fontWeight: selectedTab === tab ? "bold" : "normal",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div style={styles.gallery}>
        {galleryData[selectedTab].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${selectedTab} ${idx}`}
            style={styles.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize:'48px',
    marginBottom: "20px",
  },
  tabBar: {
    display: "flex",
    overflowX: "auto",
    borderBottom: "1px solid #ccc",
    marginBottom: "20px",
  },
  tab: {
    flexShrink: 0,
    padding: "10px 20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
};
