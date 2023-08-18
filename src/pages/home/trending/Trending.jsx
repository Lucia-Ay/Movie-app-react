import { useState } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Trending = () => {
  const [endpoint, setEndpoint] = useState('day');
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };

  return (
    <div className="carousel__section">
      <Wrapper>
        <span className="carousel__title">Trending Now</span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
