import React, { Component } from 'react'

export default class LiveResult extends Component {



  render() {
    return (
      <div className='row'>
        <div className='center white-text'><h4>Live Results</h4></div>
        <div className='col s6'>
            <div className='row card-panel deep-orange darken-1 white-text'>
                <h6 className='col s6'>DMK</h6>
                <p className='col s6'><b>Vote Count </b>{""}{0}</p>
            </div>
            <div className='row card-panel green darken-1 white-text'>
                <h6 className='col s6'>ADMK</h6>
                <p className='col s6'><b>Vote Count</b>{" "}#</p>
            </div>
            <div className='row card-panel yellow darken-1 white-text'>
                <h6 className='col s6'>BJP</h6>
                <p className='col s6'><b>Vote Count</b>{" "}#</p>
            </div>
            <div className='row card-panel grey white-text'>
                <h6 className='col s6'>N.O.T.A</h6>
                <p className='col s6'><b>Vote Count</b>{" "}#</p>
            </div>
        </div>
        {/* Statistics */}
        <div className='col s6 white-text'>
            <div><h6>Statistics</h6></div>
            <div>
                {/* Statistics Here */}
                Coming Soon!!!
            </div>
        </div>
      </div>
    )
  }
}
