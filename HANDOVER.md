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

## 2. Updating the Menu
The menu items shown on the site and known by the AI are stored in a single file for easy management.

*   **File Path:** `constants.tsx`
*   **How to update:** 
    1.  Open `constants.tsx`.
    2.  Edit the `MENU_ITEMS` array. You can change prices, descriptions, or add new items.
    3.  The AI will automatically "learn" the new menu the next time the site is built and deployed.

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
