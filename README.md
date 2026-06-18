# Would You Like To Go On A Date? 🌸

A mobile-first single-page web experience that feels like a cute, personalized digital scrapbook asking someone out.

## 🎯 Project Overview

This is a thoughtfully designed, handcrafted digital experience that progressively reveals a personal story, shares memories, and culminates in asking the important question: "Would you let me take you on a proper date?"

The vibe is soft, thoughtful, feminine, and playful—like a digital scrapbook made specifically for one person.

## 🎨 Design System

### Colors
- **Background**: `#FFF5F7` (soft blush)
- **Secondary Background**: `#FFE4EC` (light pink)
- **Card Background**: `#FFFFFF` (white)
- **Primary Accent**: `#FF7AA2` (warm pink)
- **Secondary Accent**: `#F9B5D0` (soft pink)
- **Text**: `#4B4453` (deep purple-gray)

### Typography
- **Headings**: Dancing Script (cursive, playful)
- **Body**: Poppins (friendly, modern)

## 📱 Sections

1. **Landing Page** - "Hi Superstar ✨"
   - Greeting with floating hearts
   - Continue button to begin

2. **Our Story** - Progressive narrative reveal
   - 6 statements revealing how the relationship developed
   - User-controlled pacing

3. **Memory Board** - Interactive polaroid cards
   - 5 memory cards with hover interactions
   - Hidden captions revealing personal moments

4. **Transition Page** - Timed reveals
   - Builds anticipation with carefully timed text reveals
   - "So...", "I've been thinking", "We've somehow done everything except go on an actual date"

5. **The Question** - The main event
   - Large, elegant question
   - Two identical "Yes" buttons (no pressure)

6. **Success State** - Celebration
   - Confetti animation
   - "Phase 2 unlocked" message

## ✨ Features

### Navigation & Progress
- **Progress Bar**: Visual indicator at the top
- **Smooth Transitions**: Fade, slide, and scale animations
- **Element-based Scrolling**: Reliable navigation between sections

### Animations
- Floating hearts with gentle motion
- Confetti celebration on success
- Smooth section transitions
- Interactive memory card flip effects
- Progress bar fills as you advance

### Music Player
- 🎵 Floating button (bottom-right)
- Non-intrusive background music option
- State persists across sections
- Accessible with proper labels

### Responsive Design
- Mobile-first approach
- Optimized breakpoints for tablets and desktops
- Touch-friendly interactions
- Proper accessibility (ARIA labels, semantic HTML)

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Preview
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx
│   ├── OurStory.tsx
│   ├── MemoryBoard.tsx
│   ├── TransitionPage.tsx
│   ├── TheQuestion.tsx
│   ├── SuccessState.tsx
│   ├── FloatingHearts.tsx
│   ├── MusicPlayer.tsx
│   └── [corresponding .css files]
├── App.tsx
├── App.css
├── index.css
└── main.tsx

public/
└── music.wav
```

## 🔧 Technical Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Animations and styling
- **ESLint** - Code quality

## 💡 Key Features

- **No External Animation Libraries**: Pure CSS animations for performance
- **Proper State Management**: React hooks with cleanup
- **Accessibility First**: ARIA labels, semantic HTML
- **Mobile Optimized**: Responsive design from 320px+
- **Performance**: Lazy animations, optimized media

## 🎵 Audio

The project includes a placeholder WAV audio file (`public/music.wav`). Replace it with your preferred background music file.

## 🛠️ Customization

### Edit Memory Cards
Modify `src/components/MemoryBoard.tsx`:
```typescript
const memories: MemoryCard[] = [
  {
    id: 1,
    emoji: '📍',
    title: 'Your Memory',
    caption: 'Your caption here'
  },
  // ...
]
```

### Edit Story Statements
Modify `src/components/OurStory.tsx`:
```typescript
const statements = [
  "Your statement here",
  "Your statement here",
  // ...
]
```

### Adjust Colors
Modify `src/index.css`:
```css
:root {
  --bg-primary: #FFF5F7;
  --accent-primary: #FF7AA2;
  /* ... */
}
```

## ❤️ Notes

This is a Phase 1 experience. Future phases can include:
- Date selection
- Venue selection
- Calendar integration
- Personalized messaging

---

Made with ❤️ and ✨
