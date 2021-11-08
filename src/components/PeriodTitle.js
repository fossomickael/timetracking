import React from 'react';

class PeriodTitle extends React.Component {
    
    handleClick = (e) => {
        console.log(e.target);
        e.preventDefault();
        const periodactive = e.target.textContent || e.target.outerText;
        this.props.onButtonClick(periodactive);
      };

    render () {
        const classactive = this.props.activeperiod.toLowerCase() === this.props.title.toLowerCase() ? "active" : "" ;
        return (
            <div className="period-title">
                <button className={`btn-period ${classactive}`} onClick={this.handleClick}>{this.props.title}</button>
            </div>
        )
    };
   

}

export default PeriodTitle;