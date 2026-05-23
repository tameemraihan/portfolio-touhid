import React, { Component } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import touhidPhoto from "../../assets/images/touhid_home.jpg";

const lines = [
  { text: "class Touhid {", color: "#61dafb" },
  { text: '  name = "Md Touhidul Islam";', color: "#98c379" },
  { text: '  degree = "B.Eng. Autonomous Vehicle Eng.";', color: "#98c379" },
  { text: '  university = "THI Ingolstadt";', color: "#98c379" },
  { text: '  skills = ["Python", "MATLAB", "C++"];', color: "#e5c07b" },
  { text: "  passion() {", color: "#61dafb" },
  { text: '    return "Engineering a better world";', color: "#98c379" },
  { text: "  }", color: "#61dafb" },
  { text: "}", color: "#61dafb" },
];

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { lineIndex: 0, charIndex: 0, displayedLines: [] };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((s) => {
        const { lineIndex, charIndex, displayedLines } = s;
        if (lineIndex >= lines.length) {
          clearInterval(this.interval);
          return null;
        }
        const currentLine = lines[lineIndex];
        const nextChar = charIndex + 1;
        if (nextChar <= currentLine.text.length) {
          const updated = [...displayedLines];
          updated[lineIndex] = {
            color: currentLine.color,
            text: currentLine.text.slice(0, nextChar),
          };
          return { displayedLines: updated, charIndex: nextChar };
        } else {
          return { lineIndex: lineIndex + 1, charIndex: 0 };
        }
      });
    }, 30);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { displayedLines, lineIndex, charIndex } = this.state;
    return (
      <div className="terminal-window" style={{ background: "#11111b" }}>
        <div className="terminal-header" style={{ background: "#1e1e2e" }}>
          <span className="terminal-btn red" />
          <span className="terminal-btn yellow" />
          <span className="terminal-btn green" />
          <span className="terminal-title">touhid.py</span>
        </div>
        <div className="terminal-body">
          {displayedLines.map((line, i) => (
            <div key={i} className="terminal-line">
              <span className="terminal-linenum">{i + 1}</span>
              <span style={{ color: line.color }}>{line.text}</span>
              {i === lineIndex && charIndex > 0 && (
                <span className="terminal-cursor">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Connect on LinkedIn"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="greeting-right-panel">
              <img
                src={touhidPhoto}
                alt="Md Touhidul Islam"
                className="greeting-photo"
              />
              <div className="monitor-wrapper">
                <div className="monitor-screen">
                  <Terminal />
                </div>
                <div className="monitor-neck" />
                <div className="monitor-stand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
