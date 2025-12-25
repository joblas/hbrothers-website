# H Brothers - SEO & Marketing Implementation Kit

## Table of Contents
1. [Schema Markup Code](#1-schema-markup-code)
2. [Meta Tags](#2-meta-tags)
3. [Google Business Profile Checklist](#3-google-business-profile-checklist)
4. [Social Media Templates](#4-social-media-templates)
5. [Email Templates](#5-email-templates)
6. [Review Request Templates](#6-review-request-templates)
7. [QR Code Strategy](#7-qr-code-strategy)
8. [Content Calendar](#8-content-calendar)

---

## 1. Schema Markup Code

Add this code to your website's `<head>` section (or in Next.js, add to your layout.tsx):

### Restaurant Schema (Primary)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://joblas.github.io/HBrothers-Website/#restaurant",
  "name": "H Brothers",
  "image": [
    "https://joblas.github.io/HBrothers-Website/images/hero-bg.jpg",
    "https://joblas.github.io/HBrothers-Website/images/menu-special-brisket.jpg",
    "https://joblas.github.io/HBrothers-Website/images/item-classic-burger.jpg"
  ],
  "url": "https://joblas.github.io/HBrothers-Website/",
  "telephone": "+1-442-999-5542",
  "priceRange": "$$",
  "servesCuisine": ["American", "Comfort Food", "Burgers"],
  "acceptsReservations": "false",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "212 E Grand Ave",
    "addressLocality": "Escondido",
    "addressRegion": "CA",
    "postalCode": "92025",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.1192,
    "longitude": -117.0811
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "11:00",
      "closes": "21:00"
    }
  ],
  "menu": "https://www.hbrotherstogo.com/",
  "hasMenu": {
    "@type": "Menu",
    "name": "Main Menu",
    "description": "Comfort food favorites including burgers, poutine, and mac & cheese",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Classics",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Classic Burger",
            "description": "Half-pound Angus beef, melted cheddar, secret sauce",
            "offers": {
              "@type": "Offer",
              "price": "14.95",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Original Poutine",
            "description": "Crispy fries, fresh cheese curds, and our signature savory gravy",
            "offers": {
              "@type": "Offer",
              "price": "11.50",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Mac & Cheese",
            "description": "Creamy three-cheese blend with a toasted breadcrumb topping",
            "offers": {
              "@type": "Offer",
              "price": "9.95",
              "priceCurrency": "USD"
            }
          }
        ]
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "500",
    "reviewCount": "500"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David M."
      },
      "datePublished": "2024-12-01",
      "reviewBody": "Excellent food and quality. The Parmesan Crusted Chicken Sandwich and Shrimp Po-Boy are my new favorites!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Katherine W."
      },
      "datePublished": "2024-11-15",
      "reviewBody": "My family adored the food! Well made, very fresh, and so tasty!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ],
  "sameAs": [
    "https://www.yelp.com/biz/h-brothers-escondido",
    "https://www.instagram.com/hbrothers_esco/",
    "https://www.facebook.com/hbrothersescondido"
  ],
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.hbrotherstogo.com/",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "deliveryMethod": [
      "http://purl.org/goodrelations/v1#DeliveryModePickUp",
      "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
    ]
  }
}
</script>
```

### Local Business Schema (Additional)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H Brothers",
  "description": "Escondido's home for hearty comfort food. Family recipes, generous portions served Tuesday through Saturday on Grand Ave.",
  "url": "https://joblas.github.io/HBrothers-Website/",
  "telephone": "+1-442-999-5542",
  "email": "hello@hbrothers.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "212 E Grand Ave",
    "addressLocality": "Escondido",
    "addressRegion": "CA",
    "postalCode": "92025",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.1192,
    "longitude": -117.0811
  },
  "areaServed": {
    "@type": "City",
    "name": "Escondido"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD"
}
</script>
```

### Breadcrumb Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://joblas.github.io/HBrothers-Website/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Menu",
      "item": "https://www.hbrotherstogo.com/"
    }
  ]
}
</script>
```

---

## 2. Meta Tags

Replace your current meta tags with these optimized versions:

### Homepage Meta Tags

```html
<head>
  <!-- Primary Meta Tags -->
  <title>H Brothers | Best Comfort Food & Burgers in Escondido, CA</title>
  <meta name="title" content="H Brothers | Best Comfort Food & Burgers in Escondido, CA">
  <meta name="description" content="Craving comfort food in Escondido? H Brothers serves the best burgers, loaded fries, poutine & mac and cheese on Grand Ave. Order online or visit Tue-Sat 11am-9pm. ⭐ 4.8 stars on Yelp!">
  <meta name="keywords" content="comfort food escondido, best burger escondido, restaurants downtown escondido, poutine near me, mac and cheese escondido, grand ave restaurants, escondido lunch">
  <meta name="author" content="H Brothers">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://joblas.github.io/HBrothers-Website/">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="restaurant.restaurant">
  <meta property="og:url" content="https://joblas.github.io/HBrothers-Website/">
  <meta property="og:title" content="H Brothers | Best Comfort Food & Burgers in Escondido, CA">
  <meta property="og:description" content="Escondido's home for hearty comfort food. Burgers, poutine, mac & cheese and more. Order online or visit us on Grand Ave!">
  <meta property="og:image" content="https://joblas.github.io/HBrothers-Website/images/hero-bg.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="H Brothers">
  
  <!-- Restaurant Specific Open Graph -->
  <meta property="restaurant:contact_info:street_address" content="212 E Grand Ave">
  <meta property="restaurant:contact_info:locality" content="Escondido">
  <meta property="restaurant:contact_info:region" content="CA">
  <meta property="restaurant:contact_info:postal_code" content="92025">
  <meta property="restaurant:contact_info:country_name" content="USA">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://joblas.github.io/HBrothers-Website/">
  <meta property="twitter:title" content="H Brothers | Best Comfort Food & Burgers in Escondido, CA">
  <meta property="twitter:description" content="Escondido's home for hearty comfort food. Burgers, poutine, mac & cheese and more!">
  <meta property="twitter:image" content="https://joblas.github.io/HBrothers-Website/images/hero-bg.jpg">
  
  <!-- Geo Tags for Local SEO -->
  <meta name="geo.region" content="US-CA">
  <meta name="geo.placename" content="Escondido">
  <meta name="geo.position" content="33.1192;-117.0811">
  <meta name="ICBM" content="33.1192, -117.0811">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="https://joblas.github.io/HBrothers-Website/favicon.ico?favicon.0b3bf435.ico" />
  <link rel="apple-touch-icon" href="https://joblas.github.io/HBrothers-Website/favicon.ico" />
  
  <!-- Preconnect for Performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

