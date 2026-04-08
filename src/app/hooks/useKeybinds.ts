import { useEffect } from 'react';

export type KeyboardKeyType = {
  key: string;
  isCtrl?: boolean;
  isShift?: boolean;
  isAlt?: boolean;
}

export default function useKeybinds(onKeybindPress: () => void, mainKey: KeyboardKeyType) {
  const matchModifier = (required?: boolean, pressed?: boolean) => required ? !!pressed : true;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (
        matchModifier(mainKey.isCtrl, e.ctrlKey) &&
        matchModifier(mainKey.isShift, e.shiftKey) &&
        matchModifier(mainKey.isAlt, e.altKey) &&
        mainKey.key === e.key
      ) {
        onKeybindPress();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onKeybindPress, mainKey]);
}