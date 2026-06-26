## 1. Product Overview
A responsive single-page, text-based interactive game where a student plays a security consultant securing a startup through realistic security decisions.
- Purpose: teach authentication, anti-bot, account lifecycle, and patch management trade-offs through choices and consequences
- Value: students learn that “more security” can increase user friction and that the best solution depends on context and risk

## 2. Core Features

### 2.1 Feature Module
1. **Game screen (single page)**: narrative briefing, decision prompts, choice buttons, score HUD, event log
2. **Ending + replay**: win/lose summary, what the student did well, replay with same or randomized scenario

### 2.2 Page Details
| Page Name | Module Name | Feature description |
|-----------|-------------|---------------------|
| Game | Header / HUD | Displays “Security Score” and “User Friction” with clear visual indicators and thresholds |
| Game | Briefing panel | Sets the context (startup stage, threat level, user type, compliance needs) and presents story beats |
| Game | Choice panel | Shows 2–4 options per decision with short, plain-language explanations |
| Game | Event log | Records the last ~8 outcomes so students can review cause/effect |
| Game | End screen | Final outcome, breakdown of choices, replay button, optional “teacher mode” quick recap |

## 3. Core Process
The student reads a scenario (a startup building a product) and makes sequential security decisions. Each decision changes two running totals:
- Security Score: increases when protections match risk and context; decreases when missing or misapplied
- User Friction: increases when protections add steps or block users; decreases when solutions are streamlined

The player wins by finishing all phases with adequate Security Score while keeping User Friction under a threshold (or by reaching a “balanced” band). The player loses if Security Score drops too low (breach) or if User Friction becomes too high (users churn and the business fails).

```mermaid
flowchart TD
  A["Start: Join the startup as security consultant"] --> B["Phase 1: Account setup decisions"]
  B --> C["Phase 2: Login & anti-bot decisions"]
  C --> D["Phase 3: Growth & trust decisions"]
  D --> E["Phase 4: Maintenance decisions"]
  E --> F{"Evaluate outcome"}
  F -->| "Security Score too low" | G["Ending: Breach incident"]
  F -->| "User Friction too high" | H["Ending: User churn"]
  F -->| "Balanced" | I["Ending: Secured startup"]
  G --> J["Replay"]
  H --> J
  I --> J
```

## 4. User Interface Design

### 4.1 Design Style
- Theme: “security dossier meets terminal UI” (dark base, high-contrast accent, subtle grid/noise texture)
- Primary colors: near-black background; mint/acid green accent; warm amber for warnings; red for critical outcomes
- Typography: one distinctive display font for headings and a readable mono/sans for body; consistent hierarchy for GCSE learners
- Layout: desktop-first centered panel with a sticky HUD; mobile stacks vertically with large tap targets
- Icon style: minimal inline glyphs (e.g., shields, locks) used sparingly for signposting

### 4.2 Page Design Overview
| Page Name | Module Name | UI Elements |
|-----------|-------------|-------------|
| Game | HUD | Two meters/badges, animated delta chips (+3 Security, +2 Friction), tooltips for definitions |
| Game | Briefing panel | Title, short paragraph, “context chips” (Stage, Users, Threat Level) |
| Game | Choice panel | 2–4 large buttons, each with a label + 1–2 line rationale hint |
| Game | Event log | Compact list with outcome tags (“Good fit”, “Overkill”, “Risky”), scroll on overflow |
| Game | End screen | Large status headline, score summary, “What you learned” bullet list, replay CTA |

### 4.3 Responsiveness
- Desktop-first: two-column feel (briefing + choices) within a single centered container
- Mobile: HUD becomes top bar; panels become stacked; buttons become full-width; log collapses to a toggle
- Accessibility: semantic buttons, focus rings, keyboard navigation, reduced-motion support, color contrast checked

