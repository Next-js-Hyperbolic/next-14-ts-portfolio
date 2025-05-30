import darkSaasLandingPage from '../assets/images/intellicheck-landing-page.png';
import lightSaasLandingPage from '../assets/images/dragonpybot-landing-page.png';
import aiStartupLandingPage from '../assets/images/spotlease-landing-page.png';
import ycDirectoryLandingPage from '../assets/images/ycdirectory-landing-page.png';
import CheckIcon from '../assets/icons/check-circle.svg';
import ArrowUpRightIcon from '../assets/icons/arrow-up-right.svg';
import GrainImage from '../assets/images/grain.jpg';
import Image from 'next/image';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

// Macbook images generated from: https://mediamodifier.com/mockup/macbook-laptop-front-view-mockup-generator/968

const portfolioProjects = [
  {
    company: 'YC Directory',
    year: '2024',
    title: 'NextJS 15 | Idea Pitching App',
    results: [
      { title: 'Full-stack NextJS | NextAuth | Sanity ' },
      { title: 'Sentry error monitoring' },
      { title: 'Parallel & Sequential Requests' },
      { title: 'Sanity CDN' },
    ],
    link: 'https://ys-directory-nextjs-8i64i0ilb-karsenhs-projects.vercel.app/',
    image: ycDirectoryLandingPage,
  },
  {
    company: 'SpotLease',
    year: '2024',
    title: 'React Native | Space Leasing App',
    results: [
      { title: 'Full-stack React-Native | Node | AWS ' },
      { title: 'Stripe Connect payment services' },
      { title: 'In-app instant messaging' },
      { title: 'ElasticSearch indexing' },
      { title: 'AWS database' },
    ],
    link: 'https://spot.lease/',
    image: aiStartupLandingPage,
  },
  {
    company: 'Intellicheck',
    year: '2022-2023',
    title: 'React | Web Identity Validation',
    results: [
      { title: 'Full-stack React | Node | AWS' },
      { title: 'Integrated with mobile hardware (cameras)' },
      { title: 'Automatic ID image capture + cropping' },
      { title: 'Facial liveness & comparison' },
      { title: 'Conditional Company Branding' },
      { title: 'Omni-platform compatibility' },
    ],
    link: '',
    image: darkSaasLandingPage,
  },
  {
    company: 'DragonPy Bot',
    year: '2021',
    title: 'Python | Video Game Bot + Desktop GUI',
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
    <section className='pb-16 sm:mt-8' id='projects'>
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
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm md:text-base text-white/50'
                      >
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
