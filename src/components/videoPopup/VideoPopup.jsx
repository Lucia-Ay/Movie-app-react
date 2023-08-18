import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

import './VideoPopup.scss';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? 'visible' : ''}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  videoId: PropTypes.node,
  setVideoId: PropTypes.node,
};

export default VideoPopup;
