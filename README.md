# AI & Robotics Portfolio — Xinle Zhang

A concise, responsive portfolio with an English single-page homepage: About, Projects, Algorithm Visualizations, Experience and Contact.

## Content

- EIT Digital double-degree studies at KTH and Aalto University
- Master's thesis on multi-agent crowd state estimation from partial observations
- Knowledge distillation, document Q&A, reinforcement learning, robot manipulation and a creator intelligence hackathon project
- Six algorithm demo cards on the homepage, with demos loaded on demand in an embedded player

The old About, Projects, Skills, Resume, Contact, Philosophy and AI Insights URLs redirect to the relevant homepage section. Individual game URLs remain available.

## Local development

```bash
git clone https://github.com/jackeygle/AI-Robotics-Portfolio.git
cd AI-Robotics-Portfolio
python -m http.server 8000 -d public
```

Open http://localhost:8000. No build step or frontend dependencies are required for the homepage.

## Structure

- `public/index.html`: homepage and portfolio content
- `public/portfolio.css`: shared responsive styles
- `public/games.html`: algorithm demo directory
- `public/*-game.html`: individual interactive demos
- `projects/algorithm-visualizer/`: Python algorithm implementations

## Hosting

For Render Static Sites, set the publish directory to `public`. The repository also includes a Node static server and existing deployment configuration. Updating GitHub does not confirm a separate Firebase deployment.

## Contact

- Email: jackeygle@gmail.com
- GitHub: https://github.com/jackeygle
- LinkedIn: https://www.linkedin.com/in/xinle-zhang-398237327

## License

See the repository's licensing files for applicable terms.
