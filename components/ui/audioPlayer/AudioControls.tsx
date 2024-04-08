import playSVG from '@/public/icons/play.svg';
import pauseSVG from '@/public/icons/pause.svg';
import skipSVG from '@/public/icons/skip.svg';
import { type ReactElement } from 'react';
import Image from 'next/image';

interface Props {
  isPlaying: boolean;
  allowSkip: boolean;
  onPlayClick: () => void;
  onPauseClick: () => void;
  onSkipForwardClick: () => void;
  onSkipBackwardClick: () => void;
}

const AudioControls = ({
  isPlaying,
  allowSkip,
  onPlayClick,
  onPauseClick,
  onSkipForwardClick,
  onSkipBackwardClick
}: Props): ReactElement => {
  return (
    <div className="flex">
      {/* skip forwards */}
      {allowSkip && (
        <Image
          src={skipSVG}
          onClick={onSkipForwardClick}
          title={'Skip forwards'}
          alt="skip for"
          height={16}
          width={16}
          data-testid={'skip-forward'}
        />
      )}
      <Image
        src={isPlaying ? pauseSVG : playSVG}
        onClick={isPlaying ? onPauseClick : onPlayClick}
        title={isPlaying ? 'Pause' : 'Play'}
        alt="play"
        height={20}
        width={20}
        className="cursor-pointer"
        data-testid={'play-pause'}
      />
      {/* skip backwards */}
      {allowSkip && (
        <Image
          src={skipSVG}
          onClick={onSkipBackwardClick}
          title={'Skip backwards'}
          alt="skip back"
          height={16}
          width={16}
          className="rotate-180"
          data-testid={'skip-back'}
        />
      )}
    </div>
  );
};

export default AudioControls;
