import { useState } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const TopRated = () => {
  const [endpoint, setEndpoint] = useState('movie');
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className="carousel__section">
      <Wrapper>
        <span className="carousel__title">Top Rated</span>
        <SwitchTabs data={['Movies', 'Shows']} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
