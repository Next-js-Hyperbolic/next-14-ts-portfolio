import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import BookImage from '../assets/images/book-cover.png';
import Image from 'next/image';
import JavaScriptIcon from '../assets/icons/square-js.svg';
import HtmlIcon from '../assets/icons/html5.svg';
import CssIcon from '../assets/icons/css3.svg';
import ReactIcon from '../assets/icons/react.svg';
import ChromeIcon from '../assets/icons/chrome.svg';
import GithubIcon from '../assets/icons/github.svg';
import MapImage from '../assets/images/map.png';
import SmileMemoji from '../assets/images/memoji-smile.png';
import { CardHeader } from '../components/CardHeader';
import { ToolboxItems } from '../components/ToolboxItems';

const toolboxItems = [
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
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Drawing',
    emoji: '✏️',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Music',
    emoji: '🎧',
  },
  {
    title: 'Road Trips',
    emoji: '🚙',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
];

export const AboutSection = () => {
  return (
    <div className='py-16'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the literature shaping my perspectives.'
            />
            <div className='w-40 mx-auto mt-8'>
              <Image src={BookImage} alt='Book cover' />
            </div>
          </Card>
          <Card className='h-[320px] p-0'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I used to craft exception digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItems items={toolboxItems} className='mt-6' />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6'
              itemsWrapperClassName='-translate-x-1/2'
            />
          </Card>
          <Card>
            <CardHeader
              title='Beyond The Code'
              description='Explore my interest and hobbies beyond the digital realm.'
            />
            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt='map' />
            <Image src={SmileMemoji} alt='smiling emoji' className='' />
          </Card>
        </div>
      </div>
    </div>
  );
};
