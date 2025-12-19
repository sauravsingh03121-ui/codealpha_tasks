# Image Gallery Project

A responsive and interactive image gallery web application that showcases beautiful images across different categories. Built with HTML, CSS, and JavaScript, featuring a modern design with filtering, lightbox viewing, and image effects.

## Features

- **Category Filtering**: Filter images by categories (All, Nature, Animals, City, Mountains)
- **Lightbox View**: Click on any image to view it in a full-screen lightbox
- **Image Navigation**: Navigate through images in the lightbox with previous/next buttons
- **Image Filters**: Apply various filters to images in the lightbox (Grayscale, Sepia, Blur, Brightness, Contrast)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard Navigation**: Use arrow keys and Escape to navigate in the lightbox
- **Smooth Animations**: Hover effects and transitions for enhanced user experience

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features like CSS Grid, Flexbox, and backdrop filters
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Unsplash API**: High-quality, free-to-use images

## Project Structure

```
image-gallery-project/
├── index.html          # Main HTML file
├── style.css           # CSS stylesheets
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## How to Run

1. Clone or download the project files
2. Open `index.html` in a modern web browser
3. No additional setup or dependencies required - it's a pure frontend application

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Adding New Images

To add new images, edit the `images` array in `script.js`:

```javascript
const images = [
    // Existing images...
    { src: 'your-image-url', category: 'your-category', alt: 'Image description' },
    // More images...
];
```

### Modifying Categories

Update the filter buttons in `index.html` and ensure corresponding images exist in `script.js`.

### Styling Changes

Modify `style.css` to customize colors, layouts, and animations.

## Features in Detail

### Gallery View
- Grid layout that adapts to screen size
- Hover effects with image scaling and overlay information
- Smooth transitions and animations

### Lightbox Functionality
- Full-screen image viewing
- Navigation controls (previous/next)
- Click outside to close
- Keyboard shortcuts:
  - Left/Right arrows: Navigate images
  - Escape: Close lightbox

### Image Filters
- Normal (no filter)
- Grayscale
- Sepia
- Blur
- Brightness increase
- Contrast increase

## Performance

- Lazy loading not implemented (all images load on page load)
- Images are optimized via Unsplash URL parameters
- CSS animations use hardware acceleration where possible

## Future Enhancements

- [ ] Implement lazy loading for better performance
- [ ] Add search functionality
- [ ] Include image upload feature
- [ ] Add more filter options
- [ ] Implement image download functionality
- [ ] Add social sharing buttons

## License

This project uses images from [Unsplash](https://unsplash.com/), which are free to use. The code is available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes.

## Acknowledgments

- Images sourced from [Unsplash](https://unsplash.com/)
- Inspired by modern web gallery designs
