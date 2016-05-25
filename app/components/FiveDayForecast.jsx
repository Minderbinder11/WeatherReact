var React = require('react');


/*<!-- I could make little weather boxes to be build onto this page to show the 5 day forecast --> */

var FiveDay = React.createClass({

    render: function(){

        var {location, list} = this.props;
        console.log(list);

        return (
            <h3> Five Day Forecast for {location} </h3>
        );
    }
});

module.exports = FiveDay;