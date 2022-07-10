import React, { Component } from 'react';
import axios from "axios";

export default class LiveResult extends Component {

  constructor(){
    super();
    this.state = {
      dmkCount: 0,
      admkCount: 0,
      bjpCount: 0,
      notaCount: 0,
      totalCount: 0,
      notVotedCount: 0
    }
  }

  componentDidMount() {
   axios.get("/api/users/").then(res => {
      this.setState({ totalCount: this.state.totalCount})
    }).catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className='row'>
        <div className='center white-text'><h4>Live Results</h4></div>
        <div className='col s6'>
            <div className='row card-panel deep-orange darken-1 white-text'>
                <h6 className='col s6'>DMK</h6>
                <p className='col s6'><b>Vote Count </b>{""}{this.state.dmkCount}</p>
            </div>
            <div className='row card-panel green darken-1 white-text'>
                <h6 className='col s6'>ADMK</h6>
                <p className='col s6'><b>Vote Count</b>{" "}{this.state.admkCount}</p>
            </div>
            <div className='row card-panel yellow darken-1 white-text'>
                <h6 className='col s6'>BJP</h6>
                <p className='col s6'><b>Vote Count</b>{" "}{this.state.bjpCount}</p>
            </div>
            <div className='row card-panel grey white-text'>
                <h6 className='col s6'>N.O.T.A</h6>
                <p className='col s6'><b>Vote Count</b>{" "}{this.state.notaCount}</p>
            </div>
        </div>
        {/* Statistics */}
        <div className='col s6 white-text'>
            <div><h6>Statistics</h6></div>
            <div>
              Total Voter {this.state.totalCount}
              Not Voted {this.state.notVotedCount}
            </div>
        </div>
      </div>
    )
  }
}
