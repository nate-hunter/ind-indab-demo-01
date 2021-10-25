import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { DarkMode, LightMode, ToggleOn } from '@mui/icons-material';

const topbarStyle = {
  topbar: {
    width: '100%',
    height: '50px',
    backgroundColor: 'whitesmoke',
    position: 'sticky',
    top: 0,
  },
  topbarWrapper: {
    height: '100%',
    padding: '0px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topLeft: {},
  logo: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'darkblue',
    cursor: 'pointer',
  },
  logoFirstLetter: {
    color: '#279cd3',
  },
  topRight: {
    display: 'flex',
    alignItems: 'center',
  },
  topbarIconContainer: {
    position: 'relative',
    cursor: 'pointer',
    marginRight: '10px',
    // color: '#555',
  },
  topbarIconDarkBg: {
    // backgroundColor: '#555',
    backgroundColor: 'darkblue',
    borderRadius: '10px',
    padding: '4px',
  },
  topbarIconLightBg: { 
    // backgroundColor: 'rgb(65, 166, 255)',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '4px',
  },
  topbarIconDark: {
    // fontSize: '2px !important',
    color: 'white',
  },
  topbarIconLight: {
    color: 'darkblue',
  },
  topBarUsername: {
    marginLeft: '25px',
    cursor: 'pointer',
    color: 'slateblue',
    fontWeight: 'bold', 
  },
}

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log('darkmode', darkMode)

  const toggleDarkMode = e => {
    setDarkMode(!darkMode);
    console.log('darkmode in toggle function:', darkMode)
  }

  return (
    <div style={topbarStyle.topbar}>
      <div style={topbarStyle.topbarWrapper}>
        <div style={topbarStyle.topLeft}>
          <Link to="/" className="link">
            <span style={topbarStyle.logo} className='indLogoFont'><span style={topbarStyle.logoFirstLetter}>i</span>NDEMAND</span>
          </Link>
        </div>
        <div style={topbarStyle.topRight}>
          <div style={topbarStyle.topbarIconContainer} onClick={toggleDarkMode}>
            {darkMode 
              ? (
                  <div style={topbarStyle.topbarIconDarkBg}>
                    <DarkMode style={topbarStyle.topbarIconDark} fontSize="small" />
                  </div>
                )
              : (
                  <div style={topbarStyle.topbarIconLightBg}>
                    <LightMode style={topbarStyle.topbarIconLight} fontSize="small" />
                  </div>
                )
            }
          </div>
          <div>
            <Link to="/account/login" className="link">
              <span style={topbarStyle.topBarUsername}>nhunter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
