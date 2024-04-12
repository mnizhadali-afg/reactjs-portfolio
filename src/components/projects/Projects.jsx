import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import ProjectTile from './ProjectTile';

function Projects() {
  return (
    <section className='bg-farbe3-50 min-h-screen pt-44'>
      <div className='container'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <ProjectTile />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
