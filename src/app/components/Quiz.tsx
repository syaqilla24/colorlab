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
  {
    question: 'Warna apa yang dihasilkan dari Biru + Kuning?',
    options: ['Hijau', 'Orange', 'Ungu', 'Merah'],
    correct: 0,
  },
  {
    question: 'Apa fungsi roda warna?',
    options: [
      'Mengukur ukuran gambar',
      'Menentukan kombinasi warna',
      'Mengatur pencahayaan',
      'Mengedit foto'
    ],
    correct: 1,
  },
  {
    question: 'Warna netral terdiri dari?',
    options: [
      'Merah dan biru',
      'Hijau dan kuning',
      'Hitam, putih, abu-abu',
      'Orange dan ungu'
    ],
    correct: 2,
  },
  {
    question: 'Warna sekunder adalah?',
    options: [
      'Warna hasil campuran dua warna primer',
      'Warna asli',
      'Warna gelap',
      'Warna transparan'
    ],
    correct: 0,
  },
  {
    question: 'Campuran Merah + Biru menghasilkan warna?',
    options: ['Hijau', 'Orange', 'Ungu', 'Kuning'],
    correct: 2,
  },
  {
    question: 'Apa warna komplementer dari Merah?',
    options: ['Hijau', 'Orange', 'Biru', 'Kuning'],
    correct: 0,
  },
  {
    question: 'Warna hangat biasanya memberi kesan?',
    options: ['Dingin', 'Semangat', 'Tenang', 'Sedih'],
    correct: 1,
  },
  {
    question: 'Warna dingin identik dengan suasana?',
    options: ['Panas', 'Cerah', 'Tenang', 'Berisik'],
    correct: 2,
  },
  {
    question: 'Apa warna hasil campuran Merah + Putih?',
    options: ['Pink', 'Abu-abu', 'Coklat', 'Ungu'],
    correct: 0,
  },
  {
    question: 'Hitam dan putih termasuk jenis warna?',
    options: ['Primer', 'Sekunder', 'Netral', 'Tersier'],
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
