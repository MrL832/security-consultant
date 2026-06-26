# Security Consultant: Startup Defence (Teacher README)

A single-page, text-based interactive game for GCSE Computer Science lessons. Students play a security consultant helping a startup choose sensible security measures while balancing:
- Security Score (higher is better)
- User Friction (lower is better)

The game focuses on when to deploy:
- Password systems
- CAPTCHAs
- Email confirmations
- Biometric measures
- Automatic updates (patching)

## What students learn (GCSE-friendly)
- Security decisions are trade-offs: stronger controls can add friction and make users quit
- Different risks need different controls (risk-based security)
- Authentication and access control basics (passwords, biometrics, account recovery)
- Defending against automated abuse (CAPTCHAs)
- Maintenance matters (patch management and updates)

## How to run it

### Option A: Local server (recommended)
1. Open a terminal in this folder.
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open a browser at:
   - http://localhost:8000/

### Option B: Open the file directly
You can open `index.html` directly, but a local server is more reliable across browsers.

## Deploy on GitHub Pages (recommended for school devices)
This repository is set up to deploy automatically to GitHub Pages when you push to `main`.

### One-time setup in GitHub
1. Go to your repo on GitHub.
2. Open Settings → Pages.
3. Under Build and deployment, set Source to GitHub Actions.

After that, every push to `main` publishes the site. The Pages URL usually looks like:
- https://<your-username>.github.io/<repo-name>/

## How to play (student instructions)
1. Read the scenario for each phase.
2. Choose an option (2–4 choices).
3. Read the outcome and see how your choice changed:
   - Security Score
   - User Friction
4. Press Continue to move to the next phase.
5. At the end, read the final report and “What You Learned”.

## Teacher Mode (recommended in lessons)
Use the Teacher Mode button at the top.
- When On, a “GCSE Focus” panel appears explaining the key concept for the current phase in simple terms.
- Use it to pause and ask quick questions before students choose.

## Suggested lesson flow (30–50 minutes)
- Starter (5 mins): Define “security” and “usability”. Ask why “more security” is not always best.
- Play (10–20 mins): Students play individually or in pairs.
- Review (10–15 mins): Compare outcomes and logs. Discuss which decisions were “Good fit” vs “Overkill” vs “Risky”.
- Plenary (5–10 mins): Students write a short recommendation: “What should this startup do next and why?”

## Discussion questions (good for cold-calling)
- Why might always-on CAPTCHA cause problems for real users?
- Why do passwords still matter even if biometrics exist?
- When is email confirmation worth the extra step?
- Why are updates part of cybersecurity, not just “IT maintenance”?
- What would change if the users were children, or if this was a banking app?

## Assessment ideas (quick and practical)
- Exit ticket: “Explain one security measure and one downside (friction/cost/accessibility).”
- Short answer: “Describe a risk-based approach to CAPTCHA.”
- Extension: “Suggest a sixth control (e.g., rate limiting, MFA) and predict its effect on both scores.”

## Differentiation
- Support: Keep Teacher Mode on; prompt students to justify choices using “risk” and “friction”.
- Challenge: Ask students to redesign one phase for a different context (e.g., hospital system vs game website).
- Pair work: One student is “Security”, one is “Product/UX”. They must agree before clicking.

## Accessibility and controls
- Buttons are keyboard-focusable (Tab/Shift+Tab) and selectable (Enter).
- The End Report overlay can be closed with Escape.
- The UI respects reduced motion settings where possible.

## Troubleshooting
- Page is blank or not updating: run via the local server method (Option A) and refresh.
- Port 8000 already in use: use a different port, e.g.:
  ```bash
  python3 -m http.server 8080
  ```
- Students can’t access localhost on school devices: host the folder on your school intranet, or copy the files to a simple static hosting solution approved by your IT policy.

## Files (for curious teachers or students)
- `index.html`: the UI layout and styling (Tailwind via CDN)
- `app.js`: the story, choices, scoring, and game flow
