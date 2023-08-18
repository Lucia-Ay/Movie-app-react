import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './CircleRating.scss';

const CircleRating = ({ rating }) => {
  return (
    <div className="circle-rating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
        })}
      />
    </div>
  );
};

CircleRating.propTypes = {
  rating: PropTypes.node,
};

export default CircleRating;
