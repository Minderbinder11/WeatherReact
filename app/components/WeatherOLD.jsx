var React = require('react');
var InputButton = require('InputButton');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });

        /*
        openWeatherMap.getFutureForecast(location).then(function (futureForecast) {
            that.setState({
                futureForecast: futureForecast.list // futureForecast is some array
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
        */
    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
              //  {this.state.futureForecast.map((forecast) => <ForecastBlock forecast={forecast} />)}
                <h3>Weather Component</h3>
                <InputButton onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;