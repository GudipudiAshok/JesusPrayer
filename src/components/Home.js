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

import Wm1 from '../assest/website images/WOMENS RETREAT/wr (1).jpg'
import Wm2 from '../assest/website images/WOMENS RETREAT/wr (2).jpg'
import Wm3 from '../assest/website images/WOMENS RETREAT/wr (3).jpg'
import Wm4 from '../assest/website images/WOMENS RETREAT/wr (4).jpg'
import Wm5 from '../assest/website images/WOMENS RETREAT/wr (5).jpg'
import Wm6 from '../assest/website images/WOMENS RETREAT/wr (6).jpg'
import Wm7 from '../assest/website images/WOMENS RETREAT/wr (7).jpg'
import Wm8 from '../assest/website images/WOMENS RETREAT/wr (8).jpg'

import vbs1 from '../assest/website images/VBS/vbs1 (1).jpg'
import vbs2 from '../assest/website images/VBS/vbs1 (2).jpg'
import vbs3 from '../assest/website images/VBS/vbs1 (3).jpg'
import vbs4 from '../assest/website images/VBS/vbs1 (4).jpg'
import vbs5 from '../assest/website images/VBS/vbs1 (5).jpg'
import vbs6 from '../assest/website images/VBS/vbs1 (6).jpg'
import vbs7 from '../assest/website images/VBS/vbs1 (7).jpg'
import vbs8 from '../assest/website images/VBS/vbs1 (8).jpg'

import cc1 from '../assest/website images/CHRISTMAS CEL/cell (1).jpg'
import cc2 from '../assest/website images/CHRISTMAS CEL/cell (2).jpg'
import cc3 from '../assest/website images/CHRISTMAS CEL/cell (3).jpg'
import cc4 from '../assest/website images/CHRISTMAS CEL/cell (4).jpg'
import cc5 from '../assest/website images/CHRISTMAS CEL/cell (5).jpg'
import cc6 from '../assest/website images/CHRISTMAS CEL/cell (6).jpg'
import cc7 from '../assest/website images/CHRISTMAS CEL/cell (7).jpg'
import cc8 from '../assest/website images/CHRISTMAS CEL/cell (8).jpg'

import nyc1 from '../assest/website images/NEW YEAR/new (1).jpg'
import nyc2 from '../assest/website images/NEW YEAR/new (2).jpg'
import nyc3 from '../assest/website images/NEW YEAR/new (3).jpg'
import nyc4 from '../assest/website images/NEW YEAR/new (4).jpg'
import nyc5 from '../assest/website images/NEW YEAR/new (5).jpg'
import nyc6 from '../assest/website images/NEW YEAR/new (6).jpg'
import nyc7 from '../assest/website images/NEW YEAR/new (7).jpg'
import nyc8 from '../assest/website images/NEW YEAR/new (8).jpg'

import pc1 from '../assest/website images/PLAM SUNDAY/pam (1).jpg'
import pc2 from '../assest/website images/PLAM SUNDAY/pam (2).jpg'
import pc3 from '../assest/website images/PLAM SUNDAY/pam (3).jpg'
import pc4 from '../assest/website images/PLAM SUNDAY/pam (4).jpg'
import pc5 from '../assest/website images/PLAM SUNDAY/pam (5).jpg'
import pc6 from '../assest/website images/PLAM SUNDAY/pam (6).jpg'
import pc7 from '../assest/website images/PLAM SUNDAY/pam (7).jpg'
import pc8 from '../assest/website images/PLAM SUNDAY/pam (8).jpg'

import hf1 from '../assest/website images/HARVEST/har (1).jpg'
import hf2 from '../assest/website images/HARVEST/har (2).jpg'
import hf3 from '../assest/website images/HARVEST/har (3).jpg'
import hf4 from '../assest/website images/HARVEST/har (4).jpg'
import hf5 from '../assest/website images/HARVEST/har (5).jpg'
import hf6 from '../assest/website images/HARVEST/har (6).jpg'
import hf7 from '../assest/website images/HARVEST/har (7).jpg'

import gf1 from '../assest/website images/GOOD FRIDAY/good (1).jpg'
import gf2 from '../assest/website images/GOOD FRIDAY/good (2).jpg'
import gf3 from '../assest/website images/GOOD FRIDAY/good (3).jpg'
import gf4 from '../assest/website images/GOOD FRIDAY/good (4).jpg'
import gf5 from '../assest/website images/GOOD FRIDAY/good (5).jpg'
import gf6 from '../assest/website images/GOOD FRIDAY/good (6).jpg'
import gf7 from '../assest/website images/GOOD FRIDAY/good (7).jpg'
import gf8 from '../assest/website images/GOOD FRIDAY/good (8).jpg'

