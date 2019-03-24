import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";



export class Dashboard2 extends Component {
  render() {
    const {auth, uid } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard row main-dash">
        {/* 
          left side dashboard
          - user avatar
          - transaction data
          - equity
          - YTD Gains
          - YTD Taxes
        */}
        <h1>TEST</h1>
        <div className="col m5">
        </div>




          {/* 
            right side dashboard  
            - graphs indicating current user stock portfolio
            - What if engine
              - Ticker
              - Date
              - Numbers of shares
              - Price
              - Submit button
          */}
          <div className="col m7">
            <div className="">
            {/* Graph Div placeholder */}
            <div className="graph">
                <h1>GRAPH SECTION</h1>
              </div>
              <br/><br/>

              <label htmlFor="graph">Ticker</label>
              <input type="text"></input>
            </div>
            <div className="">
              <label htmlFor="graph">Date</label>
              <input type="text"></input>
            </div>
            <div className="">
              <label htmlFor="graph">Number of shares</label>
              <input type="text"></input>
            </div>
            <div className="">
              <label htmlFor="graph">Price</label>
              <input type="text"></input>
            </div>
            <br/>

        
            <div>
              <br/>
              <div className="row">
                <div className="row s2">
                  <label>
                    <input name="group1" type="radio" />
                    <span className="radiobutton">What If Simulation</span>
                  </label>
                    
                  <label>
                    <input name="group1" type="radio" />
                    <span className="radiobutton">Record</span>
                  </label>
                </div>
                <br/>
                <div className="row">
                  <label>
                      <input name="group2" type="radio" />
                      <span className="radiobutton">Buy</span>
                    </label>
                    <label>
                      <input name="group2" type="radio" />
                      <span className="radiobutton">Sell</span>
                    </label>
                </div>   
                <br/>  
                <input type="submit" className="waves-effect waves-light btn red" value="Submit"/>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard2);
