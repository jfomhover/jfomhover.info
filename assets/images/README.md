# Images Directory

This directory contains images and assets for the website.

## Profile Photo

To add a professional photo to the about pages:

1. Add your professional headshot as `profile.jpg` or `profile.png` in this directory
2. Recommended dimensions: 300x300 pixels (or larger, will be displayed at 150x150)
3. Update the about pages (`en/about.html` and `fr/about.html`) to replace the avatar placeholder:

Replace:
```html
<div class="avatar-placeholder">
  <span class="initials">JO</span>
</div>
```

With:
```html
<img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Jeff Omhover" class="profile-photo">
```

And add this CSS to the style section:
```css
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

## Other Images

- Project screenshots should be placed in subdirectories by project name
- Blog post images can be organized by date or topic
- Use descriptive filenames and alt text for accessibility
