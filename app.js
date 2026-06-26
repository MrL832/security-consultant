const scenario = {
  startupName: "LumenLeaf",
  tagline: "a small team building a booking platform",
  phases: [
    {
      id: "p1",
      title: "Phase 1 — MVP Launch",
      sceneTitle: "The first sign-up form goes live",
      sceneBody:
        "You’ve got 2 developers, a deadline, and a brand-new user database. The CEO wants sign-up to be quick, but you’ve already heard rumours of credential stuffing on similar apps.",
      context: ["Stage: MVP", "Users: Early adopters", "Threat: Medium"],
      decision: {
        prompt: "What password system should you deploy right now?",
        concept: "Password systems",
        teacherNote:
          "For GCSE: passwords are an authentication factor (“something you know”). Storing them safely matters: use hashing + salt, never plain text. Password rules should improve security without becoming impossible for users.",
        options: [
          {
            label: "Basic passwords, no rules",
            description: "Let users choose anything. Store a simple hash, but keep sign-up fast.",
            effects: { securityDelta: -14, frictionDelta: -6, tag: "Risky" },
            feedback:
              "Fast sign-up, but weak passwords make brute-force and credential stuffing far more likely. Security controls are missing when risk is already real.",
          },
          {
            label: "Strong password policy + hashing",
            description: "12+ chars, common-password blocklist, secure hashing, and password reset flow.",
            effects: { securityDelta: +14, frictionDelta: +6, tag: "Good fit" },
            feedback:
              "A solid baseline. You’ve added a small amount of friction, but you’ve greatly reduced the chance of easy account takeover.",
          },
          {
            label: "Biometrics only",
            description: "Require FaceID/Fingerprint for everyone. No password option at all.",
            effects: { securityDelta: -6, frictionDelta: +18, tag: "Overkill" },
            feedback:
              "This excludes some users, breaks cross-device access, and still needs a fallback. Biometrics can help, but forcing it early increases friction without solving everything.",
          },
        ],
      },
    },
    {
      id: "p2",
      title: "Phase 2 — First Bot Wave",
      sceneTitle: "A botnet targets login",
      sceneBody:
        "A weekend spike hits your login page. Many attempts look automated. The team wants a quick fix, but you’re worried about annoying real users who just forgot their password.",
      context: ["Stage: Public beta", "Users: Mixed", "Threat: High"],
      decision: {
        prompt: "When should you use CAPTCHA on login?",
        concept: "CAPTCHAs",
        teacherNote:
          "CAPTCHAs are a control against automated abuse. A good strategy is risk-based: trigger extra checks only when behaviour looks suspicious (e.g., many failed attempts, unusual IP, impossible travel).",
        options: [
          {
            label: "Always show CAPTCHA",
            description: "Every login attempt, even for trusted users.",
            effects: { securityDelta: +8, frictionDelta: +18, tag: "Overkill" },
            feedback:
              "Security improves a bit, but lots of real users will fail or get slowed down. Overusing CAPTCHA can cause churn and accessibility issues.",
          },
          {
            label: "CAPTCHA only after suspicious signals",
            description: "Trigger it after repeated failures, risky IPs, or new devices.",
            effects: { securityDelta: +14, frictionDelta: +6, tag: "Good fit" },
            feedback:
              "You block bots when it matters most while keeping the normal user journey smooth. This is a strong trade-off for high-risk moments.",
          },
          {
            label: "No CAPTCHA",
            description: "Rely on users picking good passwords.",
            effects: { securityDelta: -16, frictionDelta: -2, tag: "Risky" },
            feedback:
              "Bots can keep trying stolen passwords at scale. Without layered protection, even strong passwords won’t stop credential stuffing.",
          },
        ],
      },
    },
    {
      id: "p3",
      title: "Phase 3 — Growth & Trust",
      sceneTitle: "Marketing drives a signup surge",
      sceneBody:
        "Your ads work. Sign-ups triple overnight. Support reports lots of fake accounts creating noise, and one investor asks how you prevent account recovery abuse.",
      context: ["Stage: Growth", "Users: Wider public", "Threat: Medium"],
      decision: {
        prompt: "How should you use email confirmation?",
        concept: "Email confirmations",
        teacherNote:
          "Email confirmation can reduce fake accounts and helps prove ownership for password reset. But every extra step adds friction, so choose where it protects the most important actions.",
        options: [
          {
            label: "Confirm before sensitive actions",
            description: "Allow browsing, but confirm email before bookings, payments, or password changes.",
            effects: { securityDelta: +14, frictionDelta: +8, tag: "Good fit" },
            feedback:
              "You protect the high-risk moments without blocking curious new users. This is often a practical balance for startups.",
          },
          {
            label: "Confirm every account immediately",
            description: "No access until the user clicks the email link.",
            effects: { securityDelta: +10, frictionDelta: +14, tag: "Maybe" },
            feedback:
              "Better security and fewer fake accounts, but some legitimate users will drop off before confirming. This may be worth it if abuse is costly.",
          },
          {
            label: "Skip confirmation",
            description: "Don’t add an email step to keep sign-up fast.",
            effects: { securityDelta: -12, frictionDelta: -6, tag: "Risky" },
            feedback:
              "Fast growth, but fake accounts increase support workload and make fraud and recovery abuse easier. You’re trading long-term cost for short-term speed.",
          },
        ],
      },
    },
    {
      id: "p4",
      title: "Phase 4 — Premium Customers",
      sceneTitle: "A hotel chain signs up",
      sceneBody:
        "A premium customer wants better security for staff accounts. They also want a quick login experience on mobile for busy receptionists.",
      context: ["Stage: B2B deal", "Users: Staff accounts", "Threat: Medium–High"],
      decision: {
        prompt: "What biometric approach should you deploy?",
        concept: "Biometric measures",
        teacherNote:
          "Biometrics are usually used as a convenience layer (e.g., unlocking a secure session) rather than replacing all authentication. You still need secure enrolment, device security, and a fallback method.",
        options: [
          {
            label: "Offer biometrics as an optional fast login",
            description: "Let users enable FaceID/Fingerprint after a normal login, with a backup method.",
            effects: { securityDelta: +10, frictionDelta: +2, tag: "Good fit" },
            feedback:
              "You improve usability and add a sensible layer, without excluding users. The backup route matters for lost phones and accessibility.",
          },
          {
            label: "Force biometrics for all staff",
            description: "No biometric? No access.",
            effects: { securityDelta: +6, frictionDelta: +16, tag: "Overkill" },
            feedback:
              "This may annoy customers, fails on unsupported devices, and can become a support nightmare. High friction can be a security risk if users look for workarounds.",
          },
          {
            label: "Ignore biometrics and keep passwords only",
            description: "Keep things simple and avoid extra complexity.",
            effects: { securityDelta: -6, frictionDelta: -2, tag: "Maybe" },
            feedback:
              "Not wrong for every system, but premium staff accounts are higher value. You may miss an opportunity to add a secure, user-friendly option.",
          },
        ],
      },
    },
    {
      id: "p5",
      title: "Phase 5 — Maintenance & Patch Management",
      sceneTitle: "A critical vulnerability is announced",
      sceneBody:
        "A popular library you use gets a serious security advisory. If you patch too slowly, you might be breached. If you patch too fast without checks, you might ship a breaking change and cause outages.",
      context: ["Stage: Scaling", "Users: Paying", "Threat: High"],
      decision: {
        prompt: "How should you handle automatic updates?",
        concept: "Automatic updates",
        teacherNote:
          "Updates reduce known vulnerabilities. The trick is process: test updates, deploy safely, and roll back if needed. “Auto-update everything instantly” can cause downtime, which is a user friction problem.",
        options: [
          {
            label: "Staged automatic updates",
            description: "Test, deploy gradually, monitor, and roll back if needed.",
            effects: { securityDelta: +16, frictionDelta: +6, tag: "Good fit" },
            feedback:
              "This is the safest overall approach. You reduce the window of exposure while managing the risk of outages.",
          },
          {
            label: "Disable automatic updates",
            description: "Only patch manually when the team has time.",
            effects: { securityDelta: -20, frictionDelta: -2, tag: "Risky" },
            feedback:
              "It feels calm, but you increase the time you’re vulnerable. Attackers often exploit known issues quickly after disclosure.",
          },
          {
            label: "Auto-update immediately with no testing",
            description: "Patch everything the moment a new version appears.",
            effects: { securityDelta: +10, frictionDelta: +16, tag: "Overkill" },
            feedback:
              "You reduce vulnerability time, but breaking changes can create outages and emergency fixes. That operational chaos is a form of friction.",
          },
        ],
      },
    },
  ],
}

