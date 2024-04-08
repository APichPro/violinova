'use client';
import { IoIosArrowDown } from 'react-icons/io';

export default function ToolsBarButton({
  enableToolsBar,
  setEnableToolsBar
}: any) {
  return (
    <button
      title="toolBarButton"
      onClick={() => setEnableToolsBar(!enableToolsBar)}
      className="absolute top-6 left-6 md:top-2 md:left-4 h-12 aspect-square rounded-full bg-[#D56942] flex justify-center items-center"
    >
      <IoIosArrowDown
        size={32}
        className={`${
          enableToolsBar ? 'rotate-180 md:-rotate-90' : 'md:rotate-90'
        } transition duration-300 ease-in-out`}
        color={'#2f2e32'}
      />
    </button>
  );
}
