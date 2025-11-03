## سلام

A minimal, fast, RTL-friendly static website written in plain HTML/CSS/JS.

### Local usage

No build is required. Open `index.html` in a browser or serve the folder with any static server.

Example using Python:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

### Deploy

This project is configured for zero-config static deployment on Vercel.

```bash
vercel deploy --prod --yes --name agentic-80fbe80c
```

Production URL:

`https://agentic-80fbe80c.vercel.app`

### Files

- `index.html`: Persian landing page (RTL)
- `styles.css`: Responsive styles with light/dark themes
- `script.js`: Theme and language toggle (FA/EN)
- `vercel.json`: Static deployment and security headers