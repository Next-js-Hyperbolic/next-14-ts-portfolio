import Image from 'next/image';
import memojiAvatar1 from '../assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '../assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '../assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '../assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '../assets/images/memoji-avatar-5.png';
import { SectionHeader } from '../components/SectionHeader';
import GrainImage from '../assets/images/grain.jpg';
import { Card } from '../components/Card';
import { Fragment } from 'react';

// TODO: Modify these to fit my needs
const testimonials = [
  {
    name: 'Kevin Westfall',
    position: 'Founder & CEO @ Vroom',
    text: 'Karsen was instrumental to our success in the early days of Vroom (previously AutoAmerica). We relied heavily on our web presence which Karsen delivered in a timely manner while exceeding our expectations.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Meryam Alaoui',
    position: 'Vice President @ American Express',
    text: "Karsen is one of the best communicators I've had the pleasure of working with, let alone his ability to create stunning web applications. I always look forward to our next project together.",
    avatar: memojiAvatar4,
  },
  {
    name: 'H. Martin Westfall',
    position: 'Senior Managing Partner @ Coopers & Lybrand',
    text: 'Karsen has a great eye for detail along with an uncanny ability to bring our ideas to life in a meaningful way. He is also one of the hardest and smartest workers which makes him very efficient.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Jonathan Robins',
    position: 'Chief Technology Officer @ Intellicheck',
    text: 'Working with Karsen was a pleasure. His expertise in front-end and back-end development along with an unparalleled work ethic allowed him to rebuild our entire product in a modern tech-stack a lot quicker than we expected.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Sean Kaim',
    position: 'Director of Engineering @ Intellicheck',
    text: 'Karsen is always a pleasure to work with being as driven and capable as he is. He also has quite the obsession with keyboards.',
    avatar: memojiAvatar3,
  },
  {
    name: 'Brandy Garland',
    position: 'Product Manager @ Intellicheck',
    text: "Karsen's work on our front and back-end systems has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients & Colleagues'
          title='What Folks Say About Me'
          description="Don't just take my word for it. See what my clients and colleagues say about my work."
        />

        <div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
          <div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card
                    key={testimonial.name}
                    className='max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300'
                  >
                    <div className='flex gap-4 items-center'>
                      <div className='size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0'>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='max-h-full'
                        />
                      </div>
                      <div>
                        <div className='font-semibold'>{testimonial.name}</div>
                        <div className='text-sm text-white/40'>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className='mt-4 md:mt-6 text-sm md:text-base'>
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
