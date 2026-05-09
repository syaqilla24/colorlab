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
