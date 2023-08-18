import { useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Wrapper from '../wrapper/Wrapper';
import Img from '../lazyLoad/Img';
import PosterFallback from '../../assets/no-poster.png';
import CircleRating from '../ratings/CircleRating';
import Genres from '../genres/Genres';
import PropTypes from 'prop-types';

import './Carousel.scss';

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === 'left'
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const skItem = () => {
    return (
      <div className="skeleton__item">
        <div className="poster-block skeleton"></div>
        <div className="text-block">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <Wrapper>
        {title && <div className="carousel__title">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carousel-left__nav arrow"
          onClick={() => navigation('left')}
        />
        <BsFillArrowRightCircleFill
          className="carousel-right__nav arrow"
          onClick={() => navigation('right')}
        />
        {!loading ? (
          <div className="carousel__items" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carousel__item"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="poster-block">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-block">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        'MMM D, YYYY'
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loading-skeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.node,
  loading: PropTypes.node,
  endpoint: PropTypes.node,
  title: PropTypes.node,
};

export default Carousel;
