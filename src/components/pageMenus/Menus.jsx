import React from 'react';
import MenuList from './MenuList';
import { assetManagementMenu } from '../../menuOptions';
 

const menuStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // backgroundColor: 'slateblue',
    marginTop: '20px',
    width: '90%',
    
  }
}
const Menus = () => {
  const handleMenuLists = assetManagementMenu.map(list => (
    <MenuList menu={list} />
  ))

  return (
    <div style={menuStyle.container}>
      {handleMenuLists}
    </div>
  )
}

export default Menus;
