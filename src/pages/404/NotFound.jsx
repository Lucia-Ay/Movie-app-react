import './NotFound.scss';

import Wrapper from '../../components/wrapper/Wrapper';

const NotFound = () => {
  return (
    <div className="pageNotFound">
      <Wrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </Wrapper>
    </div>
  );
};

export default NotFound;
