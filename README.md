# Chime Clock

A clock that chimes on the hour, quarter hours and half hour — you choose which, and the sound for each.

## Features
- Digital or analogue face, round or square, with seconds as a sweeping ring or dashes that light up one by one
- Chime on the hour, quarter past, half past and quarter to — each can be switched on or off with its own sound: grand hall chime, 80s Casio beep-beep, grandfather clock (proper Westminster quarters), simple beep, simple bell
- Chime early (up to 2 minutes) as a warning before meetings
- Working hours: choose first and last chime (default 09:00–17:00) and which days it plays (default Mon–Fri)
- Appearance: follow system light/dark, or force Day or Dark
- Background: theme, any colour (palette or colour picker), or your own picture with a dim control
- Screen burn protection: content drifts a few pixels, too slowly to notice
- Full-screen mode (tap to show controls)
- Settings are remembered in your browser

## Publish with GitHub Pages
1. Create a new repository and upload `index.html`, `manifest.webmanifest`, `sw.js` and the four `icon-*.png` files to the root.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
3. After a minute the clock is live at `https://<your-username>.github.io/<repo-name>/`.

On a phone, open that link and use **Add to Home Screen** to run it like an app.

Note: browsers need one tap before they can play sound, so tap **Start clock with sound** when it opens.
