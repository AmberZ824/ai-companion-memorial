# AI Virtual Companion & Digital Memorial

[中文说明](README.zh-CN.md)

An interaction design and front-end prototype for creating a respectful virtual companion profile from a person's or pet's photo, traits, communication style, and real memories.

> **Prototype status:** The current conversation experience uses transparent, local response rules. It does not connect to a generative AI model and does not claim to recreate a real personality or consciousness.

## Why this project exists

Digital memorial products can preserve meaningful details, but they can also create privacy, consent, impersonation, and emotional-dependency risks. This project explores a safer product direction: memory-supported companionship without pretending that an AI character is the real person or animal.

## Features

- Create profiles for a person or companion animal
- Upload a local JPG, PNG, or WebP image with validation
- Record relationship, personality traits, communication style, and one real memory
- See a live profile preview while editing
- Confirm content rights and understand the AI identity before creation
- Save the profile on the current device with IndexedDB
- Enter a local companion-chat prototype with explicit AI labels
- Use responsive layouts on desktop and mobile
- Switch between complete Chinese and English interfaces, with browser-language detection and a remembered preference
- Stage profile drafts through an experimental WebMCP tool where supported

## Safety and privacy choices

- **Local-first data:** photos and memories stay in the current browser in this prototype.
- **Consent checkpoint:** users confirm they have the right to use the supplied material.
- **AI disclosure:** the interface never presents the companion as the real person or animal.
- **Memory boundaries:** responses avoid inventing events that the user did not provide.
- **No manipulative retention:** the prototype does not use streaks, guilt, or dependency-based prompts.

## Run locally

No build step or package installation is required.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Project structure

```text
.
├── assets/
│   └── sample-companion.jpg
├── app.js
├── index.html
├── styles.css
├── README.md
├── README.zh-CN.md
└── LICENSE
```

## Technology

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript
- FileReader API and IndexedDB
- WebMCP progressive enhancement

## Current limitations

- The conversation is a rule-based product prototype, not a production AI service.
- Profiles remain on one browser and are not synchronized between devices.
- There is no account system, encrypted cloud storage, voice cloning, or real-time avatar.
- Clearing browser site data removes the saved profile.
- This prototype is not a mental-health or grief-counselling service.

## Roadmap

- Add an opt-in AI conversation backend grounded only in user-provided memories
- Separate sourced memories from model-generated language in the UI
- Add account-based encrypted storage and complete data deletion
- Add per-person consent records and dispute/removal workflows
- Conduct grief-safety reviews and usability research before production use

## Responsible use

Do not use this project to impersonate a real person, bypass identity verification, mislead third parties, or clone someone's likeness or voice without authorization. Any production deployment should receive jurisdiction-specific privacy and legal review.

## Asset note

The sample companion illustration was generated with an AI image tool for this prototype. Do not treat it as a real person's likeness or as identity-training data.

## License

Code is available under the [MIT License](LICENSE). User-supplied photos, memories, voices, and other personal material are not covered by that license.
