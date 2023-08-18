import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoad/Img';
import Wrapper from '../../../components/wrapper/Wrapper';
import './HeroBanner.scss';

const HeroBanner = () => {
  const [movies, setMovies] = useState([]);
  //const [query, setQuery] = useState('');
  //const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/upcoming');

  const movie = data?.results[Math.floor(Math.random() * 20)];

  useEffect(() => {
    setMovies(movies);
  }, []);


  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <div className="hero-banner">
      {!loading && (
        <>
          <div className="backdrop-img">
            <Img src={url.backdrop + movie?.backdrop_path}/>
          </div>
         <div className="opacity-layer"></div>
        </>
      )}
        <Wrapper>
          <div className="hero-banner__content">
            <span className="title">{movie?.title}</span>
            <div className='banner__btns'>
              <button className='banner__btn'>Play</button>
              <button className='banner__btn'>My List</button>
            </div>
            <span className="subtitle">{truncate(movie?.overview, 180)}</span>
          </div>
        </Wrapper>
    </div>
  );
};

export default HeroBanner;
