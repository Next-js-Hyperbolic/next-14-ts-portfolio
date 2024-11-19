import Image from 'next/image';
import memojiImage from '../assets/images/memoji-computer.png';
import ArrowDown from '../assets/icons/arrow-down.svg';
import GrainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg';
import SparkleIcon from '../assets/icons/sparkle.svg';
import { HeroOrbit } from '../components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className='py-20 md:py-40 lg:py-60 relative z-0 overflow-x-clip'>
      {/* FADE IN/OUT TOP & BOTTOM EDGES */}
      <div className='overflow-y-clip absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        {/* BG IMAGE */}
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        ></div>

        {/* RINGS */}
        <div className='hero-ring'></div>
        <div className='hero-ring size-[850px]'></div>
        <div className='hero-ring size-[1040px]'></div>
        <div className='hero-ring size-[1220px]'></div>

        {/* STAR SVG */}
        <HeroOrbit orbitPxSize={800} rotationDeg={-72}>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit orbitPxSize={550} rotationDeg={20}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit orbitPxSize={590} rotationDeg={98}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        {/* SPARKLE SVG */}
        <HeroOrbit orbitPxSize={430} rotationDeg={-14}>
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit orbitPxSize={440} rotationDeg={78}>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit orbitPxSize={530} rotationDeg={178}>
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit orbitPxSize={710} rotationDeg={144}>
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>
        {/* CIRCLE CSS */}
        <HeroOrbit orbitPxSize={720} rotationDeg={85}>
          <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit orbitPxSize={520} rotationDeg={-42}>
          <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit orbitPxSize={650} rotationDeg={-5}>
          <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
      </div>

      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            className='size-[100px]'
            src={memojiImage}
            alt='Memoji peeking from behind laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 w-2.5 h-2.5 rounded-full shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] animate-pulse-custom'></div>
            <div className='text-sm font-medium'>
              Available for new projects.
            </div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-2xl md:text-4xl text-center mt-8 tracking-wide'>
            Industry Leading
            <p className='text-3xl md:text-5xl my-3 text-emerald-300'>
              Web & Software{' '}
            </p>
            Development
          </h1>
          <p className='mt-6 text-center text-white/60 md:text-lg'>
            I speciailize in building <span className='font-bold'>elegant</span>{' '}
            and <span className='font-bold'>scalable</span> software that
            focuses on user experience and long-term reliability.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
