# Background Images Directory

Place background images and textures here for use throughout the website.

## Recommended File Names:
- `hero-background.jpg` - Main hero/intro section background
- `page-background.jpg` - General page background
- `pattern-overlay.png` - Subtle patterns or overlays
- `texture-dark.jpg` - Dark texture for sections

## File Specifications:
- **Format**: JPG for photos, PNG for patterns with transparency
- **Size**: 
  - Full backgrounds: 1920px width minimum
  - Patterns: Can be smaller (for tiling)
- **File Size**: Keep under 500KB for optimal loading
- **Quality**: Balance between quality and file size

## Usage in CSS:
```css
.section {
    background-image: url('../images/backgrounds/hero-background.jpg');
    background-size: cover;
    background-position: center;
}
```

## Notes:
- Consider using WebP format for better compression
- Optimize images for web before uploading
- Test on different screen sizes
- Ensure good contrast with text content