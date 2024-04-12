import PropTypes from 'prop-types';

function SkillCard({ imgSrc, title, description }) {
  console.log(imgSrc);
  return (
    <div className='w-3/5 h-3/5 aspect-square'>
      <div className='flex items-center justify-center w-full h-full px-[5rem] py-[5rem] bg-gradient-to-b from-farbe1-100 to-farbe3-50'>
        <img src={`/assets/${imgSrc}.svg`} alt={`${imgSrc}`} />
      </div>
      <div className='py-4 md:py-8'>
        <h3 className='text-xl font-bold my-6 text-farbe1-950'>{title}</h3>
        <p className='leading-7 font-light text-farbe1-800'>{description}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.oneOfType([PropTypes.string]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default SkillCard;
