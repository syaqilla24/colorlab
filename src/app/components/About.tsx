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
                <div className="text-4xl mb-2">15</div>
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
