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
