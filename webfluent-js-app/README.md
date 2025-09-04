# Webfluent Project

This project is a web application named Webfluent, which provides web-based information services. The application is designed to be responsive and user-friendly, featuring various sections such as business introductions, works, news, and a column for research.

## Project Structure

The project consists of the following files and directories:

```
webfluent-js-app
├── css
│   ├── reset.css        # CSS reset styles for consistent styling across browsers
│   ├── common.css       # Common styles used throughout the project
│   └── style.css        # Specific styles for the project
├── img
│   ├── logo.svg         # Logo image used in the header
│   ├── m-logo.svg       # Mobile logo image used in the mobile menu
│   ├── blackpink-one.jpg # Image for hero section (small screens)
│   ├── blackpink-two.jpg # Image for hero section (medium screens)
│   ├── blackpink.jpg     # Main image for hero section
│   ├── work-pic1.png     # Image representing a project in the works section
│   ├── work-pic2.png     # Image representing another project in the works section
│   ├── work-pic3.png     # Image representing another project in the works section
│   ├── work-pic4.png     # Image representing another project in the works section
│   ├── news-pic.png      # Image used in the news section
│   └── foot-logo.svg     # Footer logo image
├── js
│   └── common.js         # JavaScript for handling mobile menu interactions
├── index.html            # Main HTML document for the project
└── README.md             # Documentation for the project
```

## Features

- **Responsive Design**: The application is designed to work on various screen sizes, providing a seamless experience on both desktop and mobile devices.
- **Mobile Menu**: The mobile menu can be toggled using buttons, enhancing user navigation on smaller screens.
- **Dynamic Content**: The application includes sections for business introductions, works, news, and research columns, showcasing the company's expertise and projects.

## Usage

To run the project, open `index.html` in a web browser. Ensure that all assets (CSS, JS, images) are correctly linked and available in their respective directories.

## JavaScript Functionality

The `common.js` file contains the following JavaScript code to manage the mobile menu:

```javascript
document.querySelector('.btn-menu').addEventListener('click', function() {
    document.querySelector('.m-menu').classList.add('active');
});

document.querySelector('.btn-close').addEventListener('click', function() {
    document.querySelector('.m-menu').classList.remove('active');
});
```

This code adds an `active` class to the mobile menu when the menu button is clicked and removes it when the close button is clicked.

## License

This project is licensed under the MIT License.