---

## 3. Google Business Profile Checklist

### Week 1 Setup Checklist

- [ ] **Claim listing** at business.google.com
- [ ] **Verify ownership** (postcard, phone, or email)
- [ ] **Business name**: H Brothers (exact, no keywords stuffing)
- [ ] **Primary category**: American Restaurant
- [ ] **Secondary categories**: Comfort Food Restaurant, Burger Restaurant
- [ ] **Address**: 212 E Grand Ave, Escondido, CA 92025
- [ ] **Phone**: (442) 999-5542
- [ ] **Website**: https://joblas.github.io/HBrothers-Website/
- [ ] **Hours**: Tue-Sat 11am-9pm, Closed Sun-Mon

### Photos to Add (Minimum 20)

**Exterior (3-5 photos)**
- [ ] Storefront with signage (daytime)
- [ ] Storefront (evening/night if lit)
- [ ] Street view showing location on Grand Ave
- [ ] Parking area (if applicable)

**Interior (3-5 photos)**
- [ ] Dining area wide shot
- [ ] Counter/ordering area
- [ ] Seating details
- [ ] Any decor/ambiance shots

**Food (10-15 photos) - MOST IMPORTANT**
- [ ] Classic Burger (hero shot)
- [ ] Original Poutine
- [ ] Mac & Cheese
- [ ] Brisket Mac & Cheese (weekly special)
- [ ] Chicken Sandwich
- [ ] Parmesan Chicken
- [ ] Loaded Fries
- [ ] Shrimp Po-Boy
- [ ] Buffalo Chicken Wrap
- [ ] Any seasonal specials

**Team (2-3 photos)**
- [ ] Owner/chef
- [ ] Team photo
- [ ] Kitchen action shot

