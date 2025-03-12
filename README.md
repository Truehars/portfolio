# Harshit Verma - Portfolio Website

A modern, responsive portfolio website for Harshit Verma, showcasing his skills, projects, experience, and services.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Elements**:
  - Animated skill bars
  - Project filtering
  - Smooth scrolling navigation
  - Interactive timeline for experience
  - Testimonial slider
  - Typing animation effect
  - Hover effects on project cards
- **Contact Form**: Functional contact form for potential clients to reach out

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla JS, no frameworks)
- Font Awesome Icons
- Google Fonts

## Project Structure

```
portfolio/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── projects/
│   │   └── (project images)
│   ├── testimonials/
│   │   └── (testimonial images)
│   ├── profile.jpg
│   └── about.jpg
├── index.html
└── README.md
```

## Setup and Usage

1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. To make changes:
   - Edit HTML content in `index.html`
   - Modify styles in `css/style.css`
   - Update functionality in `js/main.js`

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `style.css`:

```css
:root {
    --primary-color: #2d31fa;
    --secondary-color: #5d8bf4;
    --accent-color: #051367;
    /* other variables */
}
```

### Adding Projects

To add a new project, copy and paste the following HTML structure inside the `.projects-grid` div and customize it:

```html
<div class="project-item" data-category="category-name">
    <div class="project-img">
        <img src="images/projects/your-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fas fa-link"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)

---

Created by Harshit Verma 