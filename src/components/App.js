import React from 'react';
import ListActivity from './ListActivity';
import UserReport from './UserReport';
import data from "../data/data.json";


class App extends React.Component {
 
  state = { period: 'daily' }; 
  
  onButtonClick =  (period) => {
    this.setState({ period: period });
  }

  render() {
    return (
      <div className="main">
        <div className="activities" >
            <UserReport onButtonClick={this.onButtonClick}/>
            <ListActivity activities={data} period={this.state.period}/>
        </div>
      </div>
      
    );
  }
}

export default App;