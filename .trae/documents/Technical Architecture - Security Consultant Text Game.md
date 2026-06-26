## 1. Architecture Design
```mermaid
flowchart TB
  A["Browser (Desktop/Mobile)"] --> B["Single Page App (HTML + Tailwind CSS + Vanilla JS)"]
  B --> C["Game Engine (State + Rules)"]
  B --> D["UI Renderer (DOM updates)"]
  C --> E["Scenario Data (JSON in bundle)"]
  C --> F["Scoring System (Security + Friction)"]
  D --> G["Local Persistence (localStorage)"]
```

## 2. Technology Description
- Frontend: HTML + Tailwind CSS + JavaScript (no framework)
- Build tooling: Vite (static SPA build) + Tailwind CLI/plugin (compiled CSS)
- Data: local JSON scenario graph embedded in the app
- Persistence: localStorage for best score, last run summary, accessibility settings
- Backend: None

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | Single-page game experience (all screens rendered conditionally) |

## 4. API Definitions (if backend exists)
Not applicable (no backend).

## 5. Server Architecture Diagram (if backend exists)
Not applicable (no backend).

## 6. Data Model (if applicable)

### 6.1 Data Model Definition
```mermaid
erDiagram
  SCENARIO ||--o{ PHASE : contains
  PHASE ||--o{ DECISION : contains
  DECISION ||--o{ OPTION : offers
  OPTION }o--|| EFFECT : applies

  SCENARIO {
    string id
    string title
    string difficulty
  }
  PHASE {
    string id
    string title
    int order
  }
  DECISION {
    string id
    string prompt
    string concept
  }
  OPTION {
    string id
    string label
    string description
  }
  EFFECT {
    int securityDelta
    int frictionDelta
    string outcomeTag
    string narrativeResult
  }
```

### 6.2 Data Definition Language
Not applicable (no database). Scenario data lives as versioned JSON.

