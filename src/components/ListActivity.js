import React from 'react';
import Activity from './Activity';

class ListActivity extends React.Component {

   
    render () {
        return (
            this.props.activities.map((activity) => {
                return <Activity activity={activity} key={activity.title} period={this.props.period} />;
            }  
        ))
    };

}

export default ListActivity;