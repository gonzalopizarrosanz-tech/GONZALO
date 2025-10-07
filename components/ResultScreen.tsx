
import React from 'react';
import Button from './Button';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const getResultMessage = () => {
    if (score >= 4) {
      return "¡Perfecto! Estás más que preparado para la Living 90's Party 🎉";
    }
    if (score >= 2) {
      return "Casi, pero necesitas repasar tu cultura noventera 😅";
    }
    return "¡Ay madre! No estás preparado… ¡te toca empaparte de los 90 antes del viernes! 😱";
  };

  return (
    <div className="bg-[#121222] p-8 border-4 border-pink-500 box-glow vhs-effect">
      <h2 className="text-2xl text-yellow-400 mb-4">¡Juego Terminado!</h2>
      <p className="text-4xl font-bold my-6 text-white">
        {score} <span className="text-xl">/ {totalQuestions}</span>
      </p>
      <p className="text-xl leading-relaxed my-8 text-cyan-400 min-h-[120px]">
        {getResultMessage()}
      </p>
      
      <div className="my-8 border-t-2 border-dashed border-green-400 pt-8">
        <h3 className="text-2xl text-glow text-green-400">Living 90's Party</h3>
        <p className="text-lg mt-2 text-white">Viernes 10 de octubre</p>
        <p className="text-md mt-1 text-pink-400">| Vive la experiencia Living |</p>
      </div>

      <Button onClick={onRestart}>VOLVER A JUGAR</Button>
    </div>
  );
};

export default ResultScreen;
