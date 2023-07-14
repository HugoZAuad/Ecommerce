import dnclogo from '../../assets/logo-dnc.svg'
import './index.scss'

const Header = () => {
  return(
    //BLOCK
  <div className='header'>
      <img className='header__img' src={dnclogo} alt="dnc logo" />
  </div>
  );
};

export default Header