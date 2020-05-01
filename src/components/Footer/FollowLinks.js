import React from 'react';
import getIcon from '../../utils/getIcon';
import Icon from '../Icon';

function FollowLinks({ socialLinks }) {
  return (
    <div className="footer_contact">
      <h2 className="section_heading">Follow us on:</h2>
      <div className="footer_contact_link">
        {socialLinks.map((contact, index) => {
          return (
            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
              <Icon name={contact.label} icon={getIcon(contact.icon)} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FollowLinks;
