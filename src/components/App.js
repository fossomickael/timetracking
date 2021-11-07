import React from 'react';
import ListActivity from './ListActivity';
import UserReport from './UserReport';
import data from "../data/data.json";


class App extends React.Component {
 
  state = { periods: ["Daily", "Weekly", "Monthly"], activeperiod:"Daily"};

  onButtonClick =  (periodclicked) => {
        this.setState({ activeperiod: periodclicked });
  }

  render() {
    return (
      <div className="main">
        <div className="activities" >
            <UserReport 
                onButtonClick={this.onButtonClick} 
                periods={this.state.periods} 
                activeperiod={this.state.activeperiod}
            />
            <ListActivity activities={data} period={this.state.activeperiod.toLowerCase()}/>
        </div>
      </div>
      
    );
  }
}

export default App;