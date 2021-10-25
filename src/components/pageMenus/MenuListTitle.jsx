import React from 'react';

const menuTitleStyle = {
  menuTitle: {
    textAlign: 'center',
    color: 'darkblue',
    borderBottom: 'solid 1px darkblue'
  }
}

const MenuListTitle = ({ title }) => {
  return (
    <div style={menuTitleStyle.menuTitle}>
      <h2>{title}</h2>
    </div>
  )
}

export default MenuListTitle;
