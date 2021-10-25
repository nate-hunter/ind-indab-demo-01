import { AccountBalance, LineStyle, Logout, Policy, TableChart } from '@mui/icons-material';
import Home from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
  sidebar: {
    flex: '1',
    height: 'calc(100vh - 50px)',
    position: 'sticky',
    top: '50px',
    backgroundColor: 'darkblue',
    color: 'whitesmoke',
  },
  sidebarWrapper: { padding: '20px'},
  sidebarMenu: { marginBottom: '10px' },
  sidebarTitle: { 
    textAlign: 'center',
    fontSize: '13px', 
    color: '#c2fef7', 
  },
  sidebarList: { listStyle: 'none', padding: '5px' },
  sidebarListItem: { 
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '5px',
    cursor: 'pointer',
  },
  sidebarListText: { marginLeft: '5px' },
  sidebarIcon: {
    marginRight: '5px',
    fontSize: '20px !important',
  },
}

const Sidebar = () => {
  return (
    <div style={sidebarStyle.sidebar}>
      <div style={sidebarStyle.sidebarWrapper}>
        {/* <h3 style={sidebarStyle.sidebarTitle}>Menu</h3> */}
        <ul style={sidebarStyle.sidebarList}>
          <Link to="/" className="link">
            <li style={sidebarStyle.sidebarListItem}>
              <Home style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Home</span>
            </li>
          </Link>

          <a href="http://ind-prod-app-09:8089/watchtower/#/" className="link" target="_blank" rel="noopener noreferrer">
            <li style={sidebarStyle.sidebarListItem}>
              <Policy style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Watchtower</span>
            </li>
          </a>

          <Link to="/assetMgmt" className="link">
            <li style={sidebarStyle.sidebarListItem}>
              <TableChart style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Asset Management</span>
            </li>
          </Link>

          <Link to="/billing" className="link">
            <li style={sidebarStyle.sidebarListItem}>
              <AccountBalance style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Billing Processing</span>
            </li>
          </Link>  
          
          <Link to="/partnerResources" className="link">
            <li style={sidebarStyle.sidebarListItem}>
              <LineStyle style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Partner Resources</span>
            </li>
          </Link> 

          <Link to="/loading" className="link">
          {/* <Link to="/account/logout" className="link"> */}
            <li style={sidebarStyle.sidebarListItem}>
              <Logout style={sidebarStyle.sidebarIcon} />
              <span style={sidebarStyle.sidebarListText}>Logout</span>
            </li>
          </Link>                            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
