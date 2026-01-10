# Email Setup Guide for Contact Form

You have several options to make your contact form send emails to `hello@sweetboothyvr.com`. Here are the recommended approaches:

## Option 1: Formspree (Easiest - Recommended)

### Setup Steps:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Set the target email to: `hello@sweetboothyvr.com`
5. Copy your form ID (looks like: `xpzgkqyw`)
6. Replace `YOUR_FORM_ID` in `ContactFormFormspree.tsx` with your actual form ID
7. Update `App.tsx` to import `ContactFormFormspree` instead of `ContactForm`

### Pros:
- No backend required
- Free tier available (50 submissions/month)
- Easy setup (5 minutes)
- Spam protection included
- No API keys to manage

## Option 2: EmailJS

### Setup Steps:
1. Go to [emailjs.com](https://emailjs.com)
2. Create a free account
3. Set up an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Install EmailJS: `npm install @emailjs/browser`
7. Replace placeholders in `ContactForm.tsx` with your actual IDs

### Pros:
- Sends emails directly from frontend
- More customization options
- Free tier: 200 emails/month

## Option 3: Custom Backend (Advanced)

### If you want full control:
1. Create a Node.js/Express backend
2. Use nodemailer to send emails
3. Deploy to Vercel, Netlify, or AWS
4. Update the form to POST to your backend endpoint

## Quick Start with Formspree (Recommended):

1. Go to formspree.io and create an account
2. Create a new form with target email: hello@sweetboothyvr.com
3. Get your form ID
4. Replace the import in App.tsx:

```tsx
// Change this line:
import ContactForm from './components/ContactForm'

// To this:
import ContactForm from './components/ContactFormFormspree'
```

5. Update the form ID in ContactFormFormspree.tsx
6. Test your form!

## Environment Variables (for production):

Create a `.env` file in your project root:

```
# For EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# For Formspree
VITE_FORMSPREE_FORM_ID=your_form_id
```

Then use them in your components like:
```tsx
const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
```
