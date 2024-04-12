import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import ProjectTile from './ProjectTile';

// import styles from './carouselStyles.module.css';

function Projects() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <ProjectTile />
        </CarouselItem>
        <CarouselItem>
          <ProjectTile />
        </CarouselItem>
        <CarouselItem>
          <ProjectTile />
        </CarouselItem>
        <CarouselItem>
          <ProjectTile />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Projects;
