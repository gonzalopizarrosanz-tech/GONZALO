import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { playAudio, CORRECT_ANSWER_SOUND, INCORRECT_ANSWER_SOUND } from '../utils/audio';

interface QuestionScreenProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const OptionButton: React.FC<{
    onClick: () => void;
    disabled: boolean;
    feedbackClass: string;
    children: React.ReactNode;
}> = ({ onClick, disabled, feedbackClass, children}) => {
    return (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`w-full text-left text-white font-bold py-3 px-4 my-2 border-2 border-b-4 transform transition-all duration-150 ${feedbackClass}`}
        >
          {children}
        </button>
    )
}


const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);

    const isCorrect = question.correctAnswerIndex === index;
    if (isCorrect) {
      playAudio(CORRECT_ANSWER_SOUND);
    } else {
      playAudio(INCORRECT_ANSWER_SOUND);
    }

    setTimeout(() => {
      onAnswer(index);
    }, 1200);
  };

  return (
    <div className="bg-[#121222] p-6 border-4 border-cyan-400 w-full">
      <p className="text-lg mb-4 text-green-400">Pregunta {questionNumber}/{totalQuestions}</p>
      <div className="h-32 flex items-center justify-center mb-6">
        <h2 className="text-xl leading-relaxed text-white">{question.question}</h2>
      </div>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = question.correctAnswerIndex === index;
          
          let feedbackClass = 'bg-purple-600 border-purple-800 hover:bg-purple-700 active:border-b-2 active:translate-y-px';
          if (isSelected) {
            feedbackClass = isCorrect ? 'bg-green-500 border-green-700 animate-pulse' : 'bg-red-500 border-red-700 animate-pulse';
          } else if (selectedAnswer !== null && isCorrect) {
            feedbackClass = 'bg-green-500 border-green-700';
          } else if (selectedAnswer !== null && !isCorrect) {
             feedbackClass = 'bg-gray-600 border-gray-800 opacity-50';
          }

          return (
            <OptionButton
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={selectedAnswer !== null}
              feedbackClass={feedbackClass}
            >
              <span className="mr-4 text-cyan-400">{String.fromCharCode(65 + index)}:</span>{option}
            </OptionButton>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionScreen;