import rd1 from '../assest/website images/RESURRECTION DAY/rec (1).jpg'
import rd2 from '../assest/website images/RESURRECTION DAY/rec (2).jpg'
import rd3 from '../assest/website images/RESURRECTION DAY/rec (3).jpg'
import rd4 from '../assest/website images/RESURRECTION DAY/rec (4).jpg'
import rd5 from '../assest/website images/RESURRECTION DAY/rec (5).jpg'
import rd6 from '../assest/website images/RESURRECTION DAY/rec (6).jpg'
import rd7 from '../assest/website images/RESURRECTION DAY/rec (7).jpg'
import rd8 from '../assest/website images/RESURRECTION DAY/rec (8).jpg'

import ss1 from '../assest/website images/SUNDAY SERVICE/sunday (1).jpg'
import ss2 from '../assest/website images/SUNDAY SERVICE/sunday (2).jpg'
import ss3 from '../assest/website images/SUNDAY SERVICE/sunday (3).JPG'
import ss4 from '../assest/website images/SUNDAY SERVICE/sunday (4).JPG'

import ht1 from '../assest/website images/Holy Thursday/holy (1).jpg'
import ht2 from '../assest/website images/Holy Thursday/holy (2).jpg'
import ht3 from '../assest/website images/Holy Thursday/holy (3).jpg'
import ht4 from '../assest/website images/Holy Thursday/holy (4).jpg'
import ht5 from '../assest/website images/Holy Thursday/holy (5).jpg'
import ht6 from '../assest/website images/Holy Thursday/holy (6).jpg'
import ht7 from '../assest/website images/Holy Thursday/holy (7).jpg'
import ht8 from '../assest/website images/Holy Thursday/holy (8).jpg'

import ys1 from '../assest/website images/YOUTH SERVICE/youth (1).jpg'
import ys2 from '../assest/website images/YOUTH SERVICE/youth (2).jpg'
import ys3 from '../assest/website images/YOUTH SERVICE/youth (3).jpg'
import ys4 from '../assest/website images/YOUTH SERVICE/youth (4).jpg'
import ys5 from '../assest/website images/YOUTH SERVICE/youth (5).jpg'
import ys6 from '../assest/website images/YOUTH SERVICE/youth (6).jpg'
import ys7 from '../assest/website images/YOUTH SERVICE/youth (7).jpg'
import ys8 from '../assest/website images/YOUTH SERVICE/youth (8).jpg'

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
    "Womens Retreat": [Wm1, Wm2, Wm3, Wm4, Wm5,Wm6,Wm7,Wm8],
    VBS: [vbs4,vbs2,vbs3,vbs1,vbs5,vbs6,vbs7,vbs8
    ],
    "Christmas Celebrations": [
      cc7,cc2,cc3,cc4,cc5,cc6,cc1,cc8
    ],
    "New Year Celebrations": [
      nyc1, nyc2, nyc3, nyc4, nyc5, nyc6, nyc7, nyc8,
    ],
    "Palm Sunday": [
      pc1,  pc2,  pc3,  pc4,  pc5,  pc6,  pc7,  pc8,
    ],
    "Harvest Festival": [
      hf1,  hf2,  hf3,  hf4,  hf5,  hf6,  hf7,
    ],
    "Good Friday": [
     gf2,gf3,gf1,gf4,gf5,gf6,gf7,gf8,
    ],
    "Resurrection Day": [
      rd8,rd7,rd6,rd5,rd4,rd3,rd2,rd1
    ],
    "Sunday Service": [
      ss1,ss2,ss3,ss4
    ],
    "Holy Thursday": [
      ht3,ht2,ht1,ht4,ht5,ht6,ht7,ht8
    ],
    "Youth Service": [
      ys5,ys6,ys7,ys8,ys1,ys2,ys3,ys4
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
  <h1 className="title-small">Man of God</h1>
  <h1 className="title-large"><strong>Pastor P Keerthy Kumar</strong></h1>
  <p className="subtitle">Co-Founder Jesus Prayer Ministries, Hyd</p>
  <ul>
    <li className="description">Preaching & Showing "the Love of God" in Deeds</li>
  </ul>
</div>

      </div>
      <div className="highlight-card">
        <div className="card-text-top-left">
        <h1 className="title-small">Evangelist</h1>
    
        <h1 className="title-large"><strong>Evg P Karuna Joy</strong></h1>
        <p className="subtitle">Founder Jesus Prayer Ministrie, Hyd</p>
          
     
    <p className="description">I am Blessed to be Blessed</p>


      
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
        
     
          <h1 className="title-small">Servent of God</h1>
    
    <h1 className="title-large"><strong>Bro P Nithin Stephen</strong></h1>


    <p className="subtitle">Management Jesus Prayer Ministrie, Hyd </p>
      
 

<p className="subtitle">Faith,Mission,Encouragement</p>
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
