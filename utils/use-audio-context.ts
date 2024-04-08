import { useRef, useEffect } from 'react';

export default function useAudioContext() {
  const audio = useRef<AudioContext>();
  useEffect(() => {
    audio.current = new AudioContext();
  }, []);
  return audio;
}
