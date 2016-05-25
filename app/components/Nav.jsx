var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) =>{

        return (
            <div>
                <div className="navbar navbar-default header">Nav Component</div>
                <div className="container-fluid">
                <IndexLink to="/"           activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <IndexLink to="/about"      activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                <IndexLink to="/examples"   activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
                <IndexLink to="/fiveday"    activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Five Day Forecast</IndexLink>

                </div>
            </div>
        );
};

module.exports = Nav;