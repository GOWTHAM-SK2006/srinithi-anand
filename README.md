# Srinithi Anand — Official Artist Website Redesign

A luxury, cinematic, editorial-style official website redesign and rebuild for award-winning Indian singer, performer, and artist **Srinithi Anand**. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Project Highlights

- **Single-Page Cinematic Architecture**: Seamless section-based navigation with smooth scrolling and dynamic active section spy.
- **100% Content & Asset Preservation**: Every original photograph (130+ assets), celebrity encounter, award trophy, reality show appearance, television broadcast, acting credit, album collaboration, tour diary, video, and Instagram reel has been meticulously preserved from the reference website.
- **Editorial Luxury Design System**:
  - **Headings**: Cormorant Garamond (Editorial Serif)
  - **Body & Navigation**: Inter (Modern Sans-Serif)
  - **Color Palette**: Deep Obsidian `#080808`, Rich Charcoal `#111111`, Card Surface `#151515`, Champagne Gold `#D0AD70`, Muted Gold `#A9874F`, White `#FFFFFF`, Secondary Text `#B4B0A8`.
- **Zero Booking Buttons**: Strictly adheres to the requirement with pure editorial exploration CTAs (`EXPLORE MY JOURNEY`, `VIEW MY PORTFOLIO`) and direct communication links (`SEND MESSAGE`).
- **Interactive Lightbox Experience**: Fullscreen modal with previous/next controls, keyboard arrows (`ArrowLeft`, `ArrowRight`, `Escape`), and image counter across Portfolio, Celebrities, Awards, and Tour Diaries.
- **Vercel Ready**: Frontend-only architecture, unoptimized image mode enabled for static and serverless deployments, zero backend dependencies.

---

## 🏛️ Sections Overview

1. **Sticky Navigation Bar**:
   - Left: `SRINITHI ANAND` with music insignia and `"Official Artist"` badge.
   - Right: `HOME`, `ABOUT`, `PORTFOLIO`, `AWARDS`, `TELEVISION`, `ACTING & ALBUMS`, `TOUR DIARIES`, `CONTACT`.
   - Scroll detection with backdrop blur, active section indicator, and responsive mobile menu drawer.
2. **Hero Section**:
   - Fullscreen cinematic hero with original artist photograph (`hero1.png`), radial golden lighting, tagline *"A Voice That Creates Unforgettable Moments"*, and social connect bar.
3. **About Srinithi Anand**:
   - Preserves complete original biography detailing her journey starting at age 7, classical Carnatic grounding, and creative traits (makeup artistry & culinary passion).
4. **Musical Journey**:
   - Animated count-up statistics: **150+ Shows**, **60+ Lakshman Sruthi Orchestra performances**, **60+ UK Murali Orchestra performances**, **30+ Geetharanjani Orchestra shows**.
   - 4-column versatility matrix: Carnatic, Devotional, Film Playback, and Fusion Music.
5. **Stage Shared with Legends**:
   - 4 sophisticated portrait cards (4:5 ratio) with original photos:
     - **SP Balasubrahmanyam**
     - **Unni Menon**
     - **Mano**
     - **SPB Charan**
6. **Complete Portfolio**:
   - Interactive category filtering: *Live Performances*, *Stage Performances*, *Special Events*, *Musical Moments*, *Videos & Reels*.
   - 46 curated original photographs with hover zoom and fullscreen lightbox.
   - Featured YouTube concert video embed + 7 original live orchestral video clips.
   - 6 high-engagement Instagram reels preview cards with direct links.
7. **With Celebrities**:
   - 16-photograph responsive grid capturing memorable backstage moments and honors alongside film and cultural icons.
8. **Awards & Recognition**:
   - Featured award spotlight for the **Kalai Chudar Award 2025**.
   - All 24 awards preserved with interactive category filtering (*Prestigious & State*, *Inter-Collegiate*, *Titles & Honors*), including Dr. Ambedkar Award, Tamil Nadu Music Fest Winner, Radio City Super Singer S16 Runner-up, G Tec Winner 2025, Kamban Kazhagam 2025, Vagai 25, Formula 25, and collegiate champions (WCC, XIME, DG Vaishnav, Stanley, SRM, Vel Tech, Ethiraj, Loyola, MCC, etc.).
9. **Television Performances**:
   - Timeline cards covering **Mega TV**, **Sankara TV**, **Colors Tamil** (*Ninaithale Inikkum* tribute to MSV), and **Kalaignar TV** (*Kalaignar Ninaivanjali* tribute to Dr. Kalaignar Karunanidhi) alongside original broadcast photography.
10. **Reality Shows**:
    - Complete competitive reality show archive:
      - **Deepam TV**: *Star Singer Title Winner (2016)*
      - **Sun TV**: *Sun Singer (Top 20 in Season 6, Top 12 in Season 7)*
      - **DD Podhigai**: *DD Kuyil Thoppu (Finalist Season 3)*
      - **Zee Tamil**: *Sa Re Ga Ma Pa (Top 25 Contestant)*
      - **Jaya TV**: *Jaya Star Singer (Top 8 Finalist Season 2)*
11. **Acting & Albums (Beyond Music)**:
    - **Short Films (Lead Roles)**: *Arinee*, *Oru Pozhuthu*, *Breakfast*.
    - **Studio Albums**: Featured lead vocalist across 7 studio albums, including a devotional collaboration with renowned composer **John Peter** (*Sowcarpettai*, *Saaya* fame).
12. **Tour Diaries (Music Takes Me Places)**:
    - Interactive travel logs covering **Kashmir Diaries** (7 photos), **Malaysia Diaries** (7 photos), **Sri Lanka Diaries** (4 photos), and **Vietnam Diaries** (7 photos).
13. **Contact Section (Let's Connect)**:
    - Direct phone (`+91 95000 40780`), official email (`anandsindu@gmail.com`), WhatsApp quick chat, and an interactive message inquiry form.
14. **Footer**:
    - Obsidian black footer with champagne gold accents, navigation sitemap, and copyright notice `© 2026 Srinithi Anand. All Rights Reserved.`.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts via `next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Cormorant Garamond & Inter)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push this project to your GitHub, GitLab, or Bitbucket repository.
2. Import the project in Vercel.
3. Keep the default build command (`npm run build`) and output directory (`.next`).
4. Deploy!

