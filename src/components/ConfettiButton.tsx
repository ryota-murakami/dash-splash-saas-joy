
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConfettiButtonProps {
  className?: string;
  onConfetti: () => void;
}

const ConfettiButton = ({ className, onConfetti }: ConfettiButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    onConfetti();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <Button
      className={cn('relative overflow-hidden', className, 
        isAnimating && 'animate-[pulse_0.5s_ease-in-out]'
      )}
      onClick={handleClick}
    >
      {isAnimating ? 'Woohoo! 🎉' : 'Celebrate!'}
    </Button>
  );
};

export default ConfettiButton;
