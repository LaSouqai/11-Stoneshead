# Complete Vercel Deployment Guide for 11stoneshead.luxury

## Part 1: Create Vercel Account & Deploy Project

### Step 1: Sign Up for Vercel (Free)
1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"** (recommended) OR **"Continue with Email"**
3. If using GitHub:
   - Authorize Vercel to access your GitHub account
   - This will make future deployments easier
4. If using Email:
   - Enter your email address
   - Check your inbox for verification code
   - Enter the code to verify

### Step 2: Prepare Your Project Files
Your project is located at: `D:\11 Stoneshead`

**Option A: Upload via Web Interface (Easiest)**
1. Create a ZIP file of your project:
   - Go to `D:\11 Stoneshead`
   - Select all files and folders
   - Right-click → Send to → Compressed (zipped) folder
   - Name it: `11-stoneshead.zip`

**Option B: Use GitHub (Recommended for updates)**
1. Create GitHub account if you don't have one: https://github.com/signup
2. Create new repository: https://github.com/new
   - Name: `11-stoneshead-luxury`
   - Make it Private (recommended)
   - Click "Create repository"
3. Push your code (run these commands):
   ```bash
   cd "D:\11 Stoneshead"
   git remote add origin https://github.com/YOUR-USERNAME/11-stoneshead-luxury.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Import Project to Vercel

#### Method A: Import from GitHub (if you set up GitHub)
1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your `11-stoneshead-luxury` repository
4. Click **"Import"**
5. Configure project:
   - **Project Name**: `11-stoneshead` (or any name you prefer)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete
8. You'll see "Congratulations!" with a preview URL

#### Method B: Upload ZIP File
1. Go to: **https://vercel.com/new**
2. Click the **"Browse"** button under "Import Git Repository"
3. OR drag and drop your `11-stoneshead.zip` file
4. Vercel will upload and extract your files
5. Follow steps 5-8 from Method A above

### Step 4: Get Your Temporary Vercel URL
After deployment, you'll get a URL like:
- `https://11-stoneshead-abc123.vercel.app`

**TEST THIS URL FIRST** before connecting your custom domain!

---

## Part 2: Connect Your Custom Domain (11stoneshead.luxury)

### Step 5: Add Custom Domain in Vercel
1. In Vercel dashboard, go to your project
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left sidebar)
4. In the "Add Domain" field, type: `11stoneshead.luxury`
5. Click **"Add"**
6. Vercel will show you DNS configuration needed
7. **Keep this page open** - you'll need these values for GoDaddy

### Step 6: Configure DNS in GoDaddy

#### Open GoDaddy DNS Management
1. Log into GoDaddy: **https://dcc.godaddy.com/**
2. Go to **My Products**
3. Find `11stoneshead.luxury`
4. Click the **DNS** button (or three dots → Manage DNS)

#### Add/Update DNS Records

Vercel will show you EXACTLY what to add. Typically it's one of these setups:

**Setup Option 1: A Records (Most Common)**
1. In GoDaddy, click **"Add"** to add new record
2. Create Record #1:
   - **Type**: A
   - **Name**: @ (this means root domain)
   - **Value**: `76.76.21.21` (Vercel's IP - CHECK YOUR VERCEL DASHBOARD FOR ACTUAL IP)
   - **TTL**: 600 seconds (or 1/2 hour)
   - Click **"Save"**

3. Create Record #2 (for www):
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 1 hour
   - Click **"Save"**

**Setup Option 2: CNAME Only (If Vercel suggests)**
1. Find the existing A record with name "@"
2. Click the pencil icon to edit OR delete it
3. Add new CNAME:
   - **Type**: CNAME
   - **Name**: @
   - **Value**: `cname.vercel-dns.com` (exact value shown in Vercel)
   - **TTL**: 1 hour
   - Click **"Save"**

#### Important GoDaddy Notes:
- You may need to DELETE the default GoDaddy "Parked" A record
- Make sure there are NO conflicting A records pointing to GoDaddy's parking page
- Keep GoDaddy's nameservers as default (don't change nameservers)

### Step 7: Verify Domain in Vercel
1. Go back to Vercel → Settings → Domains
2. You should see your domain with status "Pending" or "Invalid Configuration"
3. Click **"Refresh"** after updating GoDaddy DNS
4. Wait 5-60 minutes for DNS propagation
5. Status will change to **"Valid Configuration"** with a green checkmark

### Step 8: Add www Subdomain (Optional but Recommended)
1. In Vercel Domains settings, click **"Add"** again
2. Type: `www.11stoneshead.luxury`
3. Click **"Add"**
4. Select **"Redirect to 11stoneshead.luxury"** (this ensures www visitors see your site)

---

## Part 3: Verify Your Live Site

### Check DNS Propagation
Use this tool to check if DNS has propagated globally:
**https://dnschecker.org/#A/11stoneshead.luxury**

Wait until most locations show green checkmarks.

### Visit Your Live Site
Once DNS propagates (5-60 minutes), visit:
- **https://11stoneshead.luxury** ✨
- **https://www.11stoneshead.luxury**

Both should show your beautiful Ascaya Residence website!

---

## Troubleshooting

### Domain shows "This domain is parked" or GoDaddy page
- Go back to GoDaddy DNS and DELETE any A records pointing to GoDaddy IPs
- Make sure your A record points to Vercel's IP

### "Invalid Configuration" in Vercel
- Wait longer (DNS can take up to 24 hours but usually 15-60 minutes)
- Double-check you entered DNS records correctly in GoDaddy
- Make sure TTL isn't too high (use 600 seconds or 1 hour)

### Certificate/HTTPS errors
- Vercel automatically provisions SSL certificates
- This can take 15-30 minutes after DNS is validated
- Just wait - it will resolve automatically

### Need to Update Your Site?
- Make changes to files in `D:\11 Stoneshead`
- If using GitHub: commit and push changes
- If using ZIP: re-upload in Vercel dashboard
- Vercel will auto-deploy updates in ~2 minutes

---

## Quick Reference: Your Project Details

- **Local Project**: `D:\11 Stoneshead`
- **Domain**: 11stoneshead.luxury
- **Framework**: Next.js 14
- **Hosting**: Vercel (Free plan)
- **DNS Provider**: GoDaddy

---

## Support Links
- Vercel Documentation: https://vercel.com/docs
- Vercel Domain Setup: https://vercel.com/docs/projects/domains
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-records-680

---

**Estimated Total Time**: 15-30 minutes (plus DNS propagation wait time)

Good luck! Your luxury website will be live soon! 🚀✨

