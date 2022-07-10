import React, { Component } from 'react'

export default class Help extends Component {
  render() {
    return (
      <div className='white-text'>
        <div>
          <h3>Help!</h3>
          <div>
            <h4>Instruction</h4>
            <div>
              <blockquote>
              <ul>
                <li>User Must Copy Unique ID from Profile Page in order to Cast Vote.</li>
                <li>Paste the copied Id in Vote link, input bar.</li>
                <li>Select your Favorite Party and press Vote button to Cast Vote.</li>
                <li>After Voting You will redirected to live result page, where you can see who is leading party.</li>
                <li>After Voting Make Sure to Logout.</li>
              </ul>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
