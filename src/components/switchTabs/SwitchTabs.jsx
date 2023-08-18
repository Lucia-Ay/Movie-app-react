import { useState } from 'react';
import './SwitchTabs.scss';
import PropTypes from 'prop-types';

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switch-tabs">
      <div className="tab__items">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tab__item ${selectedTab === index ? 'active' : ''}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="moving-bg" style={{ left }}></span>
      </div>
    </div>
  );
};

SwitchTabs.propTypes = {
  data: PropTypes.node,
  onTabChange: PropTypes.node,
};

export default SwitchTabs;
