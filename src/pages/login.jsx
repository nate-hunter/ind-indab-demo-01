import React from 'react'

const loginStyle = {
  page: {
    flex: 6,
    marginTop: '100px',
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'slateblue',
  },
  formContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '300px',
    // backgroundColor: 'lightseagreen'
  },
  formItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
    // backgroundColor: 'salmon',
  },
  formBtn: {
    alignSelf: 'center',
    width: '200px',
    border: 'none',
    borderRadius: '10px',
    padding: '7px 10px',
    backgroundColor: 'darkblue',
    color: 'white',
    marginTop: '20px',
    // padding: '10px',
    cursor: 'pointer',
    
  }
}

const Login = () => {
  
  return (
    <div style={loginStyle.page}>
      <div style={loginStyle.pageContainer}>
        <form style={loginStyle.formContainer}>
          <div style={loginStyle.formItem}>
            <label>Login</label>
            <input type="text" />
          </div>

          <div style={loginStyle.formItem}>
            <label>Password</label>
            <input type="password" />
          </div>

          <button type="submit" style={loginStyle.formBtn} disabled>Submit</button>
          <p style={{ color: 'red', fontStyle: 'oblique', marginTop: '15px', textAlign: "center" }}>(The form is not active)</p>
        </form>
      </div>
    </div>
  )
}

export default Login;