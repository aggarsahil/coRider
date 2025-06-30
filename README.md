# coRider Chat App

A React Native chat screen  for both Android and iOS, built with Expo.

## Features
- Chat UI with API integration
- Infinite scroll for older messages
- Floating action buttons (toggle with 🔗)
- Responsive design for Android and iOS

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the app:**
   ```sh
   npx expo start
   ```
3. **Open in Expo Go:**
   - Scan the QR code with Expo Go (Android/iOS) or run on a simulator.

## Project Structure

- `components/` — All React Native components
- `theme.js` — Theme and color definitions
- `App.js` or `app/` — Main entry point

## API
- Fetches chat data from: `https://qa.corider.in/assignment/chat?page=0`

## Notes
- Do **not** commit `node_modules/` or build outputs.
- For any issues, please open an issue or contact the maintainer. 