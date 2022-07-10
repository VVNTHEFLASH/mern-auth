import React, { Component } from 'react';
import axios from "axios";

export default class LiveResult extends Component {

  constructor(props){
    super(props);
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
      this.setState({ 
        totalCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/dmk").then(res => {
      this.setState({ 
        dmkCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/admk").then(res => {
      this.setState({ 
        admkCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/bjp").then(res => {
      this.setState({ 
        bjpCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/bjp").then(res => {
      this.setState({ 
        bjpCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/nota").then(res => {
      this.setState({ 
        notaCount: res.data
      })
    }).catch(err => { console.log(err) })

    axios.get("/api/users/nv").then(res => {
      this.setState({ 
        notVotedCount: res.data
      })
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
            <div className='container'>
              <div className='white'>
                <label className='black-text'>Total No of Candidates</label>
                <label className='black-text'>{" "}{this.state.totalCount}</label>
              </div>
              <div className="grey">
                <label className='white-text'>No of Candidates Not Voted</label>
                <label className='white-text'>{" "}{this.state.notVotedCount}</label>
              </div>
            </div>
            <div>
              <label>Leading Party</label>
              <div className='white red-text'>
                {
                this.state.dmkCount > this.state.admkCount &&  
                this.state.dmkCount > this.state.bjpCount &&
                this.state.dmkCount > this.state.notaCount
                ? `DMK is Leading with ${this.state.dmkCount} votes` :
                this.state.admkCount > this.state.dmkCount &&
                this.state.admkCount > this.state.bjpCount &&
                this.state.admkCount > this.state.notaCount
                ?  `ADMK is Leading with ${this.state.admkCount} votes` :
                this.state.bjpCount > this.state.dmkCount && 
                this.state.bjpCount > this.state.admkCount && 
                this.state.bjpCount > this.state.notaCount 
                ? `BJP is Leading with ${this.state.bjpCount} votes` :
               `NOTA is Leading with ${this.state.notaCount} votes`    
                }
              </div> 
            </div>
        </div>
      </div>
    )
  }
}
