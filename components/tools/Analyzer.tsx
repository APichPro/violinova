'use client';
import { useEffect, useRef, useState, memo } from 'react';
import { Frequency, FFT, Meter, UserMedia, start, context } from 'tone';
import { motion } from 'framer-motion';
// @ts-ignore
import ml5 from 'ml5';

export default memo(function Analyzer() {
  const audioStream = useRef<MediaStream>();
  const pitchDetectorRef = useRef<any>();
  const [tunerStarted, setTunerStarted] = useState(false);
  const audioContextRef = useAudioContext();
  const [frequency, setFrequency] = useState(0);
  const [differences, setDifferences] = useState<number>(0);
  const [doremi, setDoremi] = useState(true);

  function abcToDoremi(abcNote: string): string {
    const noteMap: Record<string, string> = {
      C: 'Do',
      D: 'Re',
      E: 'Mi',
      F: 'Fa',
      G: 'Sol',
      A: 'La',
      B: 'Si'
    };
    const noteMatch = abcNote.match(/[A-Ga-g]/);
    if (!noteMatch) {
      throw new Error('Invalid ABC note format');
    }
    const note = noteMatch[0].toUpperCase();
    const accidental = abcNote.includes('#')
      ? '#'
      : abcNote.includes('b')
      ? 'b'
      : '';
    let doremiNote = noteMap[note];
    if (accidental) {
      doremiNote += accidental;
    }
    return doremiNote;
  }
  function useAudioContext() {
    const audio = useRef<AudioContext>();
    useEffect(() => {
      audio.current = new AudioContext();
    }, []);
    return audio;
  }
  function useInterval(callback: any, delay: any) {
    const savedCallback = useRef<any>();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  useEffect(() => {
    const fetchData = async () => {
      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      pitchDetectorRef.current = ml5.pitchDetection(
        '/crepe/',
        audioContextRef.current,
        micStream,
        () => null
      );
      audioStream.current = micStream;
    };
    fetchData();
    return () => {
      if (audioStream.current) {
        audioStream.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [tunerStarted]);

  useInterval(() => {
    if (!tunerStarted) {
      return;
    }
    if (!pitchDetectorRef.current) {
      return;
    }
    pitchDetectorRef.current.getPitch((err: any, frequency: any) => {
      if (frequency) {
        setFrequency(frequency);
        setDifferences(
          1200 *
            Math.log2(
              frequency /
                Frequency(Frequency(frequency).toMidi(), 'midi').toFrequency()
            )
        );
      }
    });
  }, 100);
  function startTuner() {
    setTunerStarted(!tunerStarted);
    tunerStarted
      ? audioContextRef.current?.suspend()
      : audioContextRef.current?.resume();
  }
  return (
    <div className="relative overflow-hidden w-full flex flex-col justify-center p-4">
      <div className="flex flex-col justify-between items-center w-[200px] aspect-square rounded-ful">
        {/* <motion.div
            className="absolute w-[200px] aspect-square"
            animate={{ rotate: differences - 90 }}
            transition={{ type: 'tween' }}
          >
            <div className="flex justify-end items-center w-full aspect-square">
              <div className="bg-[#eae1d6] w-1/3 h-[4px] rounded-full" />
            </div>
          </motion.div> */}
        {/* <div className="flex flex-row gap-4">
          <div className="w-1 h-3 mt-[19px] -rotate-[21deg] bg-[#de7349] rounded-full" />
          <div className="w-1 h-4 mt-[9px] -rotate-[15deg] bg-[#de7349] rounded-full" />
          <div className="w-1 h-5 mt-[3px] -rotate-[10deg] bg-[#de7349] rounded-full" />
          <div className="w-1 h-6 mt-0 bg-[#de7349] rounded-full" />
          <div className="w-1 h-5 mt-[3px] rotate-[10deg] bg-[#de7349] rounded-full" />
          <div className="w-1 h-4 mt-[9px] rotate-[15deg] bg-[#de7349] rounded-full" />
          <div className="w-1 h-3 mt-[19px] rotate-[21deg] bg-[#de7349] rounded-full" />
        </div> */}
        <button
          title="start"
          className="text-[#eae1d6] text-6xl z-10"
          onClick={() => startTuner()}
        >
          {!tunerStarted
            ? 'Go'
            : !doremi
            ? Frequency(frequency, 'hz').toNote()
            : abcToDoremi(Frequency(frequency, 'hz').toNote())}
        </button>
        <h1 className="text-[#eae1d6] text-xl">{differences.toFixed()}</h1>
      </div>
      {/* <button
        className="w-full h-12 rounded-full [background:linear-gradient(180deg,rgb(226,119,76)_0%,rgb(211,103,65)_100%)]"
        onClick={() => setDoremi(!doremi)}
      >
        <h1 className="">{doremi ? 'DOREMI' : 'ABC'}</h1>
      </button> */}
    </div>
  );
});
