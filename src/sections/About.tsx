'use client';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import BookImage from '../assets/images/book-cover.png';
import Image from 'next/image';
import PythonIcon from '../assets/icons/python.svg';
import JavaScriptIcon from '../assets/icons/square-js.svg';
import HtmlIcon from '../assets/icons/html5.svg';
import CssIcon from '../assets/icons/css3.svg';
import ReactIcon from '../assets/icons/react.svg';
import ChromeIcon from '../assets/icons/chrome.svg';
import GithubIcon from '../assets/icons/github.svg';
import NextjsIcon from '../assets/icons/nextjs.svg';
import AwsIcon from '../assets/icons/aws.svg';
import MongodbIcon from '../assets/icons/mongodb.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import ElasticIcon from '../assets/icons/elasticsearch.svg';
import CloudflareIcon from '../assets/icons/cloudflare.svg';
import MapImage from '../assets/images/map.png';
import SmileMemoji from '../assets/images/memoji-smile.png';
import { CardHeader } from '../components/CardHeader';
import { ToolboxItems } from '../components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

// TODO: Move this data to Postgres
const toolboxItems = [
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'NextJs',
    iconType: NextjsIcon,
  },
  {
    title: 'AWS',
    iconType: AwsIcon,
  },
  {
    title: 'MongoDB',
    iconType: MongodbIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon,
  },
  {
    title: 'Elastic',
    iconType: ElasticIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
  {
    title: 'CloudFlare',
    iconType: CloudflareIcon,
  },
];

const hobbies = [
  {
    title: 'Drawing',
    emoji: '✏️',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Road Trips',
    emoji: '🚙',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Audio Books',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const dragConstraintRef = useRef(null);

  return (
    <section id='about'>
      <div className='py-20 lg:py-28'>
        <div className='container'>
          <SectionHeader
            eyebrow='About Me'
            title='A Glimpse Into My World'
            description='Learn more about who I am, what I do, and what inspires me.'
          />
          <div className='mt-20 flex flex-col gap-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
              <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
                <CardHeader
                  title='My Reads'
                  description='Explore the literature currently shaping my perspectives.'
                />
                <div className='w-40 mx-auto mt-2 md:mt-0'>
                  <Image src={BookImage} alt='Book cover' />
                </div>
              </Card>
              <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
                <CardHeader
                  title='My Toolbox'
                  description='Explore the technologies and tools I used to craft exception digital experiences.'
                  className=''
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=''
                  itemsWrapperClassName='animate-move-left [animation-duration:30s]'
                />
                <ToolboxItems
                  items={toolboxItems}
                  className='mt-6'
                  itemsWrapperClassName='-translate-x-1/2 animate-move-right [animation-duration:20s]'
                />
              </Card>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3'>
              <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
                <CardHeader
                  title='Beyond The Code'
                  description='Explore my interest and hobbies beyond the digital realm.'
                  className='px-6 py-6'
                />
                <div className='relative flex-1' ref={dragConstraintRef}>
                  {hobbies.map(hobby => (
                    <motion.div
                      key={hobby.title}
                      className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={dragConstraintRef}
                    >
                      <span className='font-medium text-gray-950'>
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
                <Image
                  // TODO: CHANGE MAP IMAGE
                  src={MapImage}
                  alt='map'
                  className='h-full w-full object-cover object-left-top'
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:asbolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                  <Image
                    src={SmileMemoji}
                    alt='smiling emoji'
                    className='size-20'
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
