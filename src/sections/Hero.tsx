import Image from 'next/image';
import memojiImage from '../assets/images/memoji-computer.png';
import ArrowDown from '../assets/icons/arrow-down.svg';
import GrainImage from '../assets/images/grain.jpg';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-40 lg:py-60 relative z-0 overflow-x-clip'>
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      ></div>
      <div className='hero-ring'></div>
      <div className='hero-ring size-[820px]'></div>
      <div className='hero-ring size-[1020px]'></div>
      <div className='hero-ring size-[1220px]'></div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            className='size-[100px]'
            src={memojiImage}
            alt='Memoji peeking from behind laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for new projects.
            </div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences.
          </h1>
          <p className='mt-6 text-center text-white/60 md:text-lg'>
            I speciailize in building:{' '}
            <p className='italic font-bold my-2 tracking-wide'>
              🌹 Elegant 🔪 Cutting-Edge 🪜 Scalable
            </p>
            software that focuses on user experience and long-term reliability.
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
