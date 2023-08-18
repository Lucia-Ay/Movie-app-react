import { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

import './Header.scss';

import Wrapper from '../wrapper/Wrapper';
import logo from '../../assets/netflix-logo.png';

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('show');
      }
    } else {
      setShow('top');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
    setShow('show');
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie');
    } else {
      navigate('/explore/tv');
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <Wrapper>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="" />
        </div>
        <ul className="menu__items">
          <li className="menu__item" onClick={() => navigationHandler('movie')}>
            Movies
          </li>
          <li className="menu__item" onClick={() => navigationHandler('tv')}>
            TV Shows
          </li>
          <li className="menu__item">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobile-menu__items">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </Wrapper>
      {showSearch && (
        <div className="search__bar">
          <Wrapper>
            <div className="search__input">
              <input
                type="text"
                placeholder="Search for a movie or show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false), setShow('top');
                }}
              />
            </div>
          </Wrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
