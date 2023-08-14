import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoad/Img';
import Wrapper from '../../../components/wrapper/Wrapper';
import './HeroBanner.scss';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/upcoming');

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url.backdrop]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <Wrapper>
        <div className="hero-banner__content">
          <span className="title">See what&apos;s next</span>
          <span className="subtitle">
            Unlimited movies, TV shows, and more. <br /> Watch anywhere, Cancel
            anytime.
          </span>

          <div className="search__input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
