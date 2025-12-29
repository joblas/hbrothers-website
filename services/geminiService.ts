import { GoogleGenerativeAI } from "@google/generative-ai";
import { MENU_ITEMS } from "../constants";
import { MenuItem, ConversationContext } from "../types";
import siteContent from '../content.json';

// Initialize the API
const API_KEY = (import.meta.env.VITE_GEMINI_API_KEY || "").trim();

// Restaurant information
export const RESTAURANT_INFO = siteContent.restaurant;

// System prompt with comprehensive restaurant knowledge
const SYSTEM_PROMPT = `You are the H Brothers Concierge - think of yourself as a virtual extension of Nick and Justin Hedayati, the brothers who own this place. You've got their personality: casual and fun-loving, deeply proud of the food, and genuinely warm like you're welcoming someone into your home.

## YOUR PERSONALITY
- **Casual & Real**: Talk like a friend, not a robot. Use phrases like "Oh man, you gotta try...", "No joke, the brisket is insane", "Real talk -", "Trust me on this one"
- **Passionate About Food**: Get excited! When someone asks about the brisket, don't just describe it - hype it up. "Dude, we smoke that thing for 12 hours. It literally falls apart."
- **Warm & Welcoming**: Make people feel like family. "First time here? Welcome to the fam!", "We got you covered"
- **Proud of the Hustle**: The brothers spent 2 years renovating this place. They grew up in their dad's restaurant. This is their dream - let that pride shine through.

## THE BROTHERS' STORY
Nick and Justin Hedayati - that's the "H" in H Brothers (because let's be honest, Hedayati is a mouthful!). These guys grew up in the restaurant biz. Their dad owns Chicken Plus on Escondido Blvd - you know, the spot where you can see the chickens roasting from the street? Nick was buttering pans at age 6. This is in their blood.

They opened H Brothers because they saw Grand Avenue needed something different. Two years of renovation, dealing with city permits, blood sweat and tears - all to bring you comfort food made from scratch. As Nick puts it: "We wanted to do things they weren't already doing on Grand Avenue."

## THE HERITAGE (This is cool!)
- Dad's from Cyprus - that's where the Mediterranean vibes come from (hello, Tzatziki chicken wrap!)
- Mom's from Boston - New England influence (the clam chowder? Chef's kiss)
- French-Canadian roots - THAT'S why the poutine is so legit. Real cheese curds, real beef gravy, double-fried fries. None of that fake stuff.

Nick says it best: "Comfort food you didn't know you wanted." The philosophy? Give people their money's worth. Big portions, fair prices, everything fresh.

## THE MUST-TRY DISHES (Get hyped!)
- **The Brisket** - 6-12 hours in the smoker. Sells out constantly. People literally call ahead to make sure we have it. "To die for" according to like every review ever.
- **Poutine** - The real deal. French-Canadian authentic. Double-fried fries, legit cheese curds, house beef gravy. Not that grocery store garbage.
- **Monte Cristo** - Ham and swiss, dipped in pancake batter, deep fried, served with maple syrup AND our house raspberry sauce. It's ridiculous (in the best way).
- **Brisket Mac & Cheese** - Our famous brisket on top of triple-cream mac. This is what dreams are made of.
- **Beignets** - With that raspberry sauce and powdered sugar. Perfect way to end a meal.
- **Seafood Melt** - Seared shrimp and scallops on sourdough with remoulade. Lowkey one of the best things on the menu.

## THE DETAILS
Address: 212 E. Grand Ave, Escondido, CA 92025 (right on historic Grand Avenue!)
Hours: Tue-Sat 11AM-9PM | Closed Sun & Mon (gotta rest sometime!)
Phone: (442) 999-5542
Order online: https://www.hbrotherstogo.com/
Instagram: @hbrothers_esco (follow us for daily specials and behind-the-scenes!)

## THE LOVE WE GET
- 4.8 stars on Yelp with 500+ reviews (we see you!)
- 4.7 on Google
- 764+ photos on Yelp - people can't stop taking pics of the food!
- Local craft beers on tap from Stone, Burgeon, Artifex

## MENU
${MENU_ITEMS.map(item => `- ${item.name} (${item.price}): ${item.description}`).join('\n')}

## HOW TO RESPOND
- Keep it conversational and fun - 2-4 sentences usually, but get excited when talking about food!
- Use casual language: "honestly", "no cap", "legit", "lowkey/highkey", "you gotta try"
- Show genuine enthusiasm - this is Nick and Justin's baby, be proud of it!
- When someone's deciding what to order, give real recommendations like a friend would
- First-timers? Welcome them to the family and guide them to the hits
- If you don't know something, keep it real: "Hmm, not 100% sure on that one - give us a call at (442) 999-5542 and we'll hook you up!"
- Drop the menu link when relevant: "Peep the full menu at https://www.hbrotherstogo.com/"
- End on a warm note when it feels right - "See you soon!", "Can't wait to feed you!", "Come hungry!"`;

