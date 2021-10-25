import React from 'react';
import MenuListItem from './MenuListItem';
import MenuListTitle from './MenuListTitle';


const menuListStyle = {
  menuList: {
    padding: '15px',
    margin: '20px 10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px -10px slateblue',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'whitesmoke',   
    backgroundColor: 'lightyellow',
  },
  menuListUlContainer: {
    marginTop: '15px',
  },
  menuListUl: {
    padding: '0px',
  }
}

const MenuList = ({ menu }) => {

  const showListItems = menu.items.map(item => {
    return (
        <ul style={menuListStyle.menuListUl}>
          <MenuListItem itemName={item.item} link={item.link} />
        </ul>

    )
  })

  const displayMenu = () => {    
    return (
      <div style={menuListStyle.menuList}>
        <MenuListTitle title={menu.title} />
        <div style={menuListStyle.menuListUlContainer}>
          {showListItems}
        </div>

      </div>
    )
  }

  return (
    <div>
      {displayMenu()}
    </div>
  )
}

export default MenuList;
