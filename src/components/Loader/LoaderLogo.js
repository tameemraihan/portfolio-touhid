import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    const cx = 220,
      cy = 130,
      r = 110,
      r2 = 102;
    const hex = (radius) =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 180) * (60 * i - 30);
        return `${cx + radius * Math.cos(angle)},${
          cy + radius * Math.sin(angle)
        }`;
      }).join(" ");

    return (
      <svg
        className="raw_logo"
        width="55%"
        height="55%"
        viewBox="0 0 440 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
        .hex-outer {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: hexdraw 1.8s ease forwards 0.2s;
        }
        .hex-inner {
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: hexdraw 1.8s ease forwards 0.4s;
        }
        @keyframes hexdraw {
          from { stroke-dashoffset: 1400; }
          to   { stroke-dashoffset: 0; }
        }
        .mtr-letter {
          opacity: 0;
          animation: fadein 0.6s ease forwards;
        }
        .mtr-m { animation-delay: 1.4s; }
        .mtr-t { animation-delay: 1.9s; }
        .mtr-r { animation-delay: 2.4s; }
        .sig-name {
          opacity: 0;
          animation: fadein 1.2s ease forwards 3.1s;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `,
            }}
          />
        </defs>

        {/* Outer hexagon border */}
        <polygon
          className="hex-outer"
          points={hex(r)}
          stroke={theme.body}
          strokeWidth="3"
          fill="none"
        />
        {/* Inner hexagon border */}
        <polygon
          className="hex-inner"
          points={hex(r2)}
          stroke={theme.body}
          strokeWidth="2"
          fill="none"
        />

        {/* MTI Monogram */}
        <text
          className="mtr-letter mtr-m"
          x="163"
          y="145"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="64"
          fontWeight="700"
        >
          M
        </text>
        <text
          className="mtr-letter mtr-t"
          x="220"
          y="145"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="64"
          fontWeight="700"
        >
          T
        </text>
        <text
          className="mtr-letter mtr-r"
          x="277"
          y="145"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="64"
          fontWeight="700"
        >
          I
        </text>

        {/* Name below hexagon */}
        <text
          className="sig-name"
          x="220"
          y="272"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="'Dancing Script', 'Brush Script MT', cursive"
          fontSize="32"
          letterSpacing="2"
        >
          Md Touhidul Islam
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
