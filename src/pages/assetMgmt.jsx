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
  const menu = {
    'Schedule Management': [
      {'Manage Schedule': 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMaintenanceFilter.do?action=initial&searchType=1&dashboardSearchOpen=true&dbSearchFrom=assetMaint'},
      'Asset Master Search',
      'Stunt Management',
      'Franchise Management',
      'My Lock Manager'
    ],
    'OPS Review': [
      'XML Bulk'
    ]
  }


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
