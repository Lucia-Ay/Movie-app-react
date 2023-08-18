import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Genres.scss';

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => {
        //if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.node,
};

export default Genres;
