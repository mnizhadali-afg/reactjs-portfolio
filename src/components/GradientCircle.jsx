import PropTypes from 'prop-types';

function GradientCircle({ w, h }) {
  return (
    <div
      style={{ width: `${w}px`, height: `${h}px` }}
      className='rounded-full bg-gradient-to-l from-farbe3-100 to-farbe1-100 rotate-45'
    ></div>
  );
}

GradientCircle.propTypes = {
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default GradientCircle;
