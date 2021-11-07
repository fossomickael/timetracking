import React from 'react';
import jeremyimage from '../assets/images/image-jeremy.png';
import PeriodTitle from './PeriodTitle';

class UserReport extends React.Component { 
    
    displayPeriodTitles = () => {
        return this.props.periods.map((period) => {
            return <PeriodTitle title={period} activeperiod={this.props.activeperiod} key={period} onButtonClick={this.props.onButtonClick}/>;
        } )
        
    }

    render () {
        return (
            <div className="report">
                <div className="profile">
                    <img src={jeremyimage} alt="jeremy" className="avatar" />
                    <span className="title">Report for</span><span className="profile-name">Jeremy<br/>Robson</span>
                </div>
                   
                <div className="period">
                    {this.displayPeriodTitles()}
                </div>
            </div>
            
        )
       };
        


}

export default UserReport;