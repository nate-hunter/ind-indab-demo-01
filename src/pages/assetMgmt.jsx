import React from 'react';
import Menus from '../components/pageMenus/Menus';


const assetMgmtStyle = {
  page: {
    flex: '6'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    color: 'darkblue',
    marginTop: '25px',
  }
}

const AssetMgmt = () => {
  return (
    <div style={assetMgmtStyle.page}>
      <div style={assetMgmtStyle.container}>
        <h1>Asset Management</h1>
        <p>Please select from the following:</p>
        <Menus />
      </div>
    </div>
  )
}

export default AssetMgmt
