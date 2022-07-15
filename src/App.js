import React, { Component } from 'react'
import './App.css'

const imgBaseUrl = 'https://static.intercomassets.com/assets/oauth'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-contents'>
          <h1>SLA Dive</h1>
          <p>Login with Intercom OAuth</p>
          <div className='button-wrapper'>
            <a href="/.netlify/functions/auth">
              <img
                alt='Login with itercom'
                src={`${imgBaseUrl}/primary-7edb2ebce84c088063f4b86049747c3a.png`}
                srcSet={`${imgBaseUrl}/primary-7edb2ebce84c088063f4b86049747c3a.png 1x, ${imgBaseUrl}/primary@2x-0d69ca2141dfdfa0535634610be80994.png 2x, ${imgBaseUrl}/primary@3x-788ed3c44d63a6aec3927285e920f542.png 3x`}
              />
            </a>
          </div>

          <a href="https://sladive.tk" className='github-link'>
            Visit our Homepage
          </a>
        </div>
      </div>
   </div>
  </div>
   
     <h1>Made with</h1>  



    )
  }
}
