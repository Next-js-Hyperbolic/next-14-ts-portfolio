import { PropsWithChildren } from 'react';
import StarIcon from '../assets/icons/star.svg';

export const HeroOrbit = ({
  children,
  orbitPxSize,
  rotationDeg,
}: PropsWithChildren<{ orbitPxSize: number; rotationDeg: number }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className={`flex items-start justify-start`}
        style={{
          height: `${orbitPxSize}px`,
          width: `${orbitPxSize}px`,
          transform: `rotate(${rotationDeg}deg)`,
        }}
      >
        <div
          className='inline-flex'
          style={{ transform: `rotate(${rotationDeg * -1}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
