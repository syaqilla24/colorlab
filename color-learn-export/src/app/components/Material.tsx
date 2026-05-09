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
