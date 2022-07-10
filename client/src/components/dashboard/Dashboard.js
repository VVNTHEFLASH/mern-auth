import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { HashRouter as BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Vote from "./Vote/Vote";
import About from "./dash-components/About";
import Help from "./dash-components/Help";
import LiveResult from "./Vote/LiveResult";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  
  render() {
    const { user } = this.props.auth;
    console.log(user)

    let Profile = () => {
      return(
        <>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {user.name} </td>
                <td> {user.id} </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      )
    }

    return (
      <>
      {/* nav bar */}
      <BrowserRouter>
      <div className="row">
        <div className="col s2">
          <ul className="col s12">
            <Link to="/profile">
            <li className="row card-panel hoverable pink white-text">Profile</li>
            </Link>
            <Link to="/vote">
            <li className="row card-panel hoverable brown lighten-5 black-text">Vote</li>
            </Link>
            <Link to="/liveresult">
            <li className="row card-panel hoverable pink darken-1 white-text">Live Results</li>
            </Link>
            <Link to="/about">
            <li className="row card-panel hoverable brown lighten-5 black-text">About</li>
            </Link>
            <Link to="/help">
            <li className="row card-panel hoverable pink darken-1 white-text">Help</li>
            </Link>
            <li className="row card-panel hoverable brown lighten-5 green-text"
            onClick={this.onLogoutClick}>Logout</li>
          </ul>
        </div>
        <div className="col s9 card-panel pink lighten-2">
          {/* teal content */}
          <h5 className="white-text">Welcome to E-Voting System, {user.name}</h5>
          <div className="card teal-text">
            <blockquote>
              Note: Please Ensure that you can only vote one time
            </blockquote>
          </div>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route path="/vote" component={Vote}  />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/liveresult" component={LiveResult} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