const scoreLimits = { min: 0, max: 100 }

const state = {
  phaseIndex: 0,
  security: 55,
  friction: 22,
  log: [],
  mode: "decision",
  teacherMode: false,
  lastFeedback: null,
  logVisible: true,
}

const els = {
  teacherModeBtn: document.getElementById("teacherModeBtn"),
  resetBtn: document.getElementById("resetBtn"),
  phaseLabel: document.getElementById("phaseLabel"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneBody: document.getElementById("sceneBody"),
  contextChips: document.getElementById("contextChips"),
  promptText: document.getElementById("promptText"),
  conceptTag: document.getElementById("conceptTag"),
  teacherPanel: document.getElementById("teacherPanel"),
  teacherText: document.getElementById("teacherText"),
  optionsWrap: document.getElementById("optionsWrap"),
  feedbackWrap: document.getElementById("feedbackWrap"),
  feedbackTag: document.getElementById("feedbackTag"),
  feedbackText: document.getElementById("feedbackText"),
  deltaSecurity: document.getElementById("deltaSecurity"),
  deltaFriction: document.getElementById("deltaFriction"),
  continueBtn: document.getElementById("continueBtn"),
  securityValue: document.getElementById("securityValue"),
  securityBar: document.getElementById("securityBar"),
  securityHint: document.getElementById("securityHint"),
  frictionValue: document.getElementById("frictionValue"),
  frictionBar: document.getElementById("frictionBar"),
  frictionHint: document.getElementById("frictionHint"),
  logWrap: document.getElementById("logWrap"),
  logList: document.getElementById("logList"),
  toggleLogBtn: document.getElementById("toggleLogBtn"),
  endOverlay: document.getElementById("endOverlay"),
  endTitle: document.getElementById("endTitle"),
  endBody: document.getElementById("endBody"),
  endSecurity: document.getElementById("endSecurity"),
  endFriction: document.getElementById("endFriction"),
  endLearnList: document.getElementById("endLearnList"),
  replayBtn: document.getElementById("replayBtn"),
  closeEndBtn: document.getElementById("closeEndBtn"),
  ariaLive: document.getElementById("ariaLive"),
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

function formatDelta(n) {
  if (n === 0) return "±0"
  return n > 0 ? `+${n}` : `${n}`
}

function scoreLabelSecurity(score) {
  if (score >= 80) return "Strong baseline. Low breach risk."
  if (score >= 60) return "Decent. Still some attack paths."
  if (score >= 40) return "Weak. A breach is plausible."
  return "Critical. You are close to an incident."
}

function scoreLabelFriction(score) {
  if (score <= 30) return "Smooth for users. Low drop-off."
  if (score <= 55) return "Some friction. Acceptable if justified."
  if (score <= 75) return "High friction. Users may churn."
  return "Critical. People will abandon the product."
}

function tagStyle(tag) {
  if (tag === "Good fit") return "text-acid-400"
  if (tag === "Maybe") return "text-ember-400"
  return "text-alert-500"
}

function chipStyle(tag) {
  if (tag === "Good fit") return "border-acid-500/25 bg-acid-500/10 text-acid-400"
  if (tag === "Maybe") return "border-ember-500/25 bg-ember-500/10 text-ember-400"
  return "border-alert-500/25 bg-alert-500/10 text-alert-500"
}

function setLive(text) {
  els.ariaLive.textContent = ""
  window.setTimeout(() => {
    els.ariaLive.textContent = text
  }, 40)
}

function currentPhase() {
  return scenario.phases[state.phaseIndex]
}

function renderChips(chips) {
  els.contextChips.innerHTML = ""
  chips.forEach((text) => {
    const el = document.createElement("span")
    el.className = "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
    el.textContent = text
    els.contextChips.appendChild(el)
  })
}

function renderScores() {
  els.securityValue.textContent = state.security
  els.frictionValue.textContent = state.friction
  els.securityBar.style.width = `${state.security}%`
  els.frictionBar.style.width = `${state.friction}%`

  const securityColor = state.security >= 70 ? "bg-acid-500" : state.security >= 50 ? "bg-ember-500" : "bg-alert-500"
  const frictionColor = state.friction <= 55 ? "bg-ember-500" : state.friction <= 75 ? "bg-ember-400" : "bg-alert-500"

  els.securityBar.className = `h-2 rounded-full transition-[width] duration-500 ${securityColor}`
  els.frictionBar.className = `h-2 rounded-full transition-[width] duration-500 ${frictionColor}`

  els.securityHint.textContent = scoreLabelSecurity(state.security)
  els.frictionHint.textContent = scoreLabelFriction(state.friction)
}

function renderLog() {
  els.logList.innerHTML = ""
  state.log.slice(0, 8).forEach((entry) => {
    const li = document.createElement("li")
    li.className = "px-4 py-3"

    const top = document.createElement("div")
    top.className = "flex items-start justify-between gap-3"

    const left = document.createElement("div")
    left.className = "min-w-0"

    const title = document.createElement("p")
    title.className = "text-sm text-zinc-100"
    title.textContent = entry.title

    const sub = document.createElement("p")
    sub.className = "mt-1 text-xs text-zinc-400"
    sub.textContent = entry.choice

    left.appendChild(title)
    left.appendChild(sub)

    const right = document.createElement("div")
    right.className = "shrink-0 text-right"

    const tag = document.createElement("span")
    tag.className = `inline-flex items-center rounded-full border px-2 py-1 text-[11px] uppercase tracking-[0.18em] ${chipStyle(entry.tag)}`
    tag.textContent = entry.tag

    const delta = document.createElement("p")
    delta.className = "mt-2 text-xs text-zinc-300"
    delta.textContent = `Sec ${formatDelta(entry.securityDelta)} · Fric ${formatDelta(entry.frictionDelta)}`

    right.appendChild(tag)
    right.appendChild(delta)

    top.appendChild(left)
    top.appendChild(right)

    li.appendChild(top)
    els.logList.appendChild(li)
  })
}

function renderOptions() {
  els.optionsWrap.innerHTML = ""
  const phase = currentPhase()

  phase.decision.options.forEach((option, idx) => {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className =
      "group rounded-xl border border-white/10 bg-ink-900/30 px-4 py-4 text-left transition hover:border-white/20 hover:bg-ink-900/50 focus:outline-none focus:ring-2 focus:ring-acid-500/60"
    btn.setAttribute("data-option-index", String(idx))

    const label = document.createElement("p")
    label.className = "font-semibold text-zinc-100 group-hover:text-white"
    label.textContent = option.label

    const desc = document.createElement("p")
    desc.className = "mt-2 text-sm leading-6 text-zinc-300"
    desc.textContent = option.description

    btn.appendChild(label)
    btn.appendChild(desc)

    btn.addEventListener("click", () => chooseOption(idx))
    els.optionsWrap.appendChild(btn)
  })
}

function renderTeacherMode() {
  els.teacherModeBtn.textContent = `Teacher Mode: ${state.teacherMode ? "On" : "Off"}`
  els.teacherPanel.classList.toggle("hidden", !state.teacherMode)
}

function showFeedback(payload) {
  state.lastFeedback = payload
  els.feedbackWrap.classList.remove("hidden")
  els.feedbackTag.className = `text-[11px] uppercase tracking-[0.22em] ${tagStyle(payload.tag)}`
  els.feedbackTag.textContent = payload.tag
  els.feedbackText.textContent = payload.feedback
  els.deltaSecurity.textContent = `Security ${formatDelta(payload.securityDelta)}`
  els.deltaFriction.textContent = `Friction ${formatDelta(payload.frictionDelta)}`
}

function hideFeedback() {
  state.lastFeedback = null
  els.feedbackWrap.classList.add("hidden")
}

function chooseOption(optionIndex) {
  if (state.mode !== "decision") return

  const phase = currentPhase()
  const option = phase.decision.options[optionIndex]

  state.mode = "feedback"
  const securityDelta = option.effects.securityDelta
  const frictionDelta = option.effects.frictionDelta

  state.security = clamp(state.security + securityDelta, scoreLimits.min, scoreLimits.max)
  state.friction = clamp(state.friction + frictionDelta, scoreLimits.min, scoreLimits.max)

  state.log.unshift({
    title: phase.sceneTitle,
    choice: option.label,
    tag: option.effects.tag,
    securityDelta,
    frictionDelta,
  })

  els.teacherText.textContent = phase.decision.teacherNote
  showFeedback({
    tag: option.effects.tag,
    feedback: option.feedback,
    securityDelta,
    frictionDelta,
  })

  setLive(`${option.effects.tag}. Security ${formatDelta(securityDelta)}. Friction ${formatDelta(frictionDelta)}.`)
  renderScores()
  renderLog()

  Array.from(els.optionsWrap.querySelectorAll("button")).forEach((btn) => {
    btn.disabled = true
    btn.classList.add("opacity-60")
  })
  els.continueBtn.focus()
}

function verdictFromScores(security, friction) {
  if (security < 45) return "breach"
  if (friction > 82) return "churn"
  if (security >= 70 && friction <= 60) return "secured"
  return "mixed"
}

function learningsForVerdict(verdict) {
  if (verdict === "secured") {
    return [
      "Security is layered: passwords + smart CAPTCHA + verification + patching work together.",
      "Best practice often means “risk-based”, not “maximum friction everywhere”.",
      "Operational security (updates and rollout) is part of cybersecurity.",
    ]
  }
  if (verdict === "breach") {
    return [
      "A single weak layer can undo other defences (attackers look for the easiest route).",
      "Deploy baseline controls early: safe password storage and abuse protection matter from day one.",
      "Security choices should match the threat level and asset value.",
    ]
  }
  if (verdict === "churn") {
    return [
      "If security is painful, users leave (or create unsafe workarounds).",
      "Use stronger checks at risky moments, not on every step.",
      "Usability is part of security: friction changes user behaviour.",
    ]
  }
  return [
    "There’s rarely a perfect answer: security decisions are trade-offs.",
    "Target controls to high-risk moments to keep friction reasonable.",
    "Review both scores: strong security with acceptable friction is the goal.",
  ]
}

function endGame() {
  const verdict = verdictFromScores(state.security, state.friction)

  const headline =
    verdict === "secured"
      ? "Startup Secured"
      : verdict === "breach"
        ? "Incident: Breach"
        : verdict === "churn"
          ? "Business Impact: User Churn"
          : "Mixed Outcome"

  const body =
    verdict === "secured"
      ? `You protected ${scenario.startupName} without scaring off the users. You deployed controls at the right moments and kept the product usable.`
      : verdict === "breach"
        ? `A weakness got exploited. Attackers don’t need every door open — just one. Review your log and look for missed baseline protections.`
        : verdict === "churn"
          ? `Users struggled with too many hurdles. Security that blocks real customers harms the business and can backfire. Review where you added friction.`
          : `You made some strong choices, but the balance wasn’t consistent. Review the log and aim for high Security Score with manageable friction.`

  els.endTitle.textContent = headline
  els.endBody.textContent = body
  els.endSecurity.textContent = String(state.security)
  els.endFriction.textContent = String(state.friction)

  els.endLearnList.innerHTML = ""
  learningsForVerdict(verdict).forEach((line) => {
    const li = document.createElement("li")
    li.textContent = line
    els.endLearnList.appendChild(li)
  })

  els.endOverlay.classList.remove("hidden")
  els.endOverlay.classList.add("flex")

  try {
    const key = "security-consultant:lastRun"
    const record = {
      at: new Date().toISOString(),
      security: state.security,
      friction: state.friction,
      verdict,
    }
    window.localStorage.setItem(key, JSON.stringify(record))
  } catch (_e) {}

  setLive(`Game ended: ${headline}.`)
  els.replayBtn.focus()
}

function continueAfterFeedback() {
  if (state.mode !== "feedback") return

  hideFeedback()
  state.mode = "decision"
  state.phaseIndex += 1

  if (state.phaseIndex >= scenario.phases.length) {
    endGame()
    return
  }

  render()
  setLive("Next decision loaded.")
}

function resetGame() {
  state.phaseIndex = 0
  state.security = 55
  state.friction = 22
  state.log = []
  state.mode = "decision"
  state.lastFeedback = null
  hideFeedback()
  els.endOverlay.classList.add("hidden")
  els.endOverlay.classList.remove("flex")
  render()
  setLive("Game restarted.")
}

function renderPhase() {
  const phase = currentPhase()

  els.phaseLabel.textContent = `${phase.title} · ${scenario.startupName} (${scenario.tagline})`
  els.sceneTitle.textContent = phase.sceneTitle
  els.sceneBody.textContent = phase.sceneBody
  renderChips(phase.context)
  els.promptText.textContent = phase.decision.prompt
  els.conceptTag.textContent = `Focus: ${phase.decision.concept}`
  els.teacherText.textContent = phase.decision.teacherNote
}

function renderLogVisibility() {
  els.logWrap.classList.toggle("hidden", !state.logVisible)
  els.toggleLogBtn.textContent = state.logVisible ? "Hide" : "Show"
}

function render() {
  renderScores()
  renderTeacherMode()
  renderPhase()
  renderOptions()
  renderLog()
  renderLogVisibility()
  Array.from(els.optionsWrap.querySelectorAll("button")).forEach((btn) => {
    btn.disabled = false
    btn.classList.remove("opacity-60")
  })
  els.optionsWrap.querySelector("button")?.focus()
}

els.teacherModeBtn.addEventListener("click", () => {
  state.teacherMode = !state.teacherMode
  renderTeacherMode()
  setLive(`Teacher mode ${state.teacherMode ? "on" : "off"}.`)
})

els.resetBtn.addEventListener("click", () => resetGame())
els.continueBtn.addEventListener("click", () => continueAfterFeedback())

els.toggleLogBtn.addEventListener("click", () => {
  state.logVisible = !state.logVisible
  renderLogVisibility()
})

els.replayBtn.addEventListener("click", () => resetGame())
els.closeEndBtn.addEventListener("click", () => {
  els.endOverlay.classList.add("hidden")
  els.endOverlay.classList.remove("flex")
  setLive("End report closed.")
})

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!els.endOverlay.classList.contains("hidden")) {
      els.endOverlay.classList.add("hidden")
      els.endOverlay.classList.remove("flex")
      setLive("End report closed.")
    }
  }
})

render()

