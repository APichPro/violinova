'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ToolsBarButton from '@/components/ui/rightBar/ToolsBarButton';

const Analyzer = dynamic(() => import('@/components/tools/Analyzer'), {
  ssr: false
});

const Metronome = dynamic(() => import('@/components/tools/Metronome'), {
  ssr: false
});

export default function ToolsBoard() {
  const [enableToolsBar, setEnableToolsBar] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-center items-center">
      <ToolsBarButton
        enableToolsBar={enableToolsBar}
        setEnableToolsBar={setEnableToolsBar}
      />
      <div
        className={`flex flex-col justify-evenly overflow-hidden ${
          enableToolsBar ? ' h-full md:w-full' : 'h-0 md:w-0'
        }`}
      >
        <Analyzer />
        <Metronome />
      </div>
    </div>
  );
}
