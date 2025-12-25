# H Brothers Website - Handover Guide

Welcome to your new, high-performance website! This guide explains how to manage the technical aspects of the site.

## 1. AI Concierge (Google Gemini)
The chatbot is powered by Google Gemini. To keep it running, you need a Google Cloud API Key.

### How to set/update your API Key:
1.  **Get a Key:** Go to the [Google AI Studio](https://aistudio.google.com/) and create a free API key.
2.  **Add to Hosting:** 
    *   Since the site is hosted on GitHub Pages, the key is currently pulled from the `.env` file during the build process.
    *   **Action Required:** If you want to change the key in the future without code access, you will need to update the `VITE_GEMINI_API_KEY` in your deployment settings.

### Cost & Limits:
*   The **Gemini 1.5 Flash** model has a very generous free tier that should easily cover a local restaurant's traffic.
*   If you ever exceed the free tier, the chatbot will show a "connecting to kitchen" fallback message instead of crashing.

## 2. Updating Content (Menu, Promotions, Hours)
All editable content is stored in a single file called `content.json`. This allows you to update the site without touching complex code.

*   **File Path:** `content.json`
*   **What you can change:**
    *   **Menu:** Update prices, descriptions, and item names.
    *   **Promotions:** Change the "1" badge alert, title, and description for your current special.
    *   **Restaurant Info:** Update your hours, phone number, or ordering link.
    
### How to update:
1.  Open `content.json` in your editor (or directly on GitHub).
2.  Find the text you want to change (e.g., the price of the "Classic Burger").
3.  Type the new price between the quotation marks.
4.  **Important:** Be careful not to delete any commas `,` or curly braces `{}` as these are required for the file to work.
5.  Save and **Deploy** the site to see changes live.

## 3. Deployment (Updating the Live Site)
The site is configured to deploy to **GitHub Pages**.

### To push updates live:
1.  Open your terminal in the project folder.
2.  Run the command:
    ```bash
    npm run deploy
    ```
3.  This command will automatically build the latest version of the site and push it to the `gh-pages` branch. Your changes will be live within a few minutes.

## 4. SEO & Marketing
*   **Sitemap:** Automatically generated at `/sitemap.xml`.
*   **Google Analytics:** The tracking code is in `index.html`. Replace the `G-XXXXXXXXXX` placeholder with your actual ID to start seeing traffic data.
*   **Marketing Strategy:** See the `MARKETING_KIT.md` file in the root directory for your complete social media and review growth plan.

---
*Created by Joe's Tech Solutions*
