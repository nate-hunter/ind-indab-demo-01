import { ArrowRight } from '@mui/icons-material';
import React from 'react';

const menuItemStyle = {
  list: {
    listStyle: 'none',
    padding: '2px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'salmon',
    
  }
}

const MenuListItem = ({ itemName, link }) => {
  return (
    <div style={menuItemStyle.list}>
      <a href={link} className="link" target="_blank" rel="noopener noreferrer">
        <li style={menuItemStyle.listItem}>
          <ArrowRight />
          {itemName}
        </li>
      </a>
    </div>
  )
}

export default MenuListItem;
