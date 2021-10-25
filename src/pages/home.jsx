import React from 'react';

const homeStyle = {
  home: {
    flex: '6'
  },
  homeContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    color: 'darkblue',
    marginTop: '25px',
  },
  contentContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginTop: '25px',
    // backgroundColor: '#f99595',
  },
  contentItemContainer: {
    width: '650px',
    marginTop: '15px'
    // backgroundColor: 'slateblue',
  },
  contentLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    marginLeft: '15px',
  }

}

const Home = () => {
  const username = 'nhunter';
  const releaseDate = 'Oct 22 2021 9:06PM';
  const version = 'iNDAB_10_2_1_1_v_1_db_1';
  const releaseNotes = [
    'LP-4511 : Avails - Planner: EST Prelim Creation Eligibility check is failing when POEST & EST prelims are created using the same Master',
    'LP-4540 : Avails - Master Management: TV Extra Master creation issues',
    'LP-4544 : Avails- Master Management Screen - Remove Pre Order Version from the Master Version Type dropdown'
  ];

  const displayReleaseNotes = releaseNotes.map((note, i) => {
    return <li key={i}>{note}</li>
  });

  return (
    <div style={homeStyle.home}>
      <div style={homeStyle.homeContainer}>
        <h1>Welcome to iNDAB</h1>

        <div style={homeStyle.contentContainer}>
          <div style={homeStyle.contentItemContainer}>
            <span style={homeStyle.contentLabel}>User:</span>
            <span style={homeStyle.content}>{username}</span>
          </div>

          <div style={homeStyle.contentItemContainer}>
            <span style={homeStyle.contentLabel}>Release Date:</span>
            <span style={homeStyle.content}>{releaseDate}</span>
          </div>

          <div style={homeStyle.contentItemContainer}>
            <span style={homeStyle.contentLabel}>Version:</span>
            <span style={homeStyle.content}>{version}</span>
          </div>

        <div style={homeStyle.contentItemContainer}>
            <span style={homeStyle.contentLabel}>Release Notes:</span>
            <ul style={homeStyle.content}>{displayReleaseNotes}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