### Attributes to Enable

- [ ] Dine-in: Yes
- [ ] Takeout: Yes
- [ ] Delivery: Yes (via third party)
- [ ] Curbside pickup: Yes/No
- [ ] No-contact delivery: Yes
- [ ] Outdoor seating: Yes/No
- [ ] Wheelchair accessible: Yes/No
- [ ] Wi-Fi: Yes/No
- [ ] Restroom: Yes
- [ ] Credit cards accepted: Yes
- [ ] LGBTQ+ friendly: Yes
- [ ] Family-friendly: Yes

### Weekly Posts (Template)

**Format:**
```
🍔 [HEADLINE - What's special]

[2-3 sentences about the offer/update]

📍 212 E Grand Ave, Escondido
🕐 Tue-Sat 11am-9pm
📞 (442) 999-5542

[ORDER NOW button → link to hbrotherstogo.com]
```

**Example Posts:**

Week 1:
```
🔥 Brisket Mac & Cheese is BACK!

Our 12-hour smoked brisket over creamy three-cheese mac. 
This weekly special sells out fast - get yours today!

📍 212 E Grand Ave, Escondido
🕐 Tue-Sat 11am-9pm
```

Week 2:
```
🍟 Poutine Perfection Awaits

Crispy fries, fresh cheese curds, savory gravy. 
The comfort food you didn't know you needed.

Order for pickup or delivery!
```

---

## 4. Social Media Templates

### Instagram Bio
```
H Brothers 🍔
Comfort Food in Downtown Escondido
📍 212 E Grand Ave
🕐 Tue-Sat 11am-9pm
⭐ 4.8 on Yelp | 500+ reviews
👇 Order Online
```

### Post Templates

**Template 1: Food Feature**
```
[FOOD PHOTO]

That first bite feeling 🤤

Our [DISH NAME] is calling your name. [One sentence description].

📍 212 E Grand Ave, Escondido
🔗 Order link in bio!

#EscondidoEats #ComfortFood #HBrothers #DowntownEscondido #SanDiegoFood #BurgerLover #FoodieSD #EscondidoRestaurants
```

**Template 2: Behind the Scenes**
```
[KITCHEN/PREP PHOTO]

Behind every great meal... 👨‍🍳

Fresh ingredients, made with love, served with a smile. That's the H Brothers way.

Come see us today!
📍 212 E Grand Ave
🕐 Open until 9pm

#BehindTheScenes #FreshFood #MadeWithLove #EscondidoCA #SupportLocal
```

**Template 3: Customer Feature (with permission)**
```
[CUSTOMER PHOTO OR REVIEW SCREENSHOT]

This made our day! ❤️

Thank you @[username] for the love. We can't wait to see you again!

Want to be featured? Tag us in your photos!

#HBrothersFam #CustomerLove #EscondidoFood
```

**Template 4: Weekly Special**
```
[SPECIAL DISH PHOTO]

⭐ WEEKLY SPECIAL ⭐

[DISH NAME] - $[PRICE]

[Description]

Available while supplies last!

📍 212 E Grand Ave
📞 (442) 999-5542
🔗 Order: link in bio

#WeeklySpecial #LimitedTime #DontMissOut
```

**Template 5: Engagement Post**
```
[FOOD COMPARISON PHOTO]

HARD CHOICE TIME 🤔

Which one are you ordering?
🅰️ Classic Burger
🅱️ Chicken Sandwich

Drop your answer below! 👇

#ThisOrThat #FoodPoll #BurgerVsChicken
```

### Story Templates

**Daily Story Ideas:**
- Monday: "We're closed but dreaming of..." [throwback food photo]
- Tuesday: "We're OPEN! First order of the day..." 
- Wednesday: "Hump day calls for..." [comfort food shot]
- Thursday: "Almost the weekend! Treat yourself to..."
- Friday: "Weekend mode: ACTIVATED 🍔"
- Saturday: "Saturday vibes at H Brothers" [busy restaurant shot]
- Sunday: "Closed today, but we'll miss you!"

### Hashtag Sets

**Primary (use on every post):**
```
#HBrothers #EscondidoFood #DowntownEscondido #ComfortFood
```

