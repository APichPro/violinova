import { type ReactElement } from 'react';

interface Props {
  seconds?: number;
}

const Timer = ({ seconds }: Props): ReactElement => {
  return (
    <div className="text-black text-[12px]" data-testid={'timer'}>
      {seconds !== undefined
        ? `${Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0')}:${String(Math.round(seconds % 60)).padStart(
            2,
            '0'
          )}`
        : '--:--'}
    </div>
  );
};

export default Timer;
