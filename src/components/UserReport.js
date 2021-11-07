import React from 'react';
import jeremyimage from '../assets/images/image-jeremy.png';
import PeriodTitle from './PeriodTitle';

class UserReport extends React.Component {

    state = { periods: {Daily:"active",Weekly:"",Monthly:""} }; 
       
    handleClick = (e) => {
      e.preventDefault();
      this.props.onButtonClick(e.target.outerText.toLowerCase());
    };

       render () {
        return (
            <div className="report">
                <div className="profile">
                    <img src={jeremyimage} alt="jeremy" className="avatar" />
                    <span className="title">Report for</span><span class="profile-name">Jeremy<br/>Robson</span>
                </div>
                   
                <div className="period">
                    
                    <div className="period-title"><button onClick={this.handleClick} className="btn-period">Daily</button></div>
                    <div className="period-title"><button onClick={this.handleClick} className="btn-period">Weekly</button></div>
                    <div className="period-title"><button onClick={this.handleClick} className="btn-period">Monthly</button></div>
                    <PeriodTitle title={'Daily'} />
                </div>
            </div>
            
        )
       };
        


}

export default UserReport;