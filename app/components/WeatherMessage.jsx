var React = require('react');

var WeatherMessage = ({temp, location}) =>{

        return (
            <div>
                <p> It's a beautiful day in {location}, the temperature is {temp}</p>
            </div>
        );
};

module.exports = WeatherMessage;