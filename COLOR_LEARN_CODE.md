# Color Learn - Complete Source Code

## File Structure
```
src/
├── app/
│   ├── App.tsx
│   ├── routes.ts
│   ├── components/
│   │   ├── Splash.tsx
│   │   ├── Root.tsx
│   │   ├── Home.tsx
│   │   ├── Material.tsx
│   │   ├── MaterialDetail.tsx
│   │   ├── Quiz.tsx
│   │   ├── Gallery.tsx
│   │   └── About.tsx
│   └── utils/
│       └── sounds.ts
└── styles/
    └── (existing Tailwind CSS files)
```

---

## 1. src/app/App.tsx

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## 2. src/app/routes.ts

```typescript
import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Material from "./components/Material";
import MaterialDetail from "./components/MaterialDetail";
import Quiz from "./components/Quiz";
import Gallery from "./components/Gallery";
import About from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "material", Component: Material },
      { path: "material/:id", Component: MaterialDetail },
      { path: "quiz", Component: Quiz },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
    ],
  },
]);
```

---

## 3. src/app/utils/sounds.ts

```typescript
const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

export const playClickSound = () => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
};

export const playSuccessSound = () => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
  oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.3);
};

export const playErrorSound = () => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1);
  oscillator.type = 'sawtooth';

  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const playNavigationSound = () => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 600;
  oscillator.type = 'triangle';

  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.15);
};

export const playHoverSound = () => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 1000;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.05);
};
```

---

## 4. src/app/components/Root.tsx

```tsx
import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="size-full bg-gray-50">
      <Outlet />
    </div>
  );
}
```

---

## 5. src/app/components/Splash.tsx

```tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Palette } from 'lucide-react';

export default function Splash() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/app'), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="size-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <Palette className="w-24 h-24 text-white" strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl mb-2 text-white"
      >
        Color Learn
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xl text-white/90 mb-12"
      >
        Belajar Tentang Warna
      </motion.p>

      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-white/80"
      >
        Loading... {progress}%
      </motion.p>
    </div>
  );
}
```

---

## 6. src/app/components/Home.tsx

```tsx
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { BookOpen, ClipboardList, Image, Info } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sounds';

const menuItems = [
  {
    title: 'Materi',
    description: 'Pelajari teori warna dan konsep dasar',
    icon: BookOpen,
    path: '/app/material',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Kuis',
    description: 'Uji pengetahuan Anda tentang warna',
    icon: ClipboardList,
    path: '/app/quiz',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Galeri',
    description: 'Lihat kombinasi warna yang menarik',
    icon: Image,
    path: '/app/gallery',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tentang',
    description: 'Informasi aplikasi dan pengembang',
    icon: Info,
    path: '/app/about',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Home() {
  return (
    <div className="size-full overflow-auto">
      <div className="min-h-full flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Color Learn
          </h1>
          <p className="text-xl text-gray-600">
            Pilih menu untuk memulai pembelajaran
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.path} className="block" onClick={playClickSound}>
                <div
                  className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
                  onMouseEnter={playHoverSound}
                >
                  <item.icon className="w-12 h-12 text-white mb-4" />
                  <h2 className="text-3xl text-white mb-2">{item.title}</h2>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## 7. src/app/components/Material.tsx

```tsx
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Circle } from 'lucide-react';
import { playClickSound, playNavigationSound, playHoverSound } from '../utils/sounds';

const materials = [
  {
    id: 'primary',
    title: 'Warna Primer',
    description: 'Merah, Kuning, dan Biru',
    color: 'bg-red-500',
  },
  {
    id: 'secondary',
    title: 'Warna Sekunder',
    description: 'Orange, Hijau, dan Ungu',
    color: 'bg-green-500',
  },
  {
    id: 'tertiary',
    title: 'Warna Tersier',
    description: 'Kombinasi primer dan sekunder',
    color: 'bg-yellow-500',
  },
  {
    id: 'warm',
    title: 'Warna Hangat',
    description: 'Merah, Orange, dan Kuning',
    color: 'bg-orange-500',
  },
  {
    id: 'cool',
    title: 'Warna Dingin',
    description: 'Biru, Hijau, dan Ungu',
    color: 'bg-blue-500',
  },
  {
    id: 'complementary',
    title: 'Warna Komplementer',
    description: 'Warna yang berlawanan',
    color: 'bg-purple-500',
  },
];

