# Harshit Verma - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

## Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Animated background with rotating images
- Interactive project filtering
- Skills visualization with progress bars
- Tabbed sections for education and work experience
- Contact form
- Social media integration

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- Google Fonts

## Preview

Visit the live website: [Harshit Verma Portfolio](https://truehars.github.io/portfolio/)

## Contact

Feel free to reach out to me:
- Email: varma789ajay@gmail.com
- LinkedIn: [Harshit Verma](https://www.linkedin.com/in/harshit-verma-4684ba260)
- GitHub: [Truehars](https://github.com/Truehars)
- Twitter: [@varma789ajay](https://x.com/varma789ajay)
- Instagram: [@harshit_verm__a](https://www.instagram.com/harshit_verm__a?igsh=aXBmMnFnYTZ4MG94)

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