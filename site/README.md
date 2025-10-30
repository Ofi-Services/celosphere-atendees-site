# OFI Services - Team Directory Website

A modern, responsive website showcasing the OFI Services team with individual attendee cards featuring contact information and meeting request functionality.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive Grid**: Attendee cards automatically adapt to different screen sizes
- **Contact Information**: Each card displays name, job title, phone, and email
- **Meeting Requests**: Optional "Request Meeting" buttons that redirect to external booking platforms
- **Logo Support**: Placeholder for OFI Services logo and branding
- **Mobile Friendly**: Fully responsive design that works on all devices

## Project Structure

```
site/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet with responsive design
├── script.js           # JavaScript for dynamic content generation
├── assets/             # Directory for images and media
│   ├── README.md       # Instructions for asset placement
│   └── ofi-logo.png    # (To be added) OFI Services logo
├── .github/
│   └── copilot-instructions.md  # Workspace-specific Copilot instructions
└── README.md           # This file
```

## Getting Started

### Prerequisites
- A modern web browser
- Python 3.x (for local development server)

### Running the Website

1. **Local Development Server**:
   ```bash
   python -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser

2. **VS Code Live Server** (if extension installed):
   - Right-click on `index.html`
   - Select "Open with Live Server"

### Customization

#### Adding Your Logo
1. Place your OFI Services logo in the `assets/` directory as `ofi-logo.png`
2. The website will automatically display it in the header

#### Adding/Editing Attendees
Edit the `attendeesData` array in `script.js`:

```javascript
const attendeesData = [
    {
        id: 1,
        name: "Your Name",
        jobTitle: "Your Job Title",
        phone: "+1 (555) 123-4567",
        email: "your.email@ofiservices.com",
        profilePhoto: "path/to/your/photo.jpg",
        meetingUrl: "https://calendly.com/yourname" // Optional
    }
    // Add more attendees as needed
];
```

#### Customizing Company Information
Edit the intro section in `index.html`:
- Update the company description
- Modify the welcome message
- Change contact details

#### Styling Customization
The website uses CSS custom properties for easy theming. Key colors can be modified in `styles.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Background: `#f8f9fa`
- Text colors: Various shades of gray

## Technical Details

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern features including CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No external dependencies
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Performance**: Optimized images and minimal resource loading

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Deployment

### Static Hosting Services
The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the entire `site` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket configured for static hosting

### Traditional Web Hosting
Upload all files to your web server's public directory (usually `public_html` or `www`).

## Future Enhancements

- **CMS Integration**: Connect to a headless CMS for easy content updates
- **Search Functionality**: Add ability to search/filter attendees
- **Contact Forms**: Implement contact forms for each attendee
- **Analytics**: Add Google Analytics or similar tracking
- **Progressive Web App**: Add service worker for offline functionality

## Support

For questions or issues with this website:
1. Check the browser console for any JavaScript errors
2. Ensure all file paths are correct
3. Verify that the local server is running on the correct port

## License

This project is created for OFI Services. All rights reserved.

---

**Note**: This website includes placeholder content and sample data. Replace all placeholder information with actual OFI Services content before production use.