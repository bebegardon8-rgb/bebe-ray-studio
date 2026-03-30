# Bebe Ray Studio

Bebe Ray Studio is an AI-powered creative platform for music, video, and cover art generation.

## Features

- AI Music Studio
- AI Music Videos Studio
- AI Cover Studio
- Voice cloning service integration
- React Router navigation

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

### Build for production

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your API keys:

```env
OPENAI_API_KEY=your_openai_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
RUNWAY_API_KEY=your_runway_api_key_here
DALL_E_API_KEY=your_dall_e_api_key_here
```

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.js
├── components/
├── pages/
└── services/
```