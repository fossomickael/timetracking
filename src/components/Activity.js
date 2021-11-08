import React from 'react';

const Activity = (props) => {
  
        return (
            <div className={`card ${props.activity.title.replace(/\s/g, '')}`}>
                
                <div className="card-description ">
                    <h5>{props.activity.title}</h5>
                    <h1>{props.activity.timeframes[props.period].current} hours</h1>
                    <p>Last Week - {props.activity.timeframes[props.period].previous}  hours</p>
                </div>
            </div>
            
        );


}

export default Activity;