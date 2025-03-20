# Resume Quiz

A self-promotional, pop-culture-infused, BuzzFeed-style quiz hosted on Netlify.

## Main Goals

- Make it fun and shareable
- Highlight my skills without being overly serious
- Keep it simple to build and maintain

## Tech Stack

- **Frontend Framework**: React (with Vite for fast setup)
- **Styling**: TailwindCSS
- **Hosting**: Netlify (free tier)
- **State Management**: Local state (no backend needed)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── AnalyzingResults.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Quiz.jsx
│   │   ├── QuizQuestion.jsx
│   │   ├── ResultsPage.jsx
│   │   └── ShareButton.jsx
│   ├── assets/         # Images, icons, etc.
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── netlify.toml        # Netlify configuration
```

## Customization

To customize the quiz for your own use:

1. Update the quiz questions in `src/components/Quiz.jsx`
2. Modify result types in `src/App.jsx`
3. Customize the design in `src/index.css` and the TailwindCSS theme in `tailwind.config.js`
4. Add your personal information in `src/components/ResultsPage.jsx`

## Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

Netlify will automatically deploy your site and update it when you push changes to your repository.

## License

[MIT](LICENSE)
