import React, { Component } from "react";
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
                <div
                  key={i}
                  className="showcase-card"
                  style={{ backgroundColor: theme.highlight }}
                >
                  {h.img ? (
                    <img
                      src={h.img}
                      alt={h.title}
                      className="showcase-card-img"
                    />
                  ) : (
                    <span className="showcase-emoji">{h.emoji}</span>
                  )}
                  <h3 style={{ color: theme.text }}>{h.title}</h3>
                  <p style={{ color: theme.secondaryText }}>{h.desc}</p>
                </div>
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
                <div
                  key={i}
                  className="showcase-card"
                  style={{ backgroundColor: theme.highlight }}
                >
                  {g.img ? (
                    <img
                      src={g.img}
                      alt={g.title}
                      className="showcase-card-img"
                    />
                  ) : (
                    <span className="showcase-emoji">{g.emoji}</span>
                  )}
                  <h3 style={{ color: theme.text }}>{g.title}</h3>
                  <p style={{ color: theme.secondaryText }}>{g.desc}</p>
                </div>
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
