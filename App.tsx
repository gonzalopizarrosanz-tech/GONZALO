
import React, { useState, useCallback, useEffect } from 'react';
import { GameState, Question } from './types';
import { QUESTIONS, TOTAL_QUESTIONS } from './constants';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startGame = useCallback(() => {
    const shuffledQuestions = shuffleArray(QUESTIONS).slice(0, TOTAL_QUESTIONS);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState(GameState.Playing);
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    if (questions[currentQuestionIndex].correctAnswerIndex === answerIndex) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState(GameState.Finished);
    }
  }, [currentQuestionIndex, questions]);
  
  const restartGame = useCallback(() => {
      setGameState(GameState.Start);
  }, []);

  const renderScreen = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        );
      case GameState.Finished:
        return <ResultScreen score={score} totalQuestions={questions.length} onRestart={restartGame} />;
      case GameState.Start:
      default:
        return <StartScreen onStart={startGame} />;
    }
  };

  return (
    <div className="bg-[#1a1a2e] min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <main className="w-full max-w-lg mx-auto">
            {renderScreen()}
        </main>
    </div>
  );
};

export default App;
