
import React from 'react';
import Button from './Button';
import PacmanGhost from './PacmanGhost';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-[#121222] p-8 border-4 border-cyan-400 box-glow animate-pulse-slow">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-green-400">Living 90's Trivial</h1>
      <div className="my-8 flex justify-center space-x-4">
        <PacmanGhost className="text-yellow-400 w-8 h-8" />
        <PacmanGhost className="text-pink-500 w-8 h-8" />
        <PacmanGhost className="text-red-500 w-8 h-8" />
        <PacmanGhost className="text-cyan-400 w-8 h-8" />
      </div>
      <p className="text-xl md:text-2xl mb-8 text-white">¿Estás preparado para la Living 90’s Party?</p>
      <Button onClick={onStart}>JUGAR</Button>
    </div>
  );
};

export default StartScreen;
