# Deployment Guide for 11stoneshead.luxury

## Quick Deploy with Vercel CLI

### Install Vercel CLI
```bash
npm i -g vercel
```

### Deploy
```bash
cd "D:\11 Stoneshead"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **11-stoneshead**
- In which directory is your code located? **.**
- Want to override settings? **N**

### Deploy to Production
```bash
vercel --prod
```

### Add Custom Domain
```bash
vercel domains add 11stoneshead.luxury
```

## GoDaddy DNS Configuration

In your GoDaddy domain settings for `11stoneshead.luxury`, add:

### A Record
- **Type**: A
- **Name**: @
- **Value**: 76.76.21.21 (Vercel IP - verify current IP in Vercel dashboard)
- **TTL**: 600 seconds

### CNAME Record
- **Type**: CNAME  
- **Name**: www
- **Value**: cname.vercel-dns.com
- **TTL**: 1 Hour

### Note
After adding DNS records, wait 5-60 minutes for propagation.
Check status: https://dnschecker.org/#A/11stoneshead.luxury

## Verify Deployment
Once DNS propagates, visit:
- https://11stoneshead.luxury
- https://www.11stoneshead.luxury

## Environment Variables (if needed)
If you need to add environment variables:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add any API keys or secrets

## Continuous Deployment
Connect your Git repository for automatic deployments:
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository in Vercel
3. Every push to main branch auto-deploys

## Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