**Secondary (rotate these):**
```
Set A: #SanDiegoEats #SDFood #SanDiegoFoodie #EatSD
Set B: #BurgerLover #FriesBeforeGuys #MacAndCheese #Poutine
Set C: #SupportLocal #SmallBusiness #FamilyOwned #LocalEats
Set D: #FoodPhotography #FoodPorn #Foodgasm #Yummy
```

**Location Tags:**
```
#Escondido #EscondidoCA #NorthCountySD #GrandAve #HistoricDowntownEscondido
```

---

## 5. Email Templates

### Welcome Email

**Subject:** Welcome to the H Brothers family! 🍔

```
Hey [NAME]!

Welcome to the H Brothers crew! We're so glad you're here.

As a thank you for joining, here's 10% OFF your next order:

[USE CODE: WELCOME10]

📍 Find us at: 212 E Grand Ave, Escondido
🕐 Open: Tue-Sat 11am-9pm
📞 Call: (442) 999-5542

What to expect from us:
• Weekly specials alerts
• Exclusive deals for email subscribers
• First look at new menu items
• Birthday surprise (make sure we have your birthday!)

Order now: [BUTTON: ORDER ONLINE]

See you soon!
The H Brothers Team

P.S. Follow us on Instagram @hbrothersescondido for daily food pics!
```

### Weekly Special Email

**Subject:** 🔥 This Week's Special: [DISH NAME] is HERE

```
[HERO IMAGE OF DISH]

THIS WEEK ONLY

[DISH NAME]
$[PRICE]

[2-3 sentences describing the dish and why it's special]

⚠️ Limited availability - when it's gone, it's gone!

[BUTTON: ORDER NOW]

---

📍 212 E Grand Ave, Escondido
🕐 Tue-Sat 11am-9pm
📞 (442) 999-5542
```

### Win-Back Email (sent after 30 days of no orders)

**Subject:** We miss you! Here's $5 off 💔

```
Hey [NAME],

It's been a while since we've seen you, and honestly? We miss your face.

To sweeten the deal, here's $5 OFF your next order:

[USE CODE: MISSYOU5]

[IMAGE OF POPULAR DISHES]

Remember these? They remember you. 😋

[BUTTON: ORDER NOW - I'M HUNGRY]

Expires in 7 days. One-time use.

See you soon,
H Brothers
```

### Birthday Email

**Subject:** 🎂 Happy Birthday! Your FREE gift is inside

```
HAPPY BIRTHDAY, [NAME]! 🎉

Birthdays call for comfort food, don't you think?

YOUR GIFT: FREE DESSERT with any entrée purchase!

Just show this email when you visit or mention it when you order.

Valid this week only!

[BUTTON: ORDER YOUR BIRTHDAY MEAL]

From all of us at H Brothers - hope your day is as amazing as you are!

🎂🍔❤️
```

---

## 6. Review Request Templates

### In-Person Script (for staff)

```
"Thanks so much for coming in today! If you enjoyed your meal, 
we'd really appreciate a quick Google or Yelp review - 
it helps other people find us. There's a QR code on your receipt 
that takes you right there. Thanks again!"
```

### Follow-Up Text/SMS (if you collect phone numbers)

```
Hi [NAME]! Thanks for dining with us at H Brothers today. 
If you have a moment, we'd love a quick review on Google: 
[LINK]. It means the world to us! 🍔 - H Brothers Team
```

### Email Request

**Subject:** How was your meal? (Quick favor 🙏)

```
Hey [NAME],

Thanks for ordering from H Brothers! We hope you loved your meal.

Quick favor: If you have 30 seconds, would you mind leaving us a review?

⭐ [BUTTON: REVIEW ON GOOGLE]
⭐ [BUTTON: REVIEW ON YELP]

Your feedback helps other hungry folks find us, and honestly, 
it makes our whole day when we read nice things. 😊

Already left a review? You're amazing - thank you!

See you next time,
H Brothers

P.S. Screenshot your review and send it to us on Instagram 
 @hbrothersescondido - we might feature you! 📸
```

### Receipt Footer

```
----------------------------------------
LOVE YOUR MEAL? TELL THE WORLD! 🌟

Scan to leave a review:
[QR CODE → Google Review Link]

Your feedback helps us grow!
Thank you for supporting local. ❤️
----------------------------------------
```

