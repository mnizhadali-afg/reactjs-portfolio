import PropTypes from 'prop-types';

function MessageBox({ children }) {
  return (
    <div className='bg-[#fcfcfc] py-4 px-6 rounded-xl shadow-wide cursor-pointer'>
      {children}
    </div>
  );
}

MessageBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageBox;
