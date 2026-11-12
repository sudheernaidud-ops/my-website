# Portfolio Website

A modern, responsive portfolio website with dark mode theme showcasing projects, skills, and contact information.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Theme**: Automatic theme switching with persistence
- **Smooth Navigation**: Smooth scrolling and active link highlighting
- **Filterable Projects**: Filter projects by category (Web, Mobile, Design)
- **Contact Form**: Client-side form validation
- **Smooth Animations**: Scroll-based animations and transitions
- **Mobile Menu**: Hamburger menu for mobile devices

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling with responsive design and dark mode
- `app.js` - JavaScript for interactivity and functionality

## Dependencies

- Font Awesome (icons)
- Google Fonts (Inter, Space Mono)
- Unsplash (placeholder images)

## Usage

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python's built-in server
   python3 -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

### Live Preview

Visit the website at your preferred development URL.

## Features Demonstration

### Dark Mode Toggle
- Click the moon/sun icon in the navigation bar to switch between light and dark themes
- Theme preference is saved to localStorage for persistence across sessions

### Navigation
- Click any navigation link to smoothly scroll to that section
- Active navigation highlighting shows your current position

### Project Filtering
- Use the filter buttons to show projects by category: All, Web Development, Mobile Apps, or Design
- Projects animate in and out smoothly when filtered

### Contact Form
- All form fields are validated client-side
- Error messages appear for invalid or empty inputs
- Form resets on successful submission

### Responsive Design
- Navigation collapses to hamburger menu on mobile devices
- Hero section stacks on smaller screens
- Skills grid adapts to different screen sizes

## Customization

### Personal Information
Edit `index.html` to customize:
- Your name in the hero section
- Profile image URL
- Project information
- Skills list
- Contact details

### Colors and Styling
Modify `styles.css` to:
- Change theme colors (CSS variables)
- Adjust typography
- Modify animations and transitions
- Customize button styles

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Accessibility-friendly with proper heading hierarchy
- CSS comments for easy maintenance

### CSS Features
- CSS variables for theming
- Media queries for responsive design
- Smooth transitions and animations
- Grid-based layouts

### JavaScript Features
- Event listeners for user interactions
- Form validation
- Local storage persistence
- Intersection Observer for animations
- Smooth scrolling implementation

## Testing

- JavaScript syntax validation
- Responsive testing across device sizes
- Form validation functionality
- Dark mode switching
- Navigation and scroll functionality

## License

This portfolio website is open source and free to use.

## Contact

For questions or improvements, please contact me through the contact form on the website.