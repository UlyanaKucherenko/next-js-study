import { useState } from 'react';
import Team from '../../pages/about/team';
import Contacts from '../../pages/about/contacts';
import styles from '../../styles/Navbar.module.scss';

const aboutTabs = [
  { id: 1, title: 'Team', tabName: 'Team' },
  { id: 2, title: 'Contacts', tabName: 'Contacts' },
];

const AboutLayout = () => {
  const [ activeTab, setActiveTab ] = useState('Team');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="navigation-menu">
        {aboutTabs.map(({id,title, tabName}) => (
          <li key={id}
              onClick={() => handleTabClick(tabName)}
              className={activeTab === tabName ? styles.active : null}
          >
            {title}
          </li>
        ))}
      </ul>

      { activeTab === 'Team' && (
        <div className="tab-content">
          <Team/>
        </div>
      ) }
      { activeTab === 'Contacts' && (
        <div className="tab-content">
          <Contacts/>
        </div>
      ) }
    </div>
  );
};

export default AboutLayout;