---

## 7. QR Code Strategy

### QR Codes to Create

1. **Google Review QR**
   - Link: Your Google Business review page
   - Location: Receipts, table tents, checkout counter
   
2. **Menu/Order QR**
   - Link: https://www.hbrotherstogo.com/
   - Location: Window decal, flyers, print ads
   
3. **Instagram QR**
   - Link: Instagram profile
   - Location: Table tents, to-go bags
   
4. **Email Signup QR**
   - Link: Email signup form with discount offer
   - Location: Receipts, checkout counter

### Free QR Code Generators
- qr-code-generator.com
- canva.com (includes design tools)
- flowcode.com (analytics tracking)

### Table Tent Template

```
+---------------------------+
|     LOVE YOUR MEAL?       |
|                           |
|  Leave us a review!       |
|                           |
|      [QR CODE]            |
|                           |
|  Scan with your camera    |
|                           |
|  ⭐⭐⭐⭐⭐                |
+---------------------------+
|                           |
|  FOLLOW US                |
|  @hbrothersescondido      |
|                           |
|      [QR CODE]            |
|                           |
+---------------------------+
```

---

## 8. Content Calendar (Month 1)

### Week 1

| Day | Platform | Content |
|-----|----------|---------|
| Tue | Instagram | Food photo: Classic Burger |
| Tue | Google Post | "We're open! Weekly special announcement" |
| Wed | Instagram Story | Behind the scenes: prep work |
| Thu | Instagram | Poutine close-up shot |
| Fri | Instagram | "Weekend plans?" engagement post |
| Sat | Instagram Story | Busy restaurant vibes |

### Week 2

| Day | Platform | Content |
|-----|----------|---------|
| Tue | Instagram | Customer review screenshot + thank you |
| Tue | Google Post | Photo of weekly special |
| Wed | Instagram Story | This or That poll (2 dishes) |
| Thu | Instagram | Mac & Cheese glamour shot |
| Fri | Facebook | Share Yelp review + "Thank you!" |
| Sat | Instagram | Team photo / staff spotlight |

### Week 3

| Day | Platform | Content |
|-----|----------|---------|
| Tue | Instagram | Loaded Fries photo |
| Tue | Google Post | "Did you know?" fun fact about a dish |
| Wed | Instagram Story | Repost customer stories |
| Thu | Instagram | "Tag someone who needs this" post |
| Fri | Instagram | Video: plating a dish |
| Sat | Instagram Story | Saturday rush timelapse |

### Week 4

| Day | Platform | Content |
|-----|----------|---------|
| Tue | Instagram | New angle on bestseller |
| Tue | Google Post | Next week's special teaser |
| Wed | Instagram | Quote graphic: customer testimonial |
| Thu | Instagram Story | "Ask us anything" Q&A |
| Fri | Instagram | Shrimp Po-Boy feature |
| Sat | Instagram | Month recap: "Your favorites this month" |

---

## Quick Reference: Important Links

| Resource | URL |
|----------|-----|
| Google Business Profile | business.google.com |
| Google Search Console | search.google.com/search-console |
| Yelp Business | biz.yelp.com |
| Facebook Business | business.facebook.com |
| Instagram | instagram.com |
| Canva (graphics) | canva.com |
| Mailchimp (email) | mailchimp.com |
| Schema Validator | validator.schema.org |
| PageSpeed Insights | pagespeed.web.dev |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly |

---

## Success Metrics to Track

### Monthly KPIs

- [ ] Google Business Profile views
- [ ] Google Maps direction requests
- [ ] Website clicks from Google
- [ ] Phone calls from Google
- [ ] New Google reviews (goal: 10+/month)
- [ ] Average star rating
- [ ] Instagram followers
- [ ] Instagram engagement rate
- [ ] Email list size
- [ ] Email open rate (goal: 20%+)
- [ ] Online order volume

### Tools for Tracking

- **Google Business**: Built-in insights
- **Website**: Google Analytics 4
- **Social**: Native insights on each platform
- **Email**: Mailchimp/provider analytics

---

Created for H Brothers Restaurant
Last Updated: December 2024
