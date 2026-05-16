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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto place-items-center">
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
