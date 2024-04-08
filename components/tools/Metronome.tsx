'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Metronome() {
  const [bpm, setBpm] = useState(100);
  const [mesure, setMesure] = useState(4);
  const [tickCount, setTickCount] = useState(0);
  const [falseArray, setFalseArray] = useState(
    Array.from({ length: mesure }, () => false)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const testRef = useRef(true);
  const [testState, setTestState] = useState(true);

  useEffect(() => {
    setFalseArray(Array.from({ length: mesure }, () => false));
  }, [mesure]);

  useEffect(() => {
    let timer: any;
    const audioTick = new Audio('/sounds/Tick.mp3');
    const audioTick2 = new Audio('/sounds/Tick2.wav');

    const playTick = () => {
      testRef.current = !testRef.current;
      setTestState(testRef.current);
      setTickCount((prevTickCount) => {
        if (prevTickCount + 1 > mesure) {
          audioTick2.play();
          return 1;
        } else {
          audioTick.play();
          return prevTickCount + 1;
        }
      });
    };

    if (isPlaying) {
      timer = setInterval(playTick, (60 / bpm) * 1000);
    }

    return () => clearInterval(timer);
  }, [isPlaying, bpm, mesure]);

  const handleBpmChange = (e: any) => {
    const newBpm = parseInt(e.target.value, 10);
    if (newBpm <= 300 && newBpm > 0) {
      setBpm(newBpm);
    } else if (!newBpm) {
      setBpm(0);
    } else {
      console.log('bpm must be less than or equal to 8.');
    }
  };

  const handleMesureChange = (e: any) => {
    const newMesure = parseInt(e.target.value, 10);
    if (newMesure <= 16 && newMesure > 0) {
      setMesure(newMesure);
    } else if (!newMesure) {
      setMesure(0);
    } else {
      console.log('bpm must be less than or equal to 8.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-center overflow-hidden">
        {/* <motion.div
          className="relative w-full aspect-square rounded-full"
          animate={{ rotate: testState ? -160 : -20 }}
          transition={{ type: "tween", duration: (60 / bpm) }}
        >
          <div className="flex justify-end items-center w-full aspect-square">
            <div className="bg-[#eae1d6] w-1/2 h-[4px] rounded-full"/>
          </div>
        </motion.div> */}
      </div>
      <div className="relative flex flex-col">
        <div className="flex w-full justify-evenly">
          {falseArray.map((mesure, index) => (
            <div
              className={`w-4 aspect-square rounded-full ${
                index < tickCount ? 'bg-[#eae1d6]' : ''
              }`}
              key={index}
            />
          ))}
        </div>
        <button
          className="w-full h-12 rounded-full [background:linear-gradient(180deg,rgb(226,119,76)_0%,rgb(211,103,65)_100%)]"
          onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}
        >
          <h1>{!isPlaying ? 'Start' : 'Stop'}</h1>
        </button>
        <div className="h-12 w-full flex justify-center items-center">
          <input
            title="bpmSlider"
            type="range"
            min="1"
            max="300"
            value={bpm}
            onChange={handleBpmChange}
            className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#df744a]"
          />
          <input
            className="bg-transparent text-center w-20"
            title="bpm"
            type="number"
            value={bpm}
            onChange={handleBpmChange}
          />
        </div>
        <div className="h-12 w-full flex justify-center items-center">
          <input
            title="mesureSlider"
            type="range"
            min="1"
            max="16"
            value={mesure}
            onChange={handleMesureChange}
            className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#df744a]"
          />
          <input
            className="bg-transparent text-center w-20"
            title="bpm"
            type="number"
            value={mesure}
            onChange={handleMesureChange}
          />
        </div>
        {/* <div className="flex w-full justify-evenly gap-8">
          <div className="w-full flex flex-col justify-center items-center text-center text-[#eae1d6] text-[24px]">
            <div className="w-full h-[48px] rounded-[100px] border-2 border-solid border-[#df744a]">
              <h1 className="">BPM</h1>
            </div>
            <input className="w-full bg-transparent text-center" title="bpm" type="number" value={bpm} onChange={handleBpmChange} />
          </div>

          <div className="w-full flex flex-col justify-center items-center text-center text-[#eae1d6] text-[24px]">
            <button
              className="w-full h-[48px] rounded-[100px] [background:linear-gradient(180deg,rgb(226,119,76)_0%,rgb(211,103,65)_100%)]"
              onClick={() => setDoremi(!doremi)}
            >
              <h1 className="">NOT</h1>
            </button>
            {doremi ? "DOREMI" : "ABC"}
          </div>

          <div className="w-full flex flex-col justify-center items-center text-center text-[#eae1d6] text-[24px]">
            <div className="w-full h-[48px] rounded-[100px] border-2 border-solid border-[#df744a]">
              <h1 className="">BAR</h1>
            </div>
            <input className="bg-transparent text-center w-full" title="bmesurepm" type="number" value={mesure} onChange={handleMesureChange} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
