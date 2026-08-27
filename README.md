# Techlearns Academy | Corporate Experience Learning Ecosystem

Welcome to the **Techlearns Academy** web platform. Techlearns is a next-generation corporate experience learning ecosystem co-designed with engineering leaders and enterprise partners. We replace traditional academic certificate-collecting with hands-on corporate workflows, live projects, competitions, and a cryptographically verified **Skill Passport**.


---

## 🎯 Core Philosophy: The CEL Flywheel

Techlearns runs on an **Eight-Stage Corporate Experience Learning (CEL)** flywheel that matches the structural shifting of engineering skills:

1. **Assess**: Diagnostic assessment, career intent mapping, and baseline capability vectors.
2. **Learn**: Live cohort instruction and concise concept modules.
3. **Practise**: Daily SQL, coding, cloud, and security drills on the adaptive **SkillOS** practice engine.
4. **Build**: Continuous production-grade builds and Capstone jury defenses.
5. **Operate**: Real team sprint planning, Jira/sprint tickets, peer Pull Request reviews, daily stand-ups, and demo days.
6. **Experience**: Structured expert talks, industry workplace visits, and internships.
7. **Compete**: Season-based regional and national hackathons, datathons, and CTFs in the **Future Skills League (FSL)**.
8. **Validate & Launch**: Skill Passport cryptographic auditing and direct corporate recruiter showcases.

---

## 🛠️ Technology Stack & Styling

- **Core**: [Next.js 15+](https://nextjs.org/) (App Router architecture).
- **Runtime**: Node.js.
- **Styling**: Vanilla CSS with modern Glassmorphism parameters and custom variables. **No utility frameworks (like Tailwind) are used** to ensure maximum flex and control over execution weights.
- **Fonts**: Montserrat (Headings), Poppins (Body Text), and Inter (Metadata/Labels) loaded via `next/font/google`.

---

## 📱 Responsive Grid System

We implement a clean, responsive layout system using lightweight CSS helper classes defined in [globals.css](file:///Users/ronitjaiprakash/Desktop/untitled%20folder/src/app/globals.css) instead of hardcoded inline style grid structures:

- **`.grid-split`**: Split-column layout (1.1fr/0.9fr) on desktop; collapses to 1 column on mobile and tablet.
- **`.grid-2col`**: Two-column layout (1fr/1fr) on desktop; collapses to 1 column on mobile and tablet.
- **`.grid-3col`**: Three-column layout (1fr/1fr/1fr) on desktop; collapses to 1 column on mobile and tablet.
- **`.timeline-row` / `.timeline-circle` / `.timeline-content`**: Standardized components for rendering responsive process pipelines.
- **`.mobile-drawer` / `.mobile-drawer.open`**: Premium animated drawer overlay for mobile and landscape viewports.

---

## 🚀 Getting Started

### Installation
Install the project dependencies:
```bash
npm install
```

### Run the Development Server
Launch the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production
Verify compile integrity and build the optimized production assets:
```bash
npm run build
```

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, logos, diagrams)
├── src/
│   ├── app/                # Next.js Pages & Routes
│   │   ├── about/          # About Techlearns manifesto and vision
│   │   ├── blog/           # Technical Blog & Skill Reports
│   │   ├── careers/        # Career diagnostic tools and job openings
│   │   ├── cel/            # Detailed methodology walkthrough
│   │   ├── contact/        # Advisor diagnostic booking form
│   │   ├── fsl/            # Future Skills League formats & guidelines
│   │   ├── partners/       # Recruiter & Institutional dashboards
│   │   ├── passport/       # Cryptographic Skill Passport details
│   │   ├── programs/       # Tech domain curricula listings
│   │   ├── skillos/        # Telemetry practice dashboard simulator
│   │   ├── globals.css     # Global styles, variables, & responsive grid classes
│   │   ├── layout.tsx      # Core page structure and SEO metadata
│   │   └── page.tsx        # App entry point (renders HomeClient)
│   └── components/         # Shared UI components (Header, Footer, Form elements)
└── next.config.ts          # Next.js configuration
```
