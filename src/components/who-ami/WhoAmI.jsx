import SkillCard from './SkillCard';

function WhoAmI() {
  return (
    <section className='min-h-screen'>
      <div className='container mx-auto'>
        <h2 className='text-center text-2xl font-bold capitalize mt-36'>
          I know <span className='text-[#EEC312]'>how to create</span> engaging{' '}
          <div>
            <span className='text-[#EEC312]'>frontend experiences</span> with
            precision.
          </div>
        </h2>
        <div className='flex lg:gap-[20rem] md:gap-[3rem] pt-32'>
          <SkillCard
            imgSrc='sleekness'
            title='Sleekness'
            description='Achieving sleekness in design, ensuring visually appealing and
        user-friendly interfaces.'
          />
          <SkillCard
            imgSrc='interaction'
            title='Interaction'
            description='Implementing dynamic & responsive features, to enhance user engagement and satisfaction.'
          />
          <SkillCard
            imgSrc='consistency'
            title='Consistency'
            description='Prioritize consistency across platforms, ensuring seamless performance and usability for all users.'
          />
        </div>
      </div>
    </section>
  );
}
export default WhoAmI;
