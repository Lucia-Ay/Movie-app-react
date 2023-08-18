import './Footer.scss';

import Wrapper from '../wrapper/Wrapper';

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <p>Netflix Turkiye</p>
        <div className="infoText">Questions? Call 000-800-040-1843</div>
        <ul className="menu__items">
          <li className="menu__item">Terms Of Use</li>
          <li className="menu__item">Privacy-Policy</li>
          <li className="menu__item">About</li>
          <li className="menu__item">Blog</li>
          <li className="menu__item">FAQ</li>
        </ul>
        <small>&copy; Lucia Aydin. All rights reserved.</small>
      </Wrapper>
    </footer>
  );
};

export default Footer;
