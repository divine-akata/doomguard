# 📵 DoomGuard

**DoomGuard** is a browser-based AI tool that helps reduce doomscrolling by detecting when you pick up your phone and calling it out — literally.

Using real-time computer vision and speech synthesis, DoomGuard monitors your environment through your webcam and reacts when a phone is detected, helping you stay focused and aware of your habits.

---

## 🧠 What It Does

- 📷 Uses your webcam for real-time object detection
- 📱 Detects when a **cell phone** is present
- 🔊 Plays an audio “roast” or reminder when phone usage is detected
- 📊 Tracks how many times you reach for your phone during a session
- ⏱️ Encourages longer focus streaks

All processing happens **locally in the browser** — no images or video are stored or sent anywhere.

---

## ⚙️ How It Works

1. The browser requests webcam access
2. A pre-trained computer vision model scans each frame
3. If a phone is detected above a confidence threshold:
   - The UI switches to “Doomscroll Mode”
   - A voice message is triggered
   - Counters and timers update

The system is split into three independent modules:
- **Vision Engine** – object detection
- **Behavior Engine** – logic, timing, and audio responses
- **UI Engine** – visual feedback and state changes

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- TensorFlow.js
- COCO-SSD (pre-trained object detection model)
- Web Speech API (Text-to-Speech)

No backend required.

---

## 🚀 Running the Project

1. Clone the repository:
   ```bash
   git clone <https://github.com/divine-akata/doomguard/blob/main/README.md>
