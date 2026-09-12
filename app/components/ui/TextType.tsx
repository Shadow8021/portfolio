'use client';

import { type ElementType, useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    const currentText = textArray[currentTextIndex] ?? '';
    const targetText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    if (!targetText) return;

    if (!isDeleting && displayedText === '' && currentTextIndex === 0 && initialDelay > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(targetText.slice(0, 1));
      }, initialDelay);

      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText === targetText) {
      const isLastSentence = currentTextIndex === textArray.length - 1;
      if (!loop && isLastSentence) {
        return;
      }

      if (onSentenceComplete) {
        onSentenceComplete(currentText, currentTextIndex);
      }

      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          return;
        }

        setDisplayedText(prev => prev.slice(0, -1));
        return;
      }

      setDisplayedText(prev => targetText.slice(0, prev.length + 1));
    }, isDeleting ? deletingSpeed : variableSpeed ? getRandomSpeed() : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
    onSentenceComplete
  ]);

  const currentTargetText = textArray[currentTextIndex] ?? '';
  const processedText = reverseMode ? currentTargetText.split('').reverse().join('') : currentTargetText;
  const shouldHideCursor = hideCursorWhileTyping && (displayedText.length < processedText.length || isDeleting);

  return createElement(
    Component,
    {
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props
    },
    <span className="inline" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
