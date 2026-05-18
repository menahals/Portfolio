# Cybersecurity Portfolio - Menahal Saghir Chaudhry

A professional dark-themed cybersecurity portfolio website showcasing internship-ready projects, security expertise, and technical capabilities.

## Features

- **Dark Cyber Theme**: Professional cybersecurity aesthetic with glowing accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Security-Focused Content**: Emphasis on forensics, threat analysis, and incident response
- **Project Showcase**: Detailed security projects with real-world applications
- **CV Download**: Integrated CV section with printable resume
- **Smooth Animations**: Cyber-themed visual effects and transitions
- **Internship-Ready**: Designed to impress recruiters in cybersecurity

## Structure

```
Portofolio/
├── index.html          # Main portfolio page
├── cv.html            # Detailed CV (printable to PDF)
├── styles.css         # Dark theme styling
├── script.js          # Interactive features
└── README.md          # This file
```

## Sections

1. **Navigation**: Quick access to all portfolio sections
2. **Hero Section**: Professional introduction with call-to-action
3. **About Me**: Background, education, and internship seeking statement
4. **Security Projects**: Featured forensics and network analysis projects
   - Digital Forensics Investigation
   - Network Traffic Analysis & Threat Detection
   - File System Security Architecture
   - Embedded Systems & Hardware Control
5. **Technical Capabilities**: Skills organized by category
   - Security & Forensics
   - Security Tools & Platforms
   - Programming Languages
   - Core Competencies
6. **Contact & CV**: Multiple contact methods and CV download

## Color Scheme

- **Primary**: Dark navy (`#0a1628`)
- **Secondary**: Neon green (`#00ff88`) - Security/cyber accent
- **Accent**: Cyan (`#00d4ff`) - Information highlight
- **Background**: Very dark (`#050a12`) with subtle gradients

## Customization

### Adding New Projects
Edit the **Projects Section** in `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Title</h3>
        <span class="tools">Tools Used</span>
    </div>
    <p class="date">Month Year</p>
    <p class="description">Description</p>
    <ul class="project-highlights">
        <li>Achievement 1</li>
        <li>Achievement 2</li>
    </ul>
    <a href="https://github.com/link" target="_blank" class="project-link">
        <i class="fab fa-github"></i> Repository
    </a>
</div>
```

### Updating Contact Information
Edit the **Contact Section** and update:
- Email address
- LinkedIn profile
- GitHub profile
- Phone number

### Printing CV to PDF
Open `cv.html` in your browser and use:
- **Chrome/Edge**: Ctrl+P (or Cmd+P on Mac) → Save as PDF
- **Firefox**: Ctrl+P → Save as PDF
- **Safari**: Cmd+P → Save as PDF

### Changing Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --secondary-color: #00ff88;  /* Neon green */
    --accent-color: #00d4ff;      /* Cyan */
    --primary-color: #0a1628;     /* Dark navy */
}
```

## How to Deploy

### Local Testing
1. Open `index.html` directly in your browser
2. Or use VS Code Live Server extension

### GitHub Pages
1. Create a repository named `username.github.io`
2. Upload all portfolio files
3. Access at `https://username.github.io`

### Other Hosting
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect GitHub repository
- **Traditional Hosting**: Upload via FTP

## CV Download Feature

The CV section includes:
- Link to detailed `cv.html`
- Print-to-PDF functionality
- All projects and skills listed
- Professional formatting
- Contact information

**To share your CV:**
1. Open `cv.html` in browser
2. Press Ctrl+P (or Cmd+P)
3. Save as PDF with your name
4. Share the PDF with recruiters

## Best Practices

1. **Keep Projects Updated**: Add new security projects as you complete them
2. **Highlight Impact**: Focus on what you learned and accomplished
3. **Use Real Examples**: Reference actual tools and techniques you've used
4. **Update Skills**: Remove outdated, add newly acquired skills
5. **Professional Language**: Use security/industry terminology
6. **Regular Reviews**: Check links and ensure accuracy

## Internship Tips

- Emphasize cybersecurity courses and projects
- Highlight hands-on experience with real tools
- Showcase problem-solving and analysis skills
- Detail what you learned from each project
- Include relevant certifications or coursework

## Contact Information

- **Email**: menahals01@gmail.com
- **Phone**: +971 50 92 131 08
- **LinkedIn**: https://linkedin.com/in/msc-menahal/
- **GitHub**: https://github.com/menahals

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Responsive Design

## Future Enhancements

Consider adding:
- Blog/writeups of security research
- Certifications section (CEH, Security+, etc.)
- Dark mode toggle (already dark)
- Project images/screenshots
- Testimonials from instructors
- Interactive security tools demo

## License

Personal portfolio - Use freely for professional purposes.

---

**Last Updated**: May 2026 | **Status**: Internship Ready

