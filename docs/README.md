# Dr. Arun Kumar - Academic Portfolio Website

This is a GitHub Pages website for Dr. Arun Kumar's academic portfolio and research profile.

## Features

- **Modern, Responsive Design**: Works on desktop, tablet, and mobile devices
- **Academic-Focused Aesthetic**: Clean, professional design with academic color palette
- **Interactive Elements**: Hover effects on skills, expandable project cards
- **Print-Friendly**: Optimized CSS for printing as a CV/resume
- **Accessibility**: Keyboard navigation, focus states, semantic HTML

## File Structure

```
docs/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # Interactive functionality
├── README.md          # This file
└── favicon.ico        # Website icon
```

## Deployment on GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Set "Source" to "Deploy from a branch"
4. Select "main" branch and `/docs` folder
5. Click "Save"

The website will be available at: `https://[your-username].github.io/[repository-name]`

## Customization

### Colors
The color palette is defined in CSS variables:
- Primary: `#0A2463` (Navy Blue)
- Secondary: `#00A5CF` (Azure)
- Accent: `#FF6B6B` (Coral Red)

### Typography
- Display: Playfair Display (serif)
- Body: Inter (sans-serif)
- Monospace: JetBrains Mono

### Content Updates
Edit `index.html` to update:
- Personal information
- Research interests
- Work experience
- Projects
- Skills

## Development

To run locally, open `index.html` in a web browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve docs
```

## Print Functionality

The website includes a print stylesheet for generating a clean CV/Resume. Click the "Print CV" link in the footer or use Ctrl+P.

## License

This website is for personal/portfolio use.