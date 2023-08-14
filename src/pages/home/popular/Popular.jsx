import { useState } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Popular = () => {
  const [endpoint, setEndpoint] = useState('movie');
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className="carousel__section">
      <Wrapper>
        <span className="carousel__title">Popular</span>
        <SwitchTabs data={['Movies', 'Shows']} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
