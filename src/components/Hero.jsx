import GradientCircle from './GradientCircle';
import MessageBox from './MessageBox';

function Hero() {
  return (
    <section className='bg-farbe3-50 flex items-center justify-center min-h-screen'>
      {/* TODO: Main Circle */}
      <GradientCircle w={600} h={600} />

      {/* TODO: MessageBox: Hello */}
      <div className='absolute -translate-x-[22rem] -translate-y-[10rem]'>
        <MessageBox>
          <div className='flex items-center'>
            <p className='text-5xl mr-2 farbe3'>👋🏻</p>
            <div>
              <p className='text-farbe1-500 tracking-wide font-extralight'>
                Hello, {"I'm"}
              </p>
              <p className='text-2xl font-extrabold text-farbe1-950'>
                Ali Mousavi
              </p>
            </div>
          </div>
        </MessageBox>
      </div>

      {/* TODO: MessageBox: Headline */}
      <div className='absolute -translate-x-[22rem] -translate-y-[2rem]'>
        <MessageBox>
          <p className='text-farbe3-700 tracking-widest text-md font-medium uppercase mx-4'>
            Frontend
          </p>
          <p className='text-farbe3-700 text-xs tracking-[0.125rem] uppercase mx-4'>
            Developer
          </p>
        </MessageBox>
      </div>

      {/* TODO: JS Logo */}
      <div className='absolute translate-x-[20rem] -translate-y-[12rem]'>
        <GradientCircle w={68} h={68} />
        <img
          src='/assets/js.svg'
          alt='js logo'
          className='absolute -translate-y-[60px] translate-x-[10px] rotate-12 w-[50px] h-[50px]'
        />
      </div>

      {/* TODO: React.js Logo */}
      <div className='absolute translate-x-[24rem]'>
        <GradientCircle w={85} h={85} />
        <img
          src='/assets/reactjs.svg'
          alt='reactjs logo'
          className='absolute -translate-y-[75px] translate-x-[12px] rotate-12 w-[65px] h-[65px]'
        />
      </div>

      {/* TODO: TailwindCSS Logo */}
      <div className='absolute translate-x-[20rem] translate-y-[14rem]'>
        <GradientCircle w={55} h={55} />
        <img
          src='/assets/tw.svg'
          alt='tw logo'
          className='absolute -translate-y-[3rem] translate-x-[.5rem] rotate-12 w-[40px] h-[40px]'
        />
      </div>

      {/* TODO: Git Logo */}
      <div className='absolute translate-x-[10rem] translate-y-[20rem]'>
        <GradientCircle w={40} h={40} />
        <img
          src='/assets/git.svg'
          alt='git logo'
          className='absolute -translate-y-[35px] translate-x-[5px] w-[30px] h-[30px]'
        />
      </div>

      {/* TODO: npm Logo */}
      <div className='absolute -translate-x-[25rem] translate-y-[8rem]'>
        <GradientCircle w={55} h={55} />
        <img
          src='/assets/npm.svg'
          alt='npm logo'
          className='absolute -translate-y-[47px] translate-x-[8px] -rotate-[25deg] w-[40px] h-[40px]'
        />
      </div>

      {/* TODO: Figma Logo */}
      <div className='absolute -translate-x-[20rem] translate-y-[18rem]'>
        <GradientCircle w={68} h={68} />
        <img
          src='/assets/figma.svg'
          alt='figma logo'
          className='absolute -translate-y-[60px] translate-x-[10px] -rotate-[35deg] w-[50px] h-[50px]'
        />
      </div>

      {/* TODO: GitHub Logo */}
      <div className='absolute -translate-x-[8rem] translate-y-[23rem]'>
        <GradientCircle w={40} h={40} />
        <img
          src='/assets/github.svg'
          alt='github logo'
          className='absolute -translate-y-[35px] translate-x-[5px] w-[30px] h-[30px] -rotate-45'
        />
      </div>
    </section>
  );
}
export default Hero;
