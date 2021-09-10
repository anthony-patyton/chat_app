import React, { useState }from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';

import siginImage from '../assets/signup.jpg';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = () => {}

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign up' : 'Sign in'}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlfor="fullName">Full Name></label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
