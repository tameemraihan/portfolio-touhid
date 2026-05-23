import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

const floatingIcons = [
  { icon: "logos:java", top: "5%", left: "2%" },
  { icon: "logos:python", top: "18%", right: "3%" },
  { icon: "logos:react", top: "42%", left: "1%" },
  { icon: "simple-icons:cplusplus", top: "62%", right: "2%", color: "#00599C" },
  { icon: "logos:javascript", bottom: "28%", left: "4%" },
  { icon: "logos:nodejs", bottom: "12%", right: "5%" },
  { icon: "logos:figma", top: "78%", left: "2%" },
  { icon: "simple-icons:mysql", top: "32%", right: "3%", color: "#4479A1" },
  { icon: "logos:git-icon", bottom: "45%", left: "3%" },
  { icon: "logos:github-icon", top: "52%", right: "4%" },
];

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div style={{ position: "relative" }}>
          {/* Floating background icons */}
          <div className="floating-bg-global">
            {floatingIcons.map((item, i) => (
              <span
                key={i}
                className="floating-bg-icon-global"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              >
                <span
                  className="iconify"
                  data-icon={item.icon}
                  style={{
                    fontSize: "36px",
                    color: item.color || undefined,
                    opacity: 0.12,
                  }}
                />
              </span>
            ))}
          </div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
