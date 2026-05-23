# Md Touhidul Islam — Personal Portfolio

A modern, responsive personal portfolio website built with React. This site showcases my academic background, technical skills, work experience, certifications, and contact information.

**Live site:** [tameemraihan.github.io/portfolio-touhid](https://tameemraihan.github.io/portfolio-touhid)

---

## About

This portfolio was built to present my professional profile as a Mechanical Engineering graduate currently pursuing a B.Eng. in Autonomous Vehicle Engineering at Technische Hochschule Ingolstadt (THI), Germany. It highlights my skills, education, community leadership experience, and certifications.

---

## Sections

| Section             | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| **Hero / Greeting** | Introduction with name, tagline, and quick links                                                      |
| **Skills**          | Engineering & technical skills (Python, MATLAB, C/C++, SQL) and productivity tools (Microsoft Office) |
| **Education**       | Academic history across THI Ingolstadt, VSB Ostrava, and Cambrian College                             |
| **Experience**      | Work and volunteership roles including Nari Maitree and ActionAid Bangladesh                          |
| **Certifications**  | Airbus Beyond Supply Chain Specialist                                                                 |
| **Projects**        | Engineering and programming projects                                                                  |
| **Contact**         | Email, LinkedIn, and location                                                                         |
| **Resume**          | In-browser PDF resume viewer                                                                          |

---

## Tech Stack

- **React 16** — UI framework
- **React Router DOM** — Client-side routing
- **Styled Components** — CSS-in-JS styling
- **React Bootstrap + Base Web** — UI components
- **React Reveal** — Scroll animations
- **React Helmet** — SEO meta tags
- **Chart.js + React Chartjs 2** — Data visualizations
- **React PDF** — In-browser resume viewer
- **Apollo Boost** — GraphQL client (for GitHub data fetching)
- **gh-pages** — GitHub Pages deployment

---

## Prerequisites

- **Node.js** v16 or higher (v20.11.1 recommended)
- **npm** v8 or higher (v10.2.4 recommended)

Check your versions:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tameemraihan/portfolio-touhid.git
cd portfolio-touhid
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables (optional)

The `git_data_fetcher.mjs` script can fetch your GitHub contribution data (pull requests, issues, organizations). To use it, create a `.env` file:

```bash
cp env.example .env
```

Then fill in your values:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
```

> The `.env` file is listed in `.gitignore` and will never be committed. Keep your token private.

### 4. Start the development server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). The page reloads automatically on file changes.

---

## Available Scripts

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `npm start`      | Start the development server on port 3000            |
| `npm run build`  | Create a production build in the `/build` folder     |
| `npm test`       | Run the test suite                                   |
| `npm run deploy` | Build and deploy to GitHub Pages (`gh-pages` branch) |
| `npm run eject`  | Eject from Create React App (irreversible)           |

---

## Docker (optional)

A `Dockerfile` and `docker-compose.yaml` are included for containerized development.

```bash
docker-compose up
```

The app will be available at [http://localhost:3001](http://localhost:3001).

---

## Customization

All portfolio content lives in a single file:

```
src/portfolio.js
```

Edit the exported objects to update:

- `greeting` — Name, tagline, resume link
- `socialMediaLinks` — LinkedIn, email, GitHub, etc.
- `skills` — Skill categories and icons
- `degrees` — Education history
- `certifications` — Certifications
- `experience` — Work and volunteership sections
- `contactPageData` — Address, contact description

### Changing the color theme

Open `src/App.js` and change the imported theme. Fourteen themes are available in `src/theme.js`:

```
blueTheme, brownTheme, purpleTheme, greenTheme, redTheme,
blackTheme, pinkTheme, violetTheme, tealTheme, orangeTheme,
yellowTheme, materialDarkTheme, materialLightTheme, materialTealTheme
```

---

## Deployment to GitHub Pages

1. Set `homepage` in `package.json` to your GitHub Pages URL:

```json
"homepage": "https://tameemraihan.github.io/portfolio-touhid"
```

2. Deploy:

```bash
npm run deploy
```

This builds the project and pushes the output to the `gh-pages` branch automatically.

---

## Project Structure

```
portfolio/
├── public/                  # Static assets (images, icons, resume PDF)
├── src/
│   ├── portfolio.js         # All portfolio data — edit this file
│   ├── theme.js             # Color themes
│   ├── App.js               # Root component and routing
│   ├── containers/          # Page sections (skills, experience, education, etc.)
│   ├── components/          # Reusable UI components
│   ├── pages/               # Full page layouts
│   ├── shared/              # Shared JSON data (experience, contact)
│   └── assets/              # Fonts and icons
├── .env.example             # Environment variable template
├── git_data_fetcher.mjs     # Script to fetch GitHub contribution data
├── Dockerfile               # Docker image config
├── docker-compose.yaml      # Docker Compose config
└── package.json
```

---

## Security Notes

- Never commit your `.env` file — it is excluded by `.gitignore`
- The `GITHUB_TOKEN` in `.env` is only needed for the optional GitHub data fetcher script
- The resume PDF and contact details in `portfolio.js` are intentionally public

---

## License

This project is open source under the [MIT License](LICENSE).

---

## Contact

**Md Touhidul Islam**

- Email: md.tayeftameem18@gmail.com
- LinkedIn: [linkedin.com/in/mdtayefislam](https://www.linkedin.com/in/mdtayefislam/)
- Location: Nürnberg, Germany
