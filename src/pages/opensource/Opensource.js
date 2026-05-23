import React, { Component, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Opensource.css";
import hobbyHealthy from "../../assets/images/hobby_healthy.png";
import hobbyFarming from "../../assets/images/hobby_farming.png";
import goalDegree from "../../assets/images/goal_degree.png";
import placeKashmir from "../../assets/images/place_kashmir.png";

const hobbies = [
  {
    img: hobbyHealthy,
    title: "Stay Healthy",
    desc: "Fitness and staying active is a core part of my lifestyle.",
  },
  {
    emoji: "🥊",
    title: "UFC Fan",
    desc:
      "Huge UFC fan — especially Khabib Nurmagomedov. The Eagle never lost.",
  },
  {
    img: hobbyFarming,
    title: "Farming Dreams",
    desc: "After retirement, want to go back to nature and run my own farm.",
  },
  {
    emoji: "💻",
    title: "Software Farm",
    desc: "Long-term dream: build my own software company from the ground up.",
  },
];

const goals = [
  {
    img: goalDegree,
    title: "B.Eng. from THI",
    desc:
      "Complete my Bachelor of Engineering in Autonomous Vehicle Engineering at Technische Hochschule Ingolstadt.",
  },
  {
    emoji: "🏢",
    title: "Software Company",
    desc:
      "Found my own software company — a place where great products are built.",
  },
  {
    emoji: "🌾",
    title: "Retirement Farm",
    desc:
      "Settle down with a peaceful farm life after a fulfilling tech career.",
  },
];

const places = [
  { emoji: "🇨🇭", name: "Switzerland" },
  { img: placeKashmir, name: "Kashmir" },
  { emoji: "🇳🇴", name: "Norway" },
  { emoji: "🇵🇰", name: "Pakistan" },
  { emoji: "🇧🇩", name: "Bangladesh" },
];

const languages = [
  { name: "Bengali", level: "Native", flag: "🇧🇩" },
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Urdu", level: "Fluent", flag: "🇵🇰" },
  { name: "German", level: "Intermediate", flag: "🇩🇪" },
];

function FlipCard({ h, theme }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div
          className="flip-card-front showcase-card"
          style={{ backgroundColor: theme.highlight }}
        >
          <svg
            className="flip-hint-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2L21 6L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 6H8C5.79 6 4 7.79 4 10V11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 22L3 18L7 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H16C18.21 18 20 16.21 20 14V13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {h.img ? (
            <img src={h.img} alt={h.title} className="showcase-card-img" />
          ) : (
            <span className="showcase-emoji">{h.emoji}</span>
          )}
          <h3 style={{ color: theme.text }}>{h.title}</h3>
          <p style={{ color: theme.secondaryText }}>{h.desc}</p>
        </div>
        {/* Back */}
        <div
          className="flip-card-back"
          style={{ backgroundColor: theme.highlight }}
        >
          {h.img ? (
            <img src={h.img} alt={h.title} className="flip-card-back-img" />
          ) : (
            <span className="showcase-emoji" style={{ fontSize: 80 }}>
              {h.emoji}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

class Showcase extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />

        {/* Hero */}
        <Fade bottom duration={1500} distance="40px">
          <div className="showcase-hero">
            <h1 style={{ color: theme.text }}>Beyond the Machine</h1>
            <p style={{ color: theme.secondaryText }}>
              A glimpse into who I am beyond engineering — my passions, dreams,
              and the places I want to explore.
            </p>
            <span className="showcase-flag">🇧🇩 Proudly from Bangladesh</span>
          </div>
        </Fade>

        {/* Hobbies */}
        <Fade bottom duration={1500} distance="40px">
          <div className="showcase-section">
            <h2 style={{ color: theme.text }}>Hobbies & Interests</h2>
            <div className="showcase-cards">
              {hobbies.map((h, i) => (
                <FlipCard key={i} h={h} theme={theme} />
              ))}
            </div>
          </div>
        </Fade>

        {/* Goals */}
        <Fade bottom duration={1500} distance="40px">
          <div className="showcase-section">
            <h2 style={{ color: theme.text }}>Dreams & Goals</h2>
            <div className="showcase-cards">
              {goals.map((g, i) => (
                <FlipCard key={i} h={g} theme={theme} />
              ))}
            </div>
          </div>
        </Fade>

        {/* Places to Visit */}
        <Fade bottom duration={1500} distance="40px">
          <div className="showcase-section">
            <h2 style={{ color: theme.text }}>Places I Want to Visit</h2>
            <div className="showcase-places">
              {places.map((p, i) => (
                <div
                  key={i}
                  className="showcase-place"
                  style={{ backgroundColor: theme.highlight }}
                >
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      className="showcase-place-img"
                    />
                  ) : (
                    <span className="showcase-place-flag">{p.emoji}</span>
                  )}
                  <span style={{ color: theme.text }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Languages */}
        <Fade bottom duration={1500} distance="40px">
          <div className="showcase-section">
            <h2 style={{ color: theme.text }}>Languages I Speak</h2>
            <div className="showcase-languages">
              {languages.map((l, i) => (
                <div
                  key={i}
                  className="showcase-lang"
                  style={{ backgroundColor: theme.highlight }}
                >
                  <span className="showcase-lang-flag">{l.flag}</span>
                  <div>
                    <h3 style={{ color: theme.text }}>{l.name}</h3>
                    <p style={{ color: theme.secondaryText }}>{l.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Showcase;
