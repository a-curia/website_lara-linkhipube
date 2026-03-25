# LINKHIPU Website — Deployment Checklist

## GDPR Compliance Steps Before Going Live

### 1. Self-Host Google Fonts (REQUIRED)
Loading fonts from Google's CDN transmits visitor IP addresses to US servers
(LG München ruling Jan 2022; Belgian APD aligned position).

Download Manrope and Inter from one of:
- https://fonts.bunny.net (EU-hosted, drop-in Google Fonts replacement)
- https://gwfh.mranftl.com/fonts (Google Webfonts Helper — self-host tool)

Place .woff2 files in /fonts/ and uncomment the @font-face blocks in fonts/fonts.css

### 2. Self-Host Images (RECOMMENDED)
Currently images are loaded from images.unsplash.com — this sends visitor IPs
to Unsplash's US CDN. Download all images locally and update src attributes.
Images are listed in privacy-policy.html §2.3.

### 3. Contact Form Backend
The contact form stub in js/main.js (ContactForm.send()) needs a real backend.
Use a Belgian/EU-hosted endpoint (e.g. your own server, EU Formspree instance).
Do NOT use US-only form services without a DPA and SCCs in place.

### 4. Register with Belgian APD (if not done)
If you process any personal data at all (even via email enquiries), register
your processing activities at: https://www.autoriteprotectiondonnees.be

## File Structure
```
linkhipu/
├── index.html, about.html, services.html, contact.html
├── cloud.html, data-services.html, app-development.html
├── web-development.html, 30day-pocs.html
├── privacy-policy.html, terms.html, cookies.html
├── gdpr.html, conduct.html, disclaimer.html
├── css/styles.css
├── fonts/fonts.css  ← replace Google Fonts CDN
├── js/main.js
└── images/          ← all logo variants, favicon.ico
```
