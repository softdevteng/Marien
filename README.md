# 💕 Romantic Webpage for Marien Wanjiku Muturi 💕

A beautiful, romantic webpage created with love! This is a mobile-responsive website you can share with your girlfriend via a link.

## 📁 Project Structure

```
Marien❤️/
├── index.html          # Main webpage
├── styles.css          # All styling (responsive design)
├── script.js           # Interactive elements
├── assets/
│   └── images/
│       ├── letter.svg  # Placeholder love letter (replace with your letter photo)
│       ├── photo1.jpg  # Add your photos here
│       ├── photo2.jpg
│       ├── photo3.jpg
│       └── photo4.jpg
└── README.md          # This file
```

## 🖼️ How to Add Your Photos

### Step 1: Add Your Photos
1. Take or prepare 4 photos of you and your girlfriend (or just her)
2. Place them in the `assets/images/` folder with these names:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`

### Step 2: Replace Photo Placeholders
The photos will automatically appear in the "Our Moments Together" section. The placeholders are just guides.

## 💌 How to Add the Love Letter Photo

### Option 1: Use the Placeholder
The current `letter.svg` is a beautiful placeholder. Leave it as is!

### Option 2: Replace with Your Letter Photo
1. Take a photo of a handwritten love letter
2. Save it as `letter.jpg` in the `assets/images/` folder
3. Update the `index.html` file:
   - Find this line: `<img src="assets/images/letter.svg" alt="Love Letter" id="letterImg">`
   - Change it to: `<img src="assets/images/letter.jpg" alt="Love Letter" id="letterImg">`

### Option 3: Edit the Letter Text
Edit the love letter text directly in `index.html`:
- Find the section with `<div class="letter-text">`
- Update the paragraphs with your personal message

## 🚀 How to View the Website

### Local Preview:
1. Open the folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. Or simply double-click `index.html` to open in your browser

### Share via Email/Link:
To share this with your girlfriend:

1. **Using GitHub Pages (Free & Easy):**
   - Upload your folder to GitHub
   - Enable GitHub Pages in repository settings
   - Share the GitHub Pages link

2. **Using Vercel (Free & Simple):**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Get a free hosted link instantly

3. **Using Netlify (Free & Reliable):**
   - Go to https://netlify.com
   - Drag and drop your folder
   - Get a shareable link

4. **Local Network (If on same WiFi):**
   - Use Live Server extension in VS Code
   - Share your local IP address

## ✨ Features

- 💕 Beautiful romantic design with pink/red theme
- 📱 Fully mobile-responsive (works great on phones!)
- 🎵 Animated floating hearts
- 🖼️ Photo gallery section for 4 photos
- 💌 Love letter display section
- 💬 Interactive message generator with 20+ love messages
- 🌟 Smooth animations and transitions
- 📅 Automatic date display

## 🎨 Customization

You can customize the following in `index.html`:

1. **Her Name**: Change "Marien Wanjiku Muturi" (appears in title)
2. **Love Letter**: Edit the letter text in the letter-text section
3. **Why You Matter Section**: Update the 4 reason cards
4. **Colors**: Edit `styles.css` to change the pink/red theme

## 📝 Editing Tips

### Change the Main Title:
Look for: `<h1 class="title">Marien Wanjiku Muturi</h1>`

### Edit Love Messages:
In `script.js`, find the `loveMessages` array and edit/add messages

### Adjust Colors:
Main color in `styles.css`: `--primary: #c41e5f;` and `--secondary: #e85b8a;`

## 💻 Browser Compatibility

Works perfectly on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Testing

Before sending:
1. Open on your phone
2. Scroll through all sections
3. Click the message button
4. Check that photos display correctly
5. Verify the letter is readable

## 🎁 Next Steps

1. Add your beautiful photos to `assets/images/`
2. Optionally customize the letter text
3. Preview on your phone
4. Deploy to GitHub Pages, Vercel, or Netlify
5. Share the link with your girlfriend! 💕

## 🆘 Troubleshooting

**Photos not showing?**
- Check file names match exactly: photo1.jpg, photo2.jpg, etc.
- Make sure files are in `assets/images/` folder
- Check file format (jpg, png, webp all work)

**Letter not showing?**
- Verify `letter.svg` or `letter.jpg` exists in `assets/images/`
- Check the img src in index.html matches the filename

**Website not responsive?**
- Clear browser cache (Ctrl+Shift+Delete)
- Open in incognito/private window

## 💝 Final Notes

This webpage is created with love for Marien Wanjiku Muturi. Make it personal by:
- Adding your favorite photos together
- Writing a heartfelt message
- Customizing the colors if desired
- Making sure it represents your feelings

Good luck! She's going to love it! ❤️

---
Made with ❤️ for your special someone