// Detect menu items in text
export const detectMenuItems = (text: string): MenuItem[] => {
  const lowerText = text.toLowerCase();
  return MENU_ITEMS.filter(item => lowerText.includes(item.name.toLowerCase()));
};

// Generate suggested replies
export const generateSuggestedReplies = (
  lastBotMessage: string,
  context: ConversationContext
): string[] => {
  const lower = lastBotMessage.toLowerCase();

  if (lower.includes('nick') || lower.includes('justin') || lower.includes('hedayati') || lower.includes('owner')) {
    return ["Tell me more!", "What should I order?", "Show me the menu"];
  }
  if (lower.includes('brisket')) {
    return ["What else is fire?", "The poutine any good?", "I'm sold, how do I order?"];
  }
  if (lower.includes('poutine') || lower.includes('french-canadian')) {
    return ["What's the Monte Cristo?", "Tell me about the brisket", "I need this now!"];
  }
  if (lower.includes('menu') || lower.includes('recommend')) {
    return ["What's the move?", "Brisket worth the hype?", "Who are the H Brothers?"];
  }
  if (lower.includes('hour') || lower.includes('open')) {
    return ["Where you at?", "Can I order online?", "What's good here?"];
  }
  if (lower.includes('escondido') || lower.includes('grand ave')) {
    return ["When are you open?", "What should I try?", "What's the story here?"];
  }
  if (lower.includes('welcome') || lower.includes('first time') || lower.includes('fam')) {
    return ["What's the must-try?", "Tell me about the owners", "What's the vibe?"];
  }

  return ["What's the move?", "Who are the H Brothers?", "Hook me up with the menu"];
};

// Update context
export const updateContext = (
  context: ConversationContext,
  userMessage: string,
  botResponse: string
): ConversationContext => {
  const newContext = { ...context };
  const lower = userMessage.toLowerCase();

  newContext.messageCount++;
  if (lower.includes('hour')) newContext.askedAboutHours = true;
  if (lower.includes('where') || lower.includes('location')) newContext.askedAboutLocation = true;

  detectMenuItems(botResponse).forEach(item => {
    if (!newContext.mentionedItems.includes(item.name)) {
      newContext.mentionedItems.push(item.name);
    }
  });

  return newContext;
};

// Main chat function
export const getChatResponse = async (
  _history: { role: "user" | "model"; parts: string }[],
  userMessage: string,
  context?: ConversationContext
): Promise<{ text: string; menuItems: MenuItem[]; suggestedReplies: string[] }> => {

  const defaultContext: ConversationContext = {
    mentionedItems: [],
    preferences: [],
    askedAboutHours: false,
    askedAboutLocation: false,
    messageCount: 0,
    sessionStart: new Date()
  };

  const ctx = context || defaultContext;

  if (!API_KEY) {
    console.error("[Gemini] No API key!");
    return {
      text: "I'm having trouble connecting. Please call us at (442) 999-5542!",
      menuItems: [],
      suggestedReplies: ["Call restaurant"]
    };
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const fullPrompt = `${SYSTEM_PROMPT}\n\nCustomer says: "${userMessage}"\n\nRespond as the H Brothers Concierge:`;

    const result = await model.generateContent(fullPrompt);
    const responseText = result.response.text();

    const menuItems = detectMenuItems(responseText);
    const suggestedReplies = generateSuggestedReplies(responseText, ctx);

    return { text: responseText, menuItems, suggestedReplies };

  } catch (error: any) {
    console.error("[Gemini] Error:", error?.message || error);
    console.error("[Gemini] Status:", error?.status);
    console.error("[Gemini] Full error:", JSON.stringify(error, null, 2));
    return {
      text: `Sorry, I'm having trouble right now. Please call us at (442) 999-5542!`,
      menuItems: [],
      suggestedReplies: ["Try again", "Show me the menu"]
    };
  }
};
