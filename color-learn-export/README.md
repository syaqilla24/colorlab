# Color Learn - Aplikasi Pembelajaran Warna Interaktif

Aplikasi web interaktif untuk mempelajari teori warna dengan fitur materi pembelajaran, kuis, galeri kombinasi warna, dan efek suara.

## 📋 Fitur

- **Splash Screen**: Layar loading animasi dengan progress bar
- **Home Menu**: Menu utama dengan 4 pilihan (Materi, Kuis, Galeri, Tentang)
- **Materi Pembelajaran**: 6 topik tentang teori warna
  - Warna Primer
  - Warna Sekunder
  - Warna Tersier
  - Warna Hangat
  - Warna Dingin
  - Warna Komplementer
- **Kuis Interaktif**: 5 pertanyaan dengan scoring dan feedback
- **Galeri**: 9 kombinasi warna dengan detail
- **Tentang**: Informasi aplikasi dan pengembang
- **Efek Suara**: Click, hover, success, error, dan navigation sounds

## 🛠️ Teknologi yang Digunakan

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **React Router 7.13.0** - Navigation
- **Tailwind CSS 4.1.12** - Styling
- **Motion (Framer Motion) 12.23.24** - Animations
- **Lucide React 0.487.0** - Icons
- **Web Audio API** - Sound effects

## 📁 Struktur File

```
src/
├── app/
│   ├── App.tsx                 # Entry point dengan RouterProvider
│   ├── routes.ts               # Konfigurasi routing
│   ├── components/
│   │   ├── Splash.tsx          # Loading screen
│   │   ├── Root.tsx            # Layout wrapper
│   │   ├── Home.tsx            # Menu utama
│   │   ├── Material.tsx        # Daftar materi
│   │   ├── MaterialDetail.tsx  # Detail setiap materi
│   │   ├── Quiz.tsx            # Kuis interaktif
│   │   ├── Gallery.tsx         # Galeri kombinasi warna
│   │   └── About.tsx           # Tentang aplikasi
│   └── utils/
│       └── sounds.ts           # Audio utility functions
└── styles/
    └── (Tailwind CSS files)
```

## 🚀 Cara Instalasi

### 1. Setup Project

```bash
# Buat project React dengan Vite
npm create vite@latest color-learn -- --template react-ts

# Masuk ke direktori project
cd color-learn
```

### 2. Install Dependencies

```bash
# Install semua dependencies yang diperlukan
npm install react-router@7.13.0
npm install motion@12.23.24
npm install lucide-react@0.487.0
npm install tailwindcss@4.1.12 @tailwindcss/vite@4.1.12
npm install -D @vitejs/plugin-react
```

### 3. Copy Files

Salin semua file dari folder `src/` di ZIP ini ke project Anda:

```bash
# Copy structure
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
```

### 4. Setup Tailwind CSS

Buat file `src/styles/theme.css`:

```css
@import "tailwindcss";
```

Update `src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 5. Jalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 🎯 Routing Structure

- `/` - Splash screen (loading)
- `/app` - Home menu
- `/app/material` - Daftar materi pembelajaran
- `/app/material/:id` - Detail materi (primary, secondary, tertiary, warm, cool, complementary)
- `/app/quiz` - Kuis interaktif
- `/app/gallery` - Galeri kombinasi warna
- `/app/about` - Tentang aplikasi

## 🎨 Customization

### Menambah Materi Baru

Edit file `src/app/components/Material.tsx` dan `src/app/components/MaterialDetail.tsx`:

```tsx
// Tambahkan ke materials array di Material.tsx
{
  id: 'new-topic',
  title: 'Judul Baru',
  description: 'Deskripsi',
  color: 'bg-indigo-500',
}

// Tambahkan ke materialContent di MaterialDetail.tsx
new_topic: {
  title: 'Judul Baru',
  content: ['Penjelasan...'],
  colors: [{ name: 'Warna', hex: '#000000', rgb: 'rgb(0,0,0)' }],
}
```

### Menambah Soal Kuis

Edit file `src/app/components/Quiz.tsx`:

```tsx
// Tambahkan ke quizData array
{
  question: 'Pertanyaan baru?',
  options: ['A', 'B', 'C', 'D'],
  correct: 0, // index jawaban benar
}
```

### Menambah Kombinasi Warna

Edit file `src/app/components/Gallery.tsx`:

```tsx
// Tambahkan ke colorCombinations array
{
  id: 10,
  name: 'Nama Kombinasi',
  colors: ['#FF0000', '#00FF00', '#0000FF'],
  description: 'Deskripsi kombinasi',
  type: 'Tipe kombinasi',
}
```

## 🔊 Sound Effects

Aplikasi menggunakan Web Audio API untuk menghasilkan efek suara:

- **playClickSound()** - Untuk tombol dan link
- **playHoverSound()** - Untuk hover pada cards
- **playSuccessSound()** - Untuk jawaban benar
- **playErrorSound()** - Untuk jawaban salah
- **playNavigationSound()** - Untuk navigasi back

## 📱 Responsive Design

Aplikasi responsive dan dapat diakses di:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎓 Flowchart Aplikasi

1. **Start** → User membuka aplikasi
2. **Splash Screen** → Loading animation (1.5 detik)
3. **Home Menu** → Pilih: Materi, Kuis, Galeri, atau Tentang
4. **Menu Materi** → Pilih topik → Baca materi → Kembali/Lanjut
5. **Menu Kuis** → Baca petunjuk → Kerjakan soal → Lihat hasil → Ulang/Kembali
6. **Menu Galeri** → Lihat kombinasi → Klik detail → Tutup
7. **Menu Tentang** → Lihat info aplikasi
8. **End** → Kembali ke menu atau keluar

## 📄 License

Aplikasi ini dibuat untuk tujuan pembelajaran.

© 2026 Color Learn. All rights reserved.

## 👨‍💻 Developer Notes

Aplikasi ini dikembangkan menggunakan:
- React dengan TypeScript untuk type safety
- React Router untuk navigasi yang smooth
- Motion untuk animasi yang halus
- Tailwind CSS untuk styling yang efisien
- Web Audio API untuk efek suara tanpa file audio eksternal

Semua komponen dibuat dengan best practices:
- Functional components dengan hooks
- Responsive design
- Accessible UI
- Clean code structure
- Type safety dengan TypeScript

## 🆘 Troubleshooting

**Masalah: Routing tidak bekerja**
- Pastikan `react-router` versi 7.13.0 terinstall
- Cek import `RouterProvider` dan `createBrowserRouter` dari `react-router`

**Masalah: Animasi tidak muncul**
- Pastikan `motion` package terinstall
- Import dari `motion/react` bukan `framer-motion`

**Masalah: Suara tidak keluar**
- Web Audio API memerlukan user interaction pertama kali
- Browser harus mendukung Web Audio API
- Cek console untuk error

**Masalah: Tailwind tidak bekerja**
- Pastikan Tailwind CSS v4 terinstall dengan benar
- Cek `src/styles/theme.css` ada dan di-import di `main.tsx`

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue atau hubungi developer.

---

**Selamat mencoba! 🎨✨**
