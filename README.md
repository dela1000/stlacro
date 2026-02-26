# STL Acro

Webpage for St. Louis AcroYoga community.

## Pages

- **Home** - Classes, jams, and workshops
- **About** - About the community
- **FAQ** - Frequently asked questions
- **Contact** - Contact form
- **Conduct** - Community guidelines

## Development

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run start
```

### Build for production

```bash
npm run build
```

## Contact Form

The contact form sends messages to a Discord channel via Google Apps Script proxy.

To update the Google Apps Script:

1. Go to https://script.google.com/home/projects/1_T0bl5Re7zaTccxkA4WLOaNeIO9cdQKD_zjjUpkNh4tbGiMz2iUk5v2z/edit
2. Update the code
3. Deploy a new version

The script URL is stored in `src/constants/contactForm.ts`.

Any pushed to `main` will deploy to the production site.

Hosted on Netlify.