export default function Material() {
  return (
    <div className="size-full overflow-auto bg-gray-50">
      <div className="min-h-full p-8">
        <Link to="/app" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8" onClick={playNavigationSound}>
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Menu
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl mb-4">Materi Pembelajaran</h1>
          <p className="text-xl text-gray-600">Pilih topik untuk mempelajari lebih lanjut</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/app/material/${material.id}`} onClick={playClickSound}>
                <div
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  onMouseEnter={playHoverSound}
                >
                  <div className={`${material.color} w-16 h-16 rounded-full mb-4 flex items-center justify-center`}>
                    <Circle className="w-8 h-8 text-white fill-current" />
                  </div>
                  <h2 className="text-2xl mb-2">{material.title}</h2>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## 8. src/app/components/MaterialDetail.tsx

```tsx
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { playNavigationSound } from '../utils/sounds';

const materialContent: Record<string, { title: string; content: string[]; colors: { name: string; hex: string; rgb: string }[] }> = {
  primary: {
    title: 'Warna Primer',
    content: [
      'Warna primer adalah warna dasar yang tidak dapat dibuat dengan mencampur warna lain.',
      'Tiga warna primer adalah: Merah, Kuning, dan Biru.',
      'Semua warna lain dapat dibuat dengan mencampur warna primer ini.',
      'Warna primer adalah fondasi dari teori warna dan roda warna.',
    ],
    colors: [
      { name: 'Merah', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
      { name: 'Kuning', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)' },
      { name: 'Biru', hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
    ],
  },
  secondary: {
    title: 'Warna Sekunder',
    content: [
      'Warna sekunder dibuat dengan mencampur dua warna primer.',
      'Orange dibuat dari Merah + Kuning.',
      'Hijau dibuat dari Kuning + Biru.',
      'Ungu dibuat dari Merah + Biru.',
    ],
    colors: [
      { name: 'Orange', hex: '#FF7F00', rgb: 'rgb(255, 127, 0)' },
      { name: 'Hijau', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
      { name: 'Ungu', hex: '#7F00FF', rgb: 'rgb(127, 0, 255)' },
    ],
  },
  tertiary: {
    title: 'Warna Tersier',
    content: [
      'Warna tersier dibuat dengan mencampur warna primer dan sekunder.',
      'Ada enam warna tersier dalam roda warna.',
      'Contoh: Merah-Orange, Kuning-Orange, Kuning-Hijau, Biru-Hijau, Biru-Ungu, Merah-Ungu.',
      'Warna tersier memberikan lebih banyak variasi dalam palet warna.',
    ],
    colors: [
      { name: 'Merah-Orange', hex: '#FF3F00', rgb: 'rgb(255, 63, 0)' },
      { name: 'Kuning-Orange', hex: '#FFBF00', rgb: 'rgb(255, 191, 0)' },
      { name: 'Kuning-Hijau', hex: '#7FFF00', rgb: 'rgb(127, 255, 0)' },
      { name: 'Biru-Hijau', hex: '#007F7F', rgb: 'rgb(0, 127, 127)' },
      { name: 'Biru-Ungu', hex: '#3F00FF', rgb: 'rgb(63, 0, 255)' },
      { name: 'Merah-Ungu', hex: '#BF00FF', rgb: 'rgb(191, 0, 255)' },
    ],
  },
  warm: {
    title: 'Warna Hangat',
    content: [
      'Warna hangat adalah warna yang memberikan kesan hangat dan energik.',
      'Termasuk: Merah, Orange, Kuning, dan variasinya.',
      'Warna hangat sering diasosiasikan dengan matahari, api, dan energi.',
      'Digunakan untuk menarik perhatian dan menciptakan suasana ceria.',
    ],
    colors: [
      { name: 'Merah', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
      { name: 'Orange', hex: '#FF7F00', rgb: 'rgb(255, 127, 0)' },
      { name: 'Kuning', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)' },
    ],
  },
  cool: {
    title: 'Warna Dingin',
    content: [
      'Warna dingin memberikan kesan sejuk dan menenangkan.',
      'Termasuk: Biru, Hijau, Ungu, dan variasinya.',
      'Warna dingin sering diasosiasikan dengan air, langit, dan alam.',
      'Digunakan untuk menciptakan suasana tenang dan profesional.',
    ],
    colors: [
      { name: 'Biru', hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
      { name: 'Hijau', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
      { name: 'Ungu', hex: '#7F00FF', rgb: 'rgb(127, 0, 255)' },
    ],
  },
  complementary: {
    title: 'Warna Komplementer',
    content: [
      'Warna komplementer adalah warna yang berlawanan dalam roda warna.',
      'Ketika digabungkan, warna komplementer menciptakan kontras yang kuat.',
      'Contoh pasangan: Merah-Hijau, Biru-Orange, Kuning-Ungu.',
      'Sering digunakan dalam desain untuk menciptakan visual yang menarik.',
    ],
    colors: [
      { name: 'Merah', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
      { name: 'Hijau', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
      { name: 'Biru', hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
      { name: 'Orange', hex: '#FF7F00', rgb: 'rgb(255, 127, 0)' },
    ],
  },
};

export default function MaterialDetail() {
  const { id } = useParams<{ id: string }>();
  const material = id ? materialContent[id] : null;

  if (!material) {
    return (
      <div className="size-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Materi tidak ditemukan</h1>
          <Link to="/app/material" className="text-blue-600 hover:underline">
            Kembali ke Daftar Materi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full overflow-auto bg-gray-50">
      <div className="min-h-full p-8">
        <Link to="/app/material" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8" onClick={playNavigationSound}>
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Materi
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl mb-8">{material.title}</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-4xl">
            <h2 className="text-2xl mb-4">Penjelasan</h2>
            {material.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl">
            <h2 className="text-2xl mb-6">Contoh Warna</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {material.colors.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="h-32 w-full"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl mb-2">{color.name}</h3>
                    <p className="text-sm text-gray-600">{color.hex}</p>
                    <p className="text-sm text-gray-600">{color.rgb}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/app/material"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={playNavigationSound}
            >
              Pilih Materi Lain
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
```

---

## 9. src/app/components/Quiz.tsx

```tsx
import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { playClickSound, playNavigationSound, playSuccessSound, playErrorSound } from '../utils/sounds';

const quizData = [
  {
    question: 'Apa saja warna primer?',
    options: ['Merah, Kuning, Biru', 'Merah, Hijau, Biru', 'Orange, Hijau, Ungu', 'Merah, Orange, Kuning'],
    correct: 0,
  },
  {
    question: 'Warna apa yang dihasilkan dari Merah + Kuning?',
    options: ['Ungu', 'Hijau', 'Orange', 'Coklat'],
    correct: 2,
  },
  {
    question: 'Manakah yang termasuk warna dingin?',
    options: ['Merah', 'Orange', 'Biru', 'Kuning'],
    correct: 2,
  },
  {
    question: 'Apa warna komplementer dari Biru?',
    options: ['Hijau', 'Orange', 'Merah', 'Ungu'],
    correct: 1,
  },
  {
    question: 'Warna tersier dibuat dari kombinasi?',
    options: ['Dua warna primer', 'Dua warna sekunder', 'Warna primer dan sekunder', 'Hitam dan putih'],
    correct: 2,
  },
];

type QuizState = 'instruction' | 'playing' | 'result';

export default function Quiz() {
  const [state, setState] = useState<QuizState>('instruction');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setState('playing');
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
      playSuccessSound();
    } else {
      playErrorSound();
    }

    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    } else {
      setTimeout(() => setState('result'), 500);
    }
  };

  const resetQuiz = () => {
    setState('instruction');
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  return (
    <div className="size-full overflow-auto bg-gray-50">
      <div className="min-h-full p-8">
        <Link to="/app" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8" onClick={playNavigationSound}>
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Menu
        </Link>

        <AnimatePresence mode="wait">
          {state === 'instruction' && (
            <motion.div
              key="instruction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-5xl mb-8">Kuis Warna</h1>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl mb-4">Petunjuk</h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Kuis terdiri dari {quizData.length} pertanyaan</li>
                  <li>• Pilih jawaban yang paling tepat</li>
                  <li>• Setiap jawaban benar mendapat 1 poin</li>
                  <li>• Hasil akan ditampilkan di akhir kuis</li>
                  <li>• Anda dapat mengulang kuis kapan saja</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  playClickSound();
                  startQuiz();
                }}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition-colors"
              >
                Mulai Kuis
              </button>
            </motion.div>
          )}

          {state === 'playing' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">
                    Pertanyaan {currentQuestion + 1} dari {quizData.length}
                  </span>
                  <span className="text-gray-600">Skor: {score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h2 className="text-2xl mb-8">{quizData[currentQuestion].question}</h2>

                <div className="space-y-4">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-green-500 p-4 rounded-lg text-lg transition-all"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-5xl mb-8">Hasil Kuis</h1>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="mb-6"
                >
                  {score >= quizData.length * 0.7 ? (
                    <CheckCircle className="w-24 h-24 text-green-600 mx-auto" />
                  ) : (
                    <XCircle className="w-24 h-24 text-orange-600 mx-auto" />
                  )}
                </motion.div>

                <h2 className="text-4xl mb-4">
                  Skor Anda: {score} / {quizData.length}
                </h2>

                <p className="text-2xl text-gray-600 mb-8">
                  {score === quizData.length && 'Sempurna! Anda menguasai materi!'}
                  {score >= quizData.length * 0.7 && score < quizData.length && 'Bagus! Anda memahami materi dengan baik!'}
                  {score >= quizData.length * 0.5 && score < quizData.length * 0.7 && 'Cukup baik! Terus belajar!'}
                  {score < quizData.length * 0.5 && 'Perlu belajar lebih banyak. Coba lagi!'}
                </p>

                <div className="space-y-4">
                  {quizData.map((q, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-left ${
                        answers[index] === q.correct ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
                      }`}
                    >
                      <p className="mb-2">{q.question}</p>
                      <p className="text-sm text-gray-600">
                        Jawaban Anda: {q.options[answers[index]]}
                        {answers[index] !== q.correct && ` • Benar: ${q.options[q.correct]}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    playClickSound();
                    resetQuiz();
                  }}
                  className="flex-1 bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition-colors"
                >
                  Ulangi Kuis
                </button>
                <Link
                  to="/app"
                  className="flex-1 bg-gray-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-700 transition-colors text-center"
                  onClick={playNavigationSound}
                >
                  Kembali ke Menu
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

---

## 10. src/app/components/Gallery.tsx

```tsx
import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { playClickSound, playNavigationSound, playHoverSound } from '../utils/sounds';

const colorCombinations = [
  {
    id: 1,
    name: 'Sunset Vibes',
    colors: ['#FF6B6B', '#FFA500', '#FFD700'],
    description: 'Kombinasi hangat yang mengingatkan pada matahari terbenam',
    type: 'Analogus',
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    colors: ['#0077BE', '#00A8E8', '#48CAE4'],
    description: 'Gradasi biru yang menenangkan seperti laut',
    type: 'Monokromatik',
  },
  {
    id: 3,
    name: 'Forest Green',
    colors: ['#2D6A4F', '#52B788', '#95D5B2'],
    description: 'Nuansa hijau alami dari hutan',
    type: 'Monokromatik',
  },
  {
    id: 4,
    name: 'Vibrant Pop',
    colors: ['#FF0054', '#00FFFF', '#FFFF00'],
    description: 'Kombinasi berani dan energik',
    type: 'Triadik',
  },
  {
    id: 5,
    name: 'Elegant Purple',
    colors: ['#6A0572', '#AB83A1', '#EAE2B7'],
    description: 'Kombinasi ungu yang elegan dan lembut',
    type: 'Analogus',
  },
  {
    id: 6,
    name: 'Autumn Leaves',
    colors: ['#8B4513', '#D2691E', '#FFD700'],
    description: 'Warna hangat musim gugur',
    type: 'Analogus',
  },
  {
    id: 7,
    name: 'Cool Mint',
    colors: ['#00B4D8', '#90E0EF', '#CAF0F8'],
    description: 'Kesegaran mint yang menyejukkan',
    type: 'Monokromatik',
  },
  {
    id: 8,
    name: 'Rose Garden',
    colors: ['#C9184A', '#FF758F', '#FFB3C1'],
    description: 'Nuansa pink romantis',
    type: 'Monokromatik',
  },
  {
    id: 9,
    name: 'Tropical Paradise',
    colors: ['#06FFA5', '#FFBE0B', '#FF006E'],
    description: 'Warna cerah khas tropis',
    type: 'Triadik',
  },
];

export default function Gallery() {
  const [selectedCombo, setSelectedCombo] = useState<typeof colorCombinations[0] | null>(null);

  return (
    <div className="size-full overflow-auto bg-gray-50">
      <div className="min-h-full p-8">
        <Link to="/app" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8" onClick={playNavigationSound}>
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Menu
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl mb-4">Galeri Kombinasi Warna</h1>
          <p className="text-xl text-gray-600">Klik pada kombinasi untuk melihat detail</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {colorCombinations.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                playClickSound();
                setSelectedCombo(combo);
              }}
              onMouseEnter={playHoverSound}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="h-32 flex">
                {combo.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="p-6">
                <h2 className="text-2xl mb-2">{combo.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{combo.type}</p>
                <p className="text-gray-600">{combo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCombo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-8 z-50"
              onClick={() => {
                playClickSound();
                setSelectedCombo(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                  <h2 className="text-3xl">{selectedCombo.name}</h2>
                  <button
                    onClick={() => {
                      playClickSound();
                      setSelectedCombo(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="h-48 flex rounded-lg overflow-hidden mb-6">
                    {selectedCombo.colors.map((color, index) => (
                      <div
                        key={index}
                        className="flex-1"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl mb-2">Tipe Kombinasi</h3>
                    <p className="text-lg text-gray-700">{selectedCombo.type}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl mb-2">Deskripsi</h3>
                    <p className="text-lg text-gray-700">{selectedCombo.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-4">Kode Warna</h3>
                    <div className="space-y-4">
                      {selectedCombo.colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-lg border-2 border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                          <div>
                            <p className="text-lg">{color}</p>
                            <p className="text-sm text-gray-600">Warna {index + 1}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

---

## 11. src/app/components/About.tsx

```tsx
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Palette, Code, Heart } from 'lucide-react';
import { playNavigationSound } from '../utils/sounds';

export default function About() {
  return (
    <div className="size-full overflow-auto bg-gray-50">
      <div className="min-h-full p-8">
        <Link to="/app" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8" onClick={playNavigationSound}>
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Menu
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl mb-12">Tentang Aplikasi</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl">
                <Palette className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl">Color Learn</h2>
                <p className="text-gray-600">Versi 1.0.0</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Color Learn adalah aplikasi web interaktif yang dirancang untuk membantu pengguna
              mempelajari teori warna dengan cara yang menyenangkan dan mudah dipahami.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-2">6</div>
                <p className="text-gray-600">Topik Materi</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-2">5</div>
                <p className="text-gray-600">Soal Kuis</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-2">9</div>
                <p className="text-gray-600">Kombinasi Warna</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <Code className="w-8 h-8" />
              Fitur Aplikasi
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Materi Pembelajaran:</strong> Pelajari berbagai topik tentang teori warna dari dasar hingga lanjutan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Kuis Interaktif:</strong> Uji pemahaman Anda dengan kuis yang menarik dan mendapat feedback langsung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">•</span>
                <span><strong>Galeri Kombinasi:</strong> Lihat berbagai kombinasi warna yang harmonis untuk inspirasi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">•</span>
                <span><strong>Desain Responsif:</strong> Tampilan yang optimal di berbagai perangkat</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              Pengembang
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Aplikasi ini dikembangkan sebagai media pembelajaran interaktif untuk memahami
              teori warna dengan lebih mudah dan menyenangkan.
            </p>
            <p className="text-lg text-gray-700">
              Dibuat dengan <span className="text-red-500">❤️</span> menggunakan React, TypeScript, Tailwind CSS, dan Motion.
            </p>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>© 2026 Color Learn. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
```

---

## Installation Instructions

1. Make sure you have `react-router` installed (already in package.json)
2. Copy all the files above into their respective locations
3. The app uses:
   - React Router for navigation
   - Motion (Framer Motion) for animations
   - Lucide React for icons
   - Tailwind CSS for styling
   - Web Audio API for sound effects

## Features

- **Splash Screen**: Animated loading screen with progress bar
- **Home**: Main menu with 4 options
- **Material**: 6 learning topics about color theory
- **Quiz**: Interactive quiz with 5 questions and scoring
- **Gallery**: 9 color combinations with details
- **About**: App information and credits
- **Sound Effects**: Click, hover, success, error, and navigation sounds
