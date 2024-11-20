import darkSaasLandingPage from '../assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '../assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '../assets/images/ai-startup-landing-page.png';
import CheckIcon from '../assets/icons/check-circle.svg';
import ArrowUpRightIcon from '../assets/icons/arrow-up-right.svg';
import GrainImage from '../assets/images/grain.jpg';
import Image from 'next/image';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

// TODO: Replace images with actual site images or AI generated image
const portfolioProjects = [
  {
    company: 'SpotLease',
    year: '2023',
    title: 'Spare Space Leasing Platform',
    results: [
      { title: 'Full-stack React Native | Node | AWS ' },
      { title: 'Stripe Connect payment services' },
      { title: 'In-app instant messaging' },
    ],
    link: 'https://spot.lease/',
    image: aiStartupLandingPage,
  },
  {
    company: 'Intellicheck',
    year: '2022',
    title: 'Mobile Browser ID Validation',
    results: [
      { title: 'Full-stack React | Node | Cassandra' },
      { title: 'Automatic ID image capture + cropping' },
      { title: 'Facial liveness & comparison' },
      { title: 'Leveraged mobile hardware (cameras)' },
      { title: 'Omni-platform compatibility' },
      { title: 'User authentication' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'DragonPy Bot',
    year: '2021',
    title: 'OSRS Mobile (game) Automation',
    results: [
      { title: 'Python Desktop App' },
      { title: 'Full-stack web React | Node | Stripe | AWS' },
      { title: 'Automated 100+ complex game processes' },
      { title: 'OCR (optical character recognition)' },
      { title: 'Tesseract image comparisons' },
      { title: 'Full GUI (graphical user interface)' },
      { title: 'Robust desktop licensing system' },
      { title: 'Software authentication & encryption' },
    ],
    link: 'https://www.dragonpybot.com/',
    image: lightSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 sm:mt-8'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-World Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        {/* PROJECT CARDS */}
        <div className='flex flex-col mt-10 gap-20 md:mt-20'>
          {portfolioProjects.map((project, idx) => (
            // CARD
            <Card
              key={project.title}
              className=' px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{ top: `calc(64px + ${idx * 40}px` }}
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              ></div>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map(result => (
                      <li className='flex gap-2 text-sm md:text-base text-white/50'>
                        <CheckIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
