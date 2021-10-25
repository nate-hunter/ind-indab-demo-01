import React from 'react';


const loadingStyle = {
  page: {
    flex: 6,
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  }
}

const Loading = () => {
  return (
    <div style={loadingStyle.page}>
      <div style={loadingStyle.pageContainer}>
        Loading...
      </div>
    </div>
  )
}

export default Loading;
